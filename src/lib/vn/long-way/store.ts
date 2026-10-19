import { create } from "zustand";
import { persist } from "zustand/middleware";
import { longWayStoryUrl } from "./assets";
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

type LongState = {
  hydrated: boolean;
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

let loading: Promise<Script> | null = null;

export function ensureLongWayScript(): Promise<Script> {
  const ready = useLongWay.getState().script;
  if (ready) return Promise.resolve(ready);
  if (!loading) {
    loading = fetch(longWayStoryUrl())
      .then(async (res) => {
        if (!res.ok) throw new Error("The story file didn't load.");
        return prepareScript(await res.json());
      })
      .then((script) => {
        useLongWay.setState({ script, error: null });
        return script;
      })
      .catch((err: unknown) => {
        loading = null;
        const message = err instanceof Error ? err.message : "The story didn't open.";
        useLongWay.setState({ error: message });
        throw err;
      });
  }
  return loading;
}

function fresh() {
  const script = useLongWay.getState().script;
  if (!script) return null;
  return createRuntime(script);
}

export const useLongWay = create<LongState>()(
  persist(
    (set, get) => ({
      hydrated: false,
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
      advance: () => {
        const { script, runtime } = get();
        if (!script || !runtime || runtime.ending) return;
        const next = structuredClone(runtime);
        set({ runtime: next, beat: advanceRuntime(script, next) });
      },
      choose: (key) => {
        const { script, runtime } = get();
        if (!script || !runtime || runtime.ending) return;
        const next = structuredClone(runtime);
        set({ runtime: next, beat: chooseRuntime(script, next, key) });
      },
      restart: () => {
        const created = fresh();
        if (!created) {
          set({ runtime: null, beat: null, restartOnLoad: true, logOpen: false, galleryOpen: false });
          return;
        }
        set({
          runtime: created.runtime,
          beat: created.beat,
          restartOnLoad: false,
          error: null,
          logOpen: false,
          galleryOpen: false,
        });
      },
      resumeOrStart: () => {
        const { script, runtime, restartOnLoad } = get();
        if (!script) return;
        if (restartOnLoad || !runtime || !script.sceneIndex.has(runtime.cursor.sceneId)) {
          const created = createRuntime(script);
          set({ runtime: created.runtime, beat: created.beat, restartOnLoad: false, error: null });
          return;
        }
        const next = structuredClone(runtime);
        const beat = settle(script, next);
        if (beat.kind === "error") {
          const created = createRuntime(script);
          set({ runtime: created.runtime, beat: created.beat, restartOnLoad: false, error: null });
          return;
        }
        set({ runtime: next, beat, restartOnLoad: false, error: null });
      },
    }),
    {
      name: "zizzy-pony-long-way-v1",
      skipHydration: true,
      version: 3,
      partialize: (state) => ({ runtime: state.runtime }),
      migrate: (persisted, version) => {
        const data = (persisted ?? {}) as {
          runtime?: Runtime | null;
          saves?: { public?: Runtime | null };
        };
        let runtime: Runtime | null = null;
        if (version < 2) runtime = data.runtime ?? null;
        else if (version < 3) runtime = data.saves?.public ?? data.runtime ?? null;
        else runtime = data.runtime ?? null;
        // Step indexes in the spliced scenes moved, so an older cursor there
        // would open on the wrong line. Drop it and start clean.
        if (version < 3 && runtime && SHIFTED_SCENES.has(runtime.cursor?.sceneId)) runtime = null;
        return { runtime };
      },
      onRehydrateStorage: () => () => {
        useLongWay.setState({ hydrated: true });
      },
    },
  ),
);
