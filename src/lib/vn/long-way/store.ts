import { create } from "zustand";
import { persist } from "zustand/middleware";
import { scriptedStoryUrl, type ScriptSlot } from "./assets";
import {
  advanceRuntime,
  chooseRuntime,
  createRuntime,
  prepareScript,
  settle,
  type Beat,
  type Runtime,
  type Script,
} from "./engine";

export type { ScriptSlot };

type Saves = { "long-way": Runtime | null; echoes: Runtime | null };

type LongState = {
  hydrated: boolean;
  storyKey: ScriptSlot;
  saves: Saves;
  script: Script | null;
  runtime: Runtime | null;
  beat: Beat | null;
  error: string | null;
  logOpen: boolean;
  galleryOpen: boolean;
  restartOnLoad: boolean;
  toggleLog: () => void;
  toggleGallery: () => void;
  closePanels: () => void;
  setStory: (key: ScriptSlot) => void;
  advance: () => void;
  choose: (key: string) => void;
  restart: () => void;
  resumeOrStart: () => void;
};

/**
 * These scenes gained steps when the extra routes were spliced in, so an
 * older cursor index no longer points at the same line. Anywhere else, the
 * scene ids and step lists match the previous public script.
 */
const SHIFTED_SCENES = new Set([
  "ch09_s04",
  "ch11_end_true_04",
  "ch11_end_true_06",
  "ch11_end_good_03",
]);

let loadedFor: ScriptSlot | null = null;
let loading: { key: ScriptSlot; promise: Promise<Script> } | null = null;

function emptySaves(): Saves {
  return { "long-way": null, echoes: null };
}

export function ensureLongWayScript(key: ScriptSlot = "long-way"): Promise<Script> {
  const state = useLongWay.getState();
  if (state.script && loadedFor === key) return Promise.resolve(state.script);
  if (loading?.key === key) return loading.promise;

  loadedFor = key;
  if (state.script) useLongWay.setState({ script: null });

  const promise = fetch(scriptedStoryUrl(key))
    .then(async (res) => {
      if (!res.ok) throw new Error("The story file didn't load.");
      return prepareScript(await res.json());
    })
    .then((script) => {
      if (loadedFor === key) useLongWay.setState({ script, error: null });
      return script;
    })
    .catch((err: unknown) => {
      if (loadedFor === key) loadedFor = null;
      if (loading?.key === key) loading = null;
      const message = err instanceof Error ? err.message : "The story didn't open.";
      useLongWay.setState({ error: message });
      throw err;
    });
  loading = { key, promise };
  return promise;
}

function put(runtime: Runtime, beat: Beat, extra?: Partial<LongState>) {
  const storyKey = useLongWay.getState().storyKey;
  useLongWay.setState({
    runtime,
    beat,
    saves: { ...useLongWay.getState().saves, [storyKey]: runtime },
    ...extra,
  });
}

export const useLongWay = create<LongState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      storyKey: "long-way",
      saves: emptySaves(),
      script: null,
      runtime: null,
      beat: null,
      error: null,
      logOpen: false,
      galleryOpen: false,
      restartOnLoad: false,
      toggleLog: () => set((state) => ({ logOpen: !state.logOpen, galleryOpen: false })),
      toggleGallery: () => set((state) => ({ galleryOpen: !state.galleryOpen, logOpen: false })),
      closePanels: () => set({ logOpen: false, galleryOpen: false }),
      setStory: (key) => {
        const state = get();
        if (state.storyKey === key) return;
        const saves = { ...state.saves, [state.storyKey]: state.runtime };
        set({
          storyKey: key,
          saves,
          runtime: saves[key],
          beat: null,
          script: loadedFor === key ? state.script : null,
          error: null,
          logOpen: false,
          galleryOpen: false,
        });
      },
      advance: () => {
        const { script, runtime, storyKey } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== storyKey) return;
        const next = structuredClone(runtime);
        put(next, advanceRuntime(script, next));
      },
      choose: (key) => {
        const { script, runtime, storyKey } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== storyKey) return;
        const next = structuredClone(runtime);
        put(next, chooseRuntime(script, next, key));
      },
      restart: () => {
        const { script, storyKey } = get();
        if (!script || loadedFor !== storyKey) {
          set({
            runtime: null,
            beat: null,
            saves: { ...get().saves, [storyKey]: null },
            restartOnLoad: true,
            logOpen: false,
            galleryOpen: false,
          });
          return;
        }
        const created = createRuntime(script);
        put(created.runtime, created.beat, {
          restartOnLoad: false,
          error: null,
          logOpen: false,
          galleryOpen: false,
        });
      },
      resumeOrStart: () => {
        const { script, storyKey, saves, restartOnLoad } = get();
        if (!script || loadedFor !== storyKey) return;
        const runtime = saves[storyKey];
        if (restartOnLoad || !runtime || !script.sceneIndex.has(runtime.cursor.sceneId)) {
          const created = createRuntime(script);
          put(created.runtime, created.beat, { restartOnLoad: false, error: null });
          return;
        }
        const next = structuredClone(runtime);
        const beat = settle(script, next);
        if (beat.kind === "error") {
          const created = createRuntime(script);
          put(created.runtime, created.beat, { restartOnLoad: false, error: null });
          return;
        }
        put(next, beat, { restartOnLoad: false, error: null });
      },
    }),
    {
      name: "zizzy-pony-long-way-v1",
      skipHydration: true,
      version: 4,
      partialize: (state) => ({ saves: state.saves, storyKey: state.storyKey }),
      migrate: (persisted, version) => {
        const data = (persisted ?? {}) as {
          runtime?: Runtime | null;
          echoes?: Runtime | null;
          storyKey?: ScriptSlot;
          saves?: Partial<Saves> & { public?: Runtime | null };
        };
        let longWay: Runtime | null = null;
        if (version < 2) longWay = data.runtime ?? null;
        else if (version < 3) longWay = data.saves?.public ?? data.runtime ?? null;
        else if (version < 4) longWay = data.runtime ?? data.saves?.public ?? data.saves?.["long-way"] ?? null;
        else longWay = data.saves?.["long-way"] ?? data.runtime ?? null;
        // Step indexes in the spliced scenes moved, so an older cursor there
        // would open on the wrong line. Drop it and start clean.
        if (version < 3 && longWay && SHIFTED_SCENES.has(longWay.cursor?.sceneId)) longWay = null;
        const echoes = data.echoes ?? data.saves?.echoes ?? null;
        const storyKey: ScriptSlot = data.storyKey === "echoes" ? "echoes" : "long-way";
        return { saves: { "long-way": longWay, echoes }, storyKey };
      },
      onRehydrateStorage: () => (state) => {
        if (!state) {
          useLongWay.setState({ hydrated: true });
          return;
        }
        useLongWay.setState({
          hydrated: true,
          runtime: state.saves[state.storyKey] ?? null,
        });
      },
    },
  ),
);
