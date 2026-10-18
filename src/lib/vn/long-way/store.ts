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

export type Edition = "public" | "private";

type Saves = { public: Runtime | null; private: Runtime | null };

type LongState = {
  hydrated: boolean;
  edition: Edition;
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
  advance: () => void;
  choose: (key: string) => void;
  restart: () => void;
  resumeOrStart: () => void;
};

let loadedFor: Edition | null = null;
let loading: { edition: Edition; promise: Promise<Script> } | null = null;

function emptySaves(): Saves {
  return { public: null, private: null };
}

export function ensureLongWayScript(edition: Edition = "public"): Promise<Script> {
  if (edition === "private" && import.meta.env.VITE_ENABLE_PRIVATE_STORIES !== "true") {
    edition = "public";
  }
  const state = useLongWay.getState();
  if (state.script && loadedFor === edition) return Promise.resolve(state.script);
  if (loading?.edition === edition) return loading.promise;

  loadedFor = edition;
  if (state.script) useLongWay.setState({ script: null });

  const promise = fetch(longWayStoryUrl(edition))
    .then(async (res) => {
      if (!res.ok) throw new Error("The story file didn't load.");
      return prepareScript(await res.json());
    })
    .then((script) => {
      if (loadedFor === edition) useLongWay.setState({ script, error: null });
      return script;
    })
    .catch((err: unknown) => {
      if (loadedFor === edition) loadedFor = null;
      if (loading?.edition === edition) loading = null;
      const message = err instanceof Error ? err.message : "The story didn't open.";
      useLongWay.setState({ error: message });
      throw err;
    });
  loading = { edition, promise };
  return promise;
}

function put(runtime: Runtime, beat: Beat, extra?: Partial<LongState>) {
  const edition = useLongWay.getState().edition;
  useLongWay.setState({
    runtime,
    beat,
    saves: { ...useLongWay.getState().saves, [edition]: runtime },
    ...extra,
  });
}

export const useLongWay = create<LongState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      edition: "public",
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
      setEdition: (edition) => {
        const state = get();
        if (state.edition === edition) return;
        const saves = { ...state.saves, [state.edition]: state.runtime };
        set({
          edition,
          saves,
          runtime: saves[edition],
          beat: null,
          script: loadedFor === edition ? state.script : null,
          error: null,
          logOpen: false,
          galleryOpen: false,
        });
      },
      advance: () => {
        const { script, runtime, edition } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== edition) return;
        const next = structuredClone(runtime);
        put(next, advanceRuntime(script, next));
      },
      choose: (key) => {
        const { script, runtime, edition } = get();
        if (!script || !runtime || runtime.ending || loadedFor !== edition) return;
        const next = structuredClone(runtime);
        put(next, chooseRuntime(script, next, key));
      },
      restart: () => {
        const { script, edition } = get();
        if (!script || loadedFor !== edition) {
          set({
            runtime: null,
            beat: null,
            saves: { ...get().saves, [edition]: null },
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
        const { script, edition, saves, restartOnLoad } = get();
        if (!script || loadedFor !== edition) return;
        const runtime = saves[edition];
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
      version: 2,
      partialize: (state) => ({ saves: state.saves, edition: state.edition }),
      migrate: (persisted, version) => {
        if (version < 2) {
          const runtime =
            persisted && typeof persisted === "object" && "runtime" in persisted
              ? ((persisted as { runtime?: Runtime | null }).runtime ?? null)
              : null;
          return { saves: { public: runtime, private: null }, edition: "public" as const };
        }
        return persisted as { saves: Saves; edition: Edition };
      },
      onRehydrateStorage: () => (state) => {
        if (!state) {
          useLongWay.setState({ hydrated: true });
          return;
        }
        useLongWay.setState({
          hydrated: true,
          runtime: state.saves[state.edition] ?? null,
        });
      },
    },
  ),
);
