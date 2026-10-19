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
        const { script } = get();
        if (!script) {
          set({
            runtime: null,
            beat: null,
            restartOnLoad: true,
            logOpen: false,
            galleryOpen: false,
          });
          return;
        }
        const created = createRuntime(script);
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
        set({ runtime: next, beat: settle(script, next), restartOnLoad: false, error: null });
      },
    }),
    {
      name: "zizzy-pony-long-way-v1",
      skipHydration: true,
      version: 1,
      partialize: (state) => ({ runtime: state.runtime }),
      onRehydrateStorage: () => () => {
        useLongWay.setState({ hydrated: true });
      },
    },
  ),
);
