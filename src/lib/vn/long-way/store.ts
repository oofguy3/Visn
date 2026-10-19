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

export type Edition = "public" | "private";
export type { ScriptSlot };

type Saves = { public: Runtime | null; private: Runtime | null; echoes: Runtime | null };

type LongState = {
  hydrated: boolean;
  edition: Edition;
  slot: ScriptSlot;
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
  setEdition: (edition: Edition) => void;
  setSlot: (slot: ScriptSlot) => void;
  advance: () => void;
  choose: (key: string) => void;
  restart: () => void;
  resumeOrStart: () => void;
};

let loadedFor: ScriptSlot | null = null;
let loading: { slot: ScriptSlot; promise: Promise<Script> } | null = null;

function emptySaves(): Saves {
  return { public: null, private: null, echoes: null };
}

export function ensureLongWayScript(slot: ScriptSlot = "public"): Promise<Script> {
  if (slot === "private" && import.meta.env.VITE_ENABLE_PRIVATE_STORIES !== "true") {
    slot = "public";
  }
  const state = useLongWay.getState();
  if (state.script && loadedFor === slot) return Promise.resolve(state.script);
  if (loading?.slot === slot) return loading.promise;

  loadedFor = slot;
  if (state.script) useLongWay.setState({ script: null });

  const promise = fetch(scriptedStoryUrl(slot))
    .then(async (res) => {
      if (!res.ok) throw new Error("The story file didn't load.");
      return prepareScript(await res.json());
    })
    .then((script) => {
      if (loadedFor === slot) useLongWay.setState({ script, error: null });
      return script;
    })
    .catch((err: unknown) => {
      if (loadedFor === slot) loadedFor = null;
      if (loading?.slot === slot) loading = null;
      const message = err instanceof Error ? err.message : "The story didn't open.";
      useLongWay.setState({ error: message });
      throw err;
    });
  loading = { slot, promise };
  return promise;
}

function put(runtime: Runtime, beat: Beat, extra?: Partial<LongState>) {
  const slot = useLongWay.getState().slot;
  useLongWay.setState({
    runtime,
    beat,
    saves: { ...useLongWay.getState().saves, [slot]: runtime },
    ...extra,
  });
}

export const useLongWay = create<LongState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      edition: "public",
      slot: "public",
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
      setSlot: (slot) => {
        const state = get();
        if (state.slot === slot) return;
        const saves = { ...state.saves, [state.slot]: state.runtime };
        set({
          slot,
          edition: slot === "echoes" ? state.edition : slot,
          saves,
          runtime: saves[slot],
          beat: null,
          script: loadedFor === slot ? state.script : null,
          error: null,
          logOpen: false,
          galleryOpen: false,
        });
      },
      setEdition: (edition) => {
        get().setSlot(edition);
      },
      advance: () => {
        const { script, runtime, slot } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== slot) return;
        const next = structuredClone(runtime);
        put(next, advanceRuntime(script, next));
      },
      choose: (key) => {
        const { script, runtime, slot } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== slot) return;
        const next = structuredClone(runtime);
        put(next, chooseRuntime(script, next, key));
      },
      restart: () => {
        const { script, slot } = get();
        if (!script || loadedFor !== slot) {
          set({
            runtime: null,
            beat: null,
            saves: { ...get().saves, [slot]: null },
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
        const { script, slot, saves, restartOnLoad } = get();
        if (!script || loadedFor !== slot) return;
        const runtime = saves[slot];
        if (restartOnLoad || !runtime || !script.sceneIndex.has(runtime.cursor.sceneId)) {
          const created = createRuntime(script);
          put(created.runtime, created.beat, { restartOnLoad: false, error: null });
          return;
        }
        const next = structuredClone(runtime);
        put(next, settle(script, next), { restartOnLoad: false, error: null });
      },
    }),
    {
      name: "zizzy-pony-long-way-v1",
      skipHydration: true,
      version: 3,
      partialize: (state) => ({ saves: state.saves, edition: state.edition, slot: state.slot }),
      migrate: (persisted, version) => {
        if (version < 2) {
          const runtime =
            persisted && typeof persisted === "object" && "runtime" in persisted
              ? ((persisted as { runtime?: Runtime | null }).runtime ?? null)
              : null;
          return {
            saves: { public: runtime, private: null, echoes: null },
            edition: "public" as const,
            slot: "public" as const,
          };
        }
        const previous = persisted as {
          saves?: Partial<Saves>;
          edition?: Edition;
          slot?: ScriptSlot;
        };
        const edition: Edition = previous.edition === "private" ? "private" : "public";
        const slot: ScriptSlot =
          previous.slot === "public" || previous.slot === "private" || previous.slot === "echoes"
            ? previous.slot
            : edition;
        return {
          saves: {
            public: previous.saves?.public ?? null,
            private: previous.saves?.private ?? null,
            echoes: previous.saves?.echoes ?? null,
          },
          edition: slot === "echoes" ? edition : slot,
          slot,
        };
      },
      onRehydrateStorage: () => (state) => {
        if (!state) {
          useLongWay.setState({ hydrated: true });
          return;
        }
        useLongWay.setState({
          hydrated: true,
          runtime: state.saves[state.slot] ?? null,
        });
      },
    },
  ),
);
