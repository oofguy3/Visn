import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LIBRARY, STARTER } from "./catalog";
import type { ChatTurn, Story } from "./types";

type Phase = "title" | "read";
type Place = { sceneId: string; line: number; log: { speaker: string; text: string }[] };

type VNState = {
  story: Story;
  shelf: Story[];
  places: Record<string, Place>;
  phase: Phase;
  sceneId: string;
  line: number;
  log: { speaker: string; text: string }[];
  messages: ChatTurn[];
  directorOpen: boolean;
  logOpen: boolean;
  busy: boolean;
  error: string | null;
  openDirector: (open?: boolean) => void;
  toggleLog: () => void;
  play: () => void;
  toTitle: () => void;
  restart: () => void;
  advance: () => void;
  choose: (gotoId: string) => void;
  rememberLine: (speaker: string, text: string) => void;
  pushUser: (text: string) => void;
  commitStory: (story: Story, reply: string) => void;
  selectStory: (id: string) => void;
  setBusy: (busy: boolean) => void;
  setError: (error: string | null) => void;
};

function freshRead(story: Story) {
  return {
    story,
    phase: "title" as const,
    sceneId: story.start,
    line: 0,
    log: [] as { speaker: string; text: string }[],
  };
}

function placeOf(state: { sceneId: string; line: number; log: Place["log"] }): Place {
  return { sceneId: state.sceneId, line: state.line, log: state.log };
}

const LIBRARY_IDS = new Set(LIBRARY.map((item) => item.id));
const OPT_IN: Story[] = [];

/** Called only from the opt-in bundle, after the build flag has included it. */
export function registerOptInStory(story: Story) {
  if (LIBRARY_IDS.has(story.id)) return;
  OPT_IN.push(story);
  LIBRARY_IDS.add(story.id);
}

function findStory(state: VNState, id: string): Story | undefined {
  if (state.story.id === id) return state.story;
  return (
    state.shelf.find((item) => item.id === id) ??
    OPT_IN.find((item) => item.id === id) ??
    LIBRARY.find((item) => item.id === id)
  );
}

export const useVN = create<VNState>()(
  persist(
    (set, get) => ({
      ...freshRead(STARTER),
      shelf: [],
      places: {},
      messages: [],
      directorOpen: false,
      logOpen: false,
      busy: false,
      error: null,
      openDirector: (open) =>
        set((state) => ({
          directorOpen: open ?? !state.directorOpen,
          logOpen: false,
        })),
      toggleLog: () =>
        set((state) => ({ logOpen: !state.logOpen, directorOpen: false })),
      play: () => set({ phase: "read", directorOpen: false, logOpen: false }),
      toTitle: () => set({ phase: "title", directorOpen: false, logOpen: false }),
      restart: () => {
        const story = get().story;
        set((state) => ({
          ...freshRead(story),
          phase: "read",
          places: { ...state.places, [story.id]: { sceneId: story.start, line: 0, log: [] } },
          directorOpen: false,
          logOpen: false,
        }));
      },
      advance: () => {
        const { story, sceneId, line } = get();
        const scene = story.scenes.find((item) => item.id === sceneId) ?? story.scenes[0];
        if (!scene) return;
        if (line < scene.lines.length - 1) {
          set({ line: line + 1 });
          return;
        }
        if (scene.next && !scene.choices?.length && !scene.end) {
          const nxt = story.scenes.find((item) => item.id === scene.next);
          if (nxt) set({ sceneId: nxt.id, line: 0 });
        }
      },
      choose: (gotoId) => {
        const scene = get().story.scenes.find((item) => item.id === gotoId);
        if (!scene) return;
        set({ sceneId: scene.id, line: 0, logOpen: false });
      },
      rememberLine: (speaker, text) => {
        const log = get().log;
        const last = log[log.length - 1];
        if (last && last.speaker === speaker && last.text === text) return;
        set({ log: [...log, { speaker, text }].slice(-700) });
      },
      pushUser: (text) =>
        set((state) => ({
          messages: [...state.messages, { role: "user" as const, text }].slice(-16),
          error: null,
        })),
      commitStory: (story, reply) =>
        set((state) => {
          const same = state.story.id === story.id;
          const places = { ...state.places, [state.story.id]: placeOf(state) };
          const kept = state.shelf.filter(
            (item) => item.id !== story.id && !LIBRARY_IDS.has(item.id) && !item.optIn,
          );
          const shelf =
            same || LIBRARY_IDS.has(state.story.id) || state.story.optIn
              ? kept
              : [state.story, ...kept].slice(0, 8);
          return {
            ...freshRead(story),
            shelf,
            places,
            messages: [...state.messages, { role: "director" as const, text: reply }].slice(-16),
            busy: false,
            error: null,
            directorOpen: true,
          };
        }),
      selectStory: (id) => {
        const state = get();
        if (state.story.id === id) return;
        const next = findStory(state, id);
        if (!next) return;
        const places = { ...state.places, [state.story.id]: placeOf(state) };
        const saved = places[id];
        const sceneOk = !!saved && next.scenes.some((scene) => scene.id === saved.sceneId);
        let shelf = state.shelf.filter((item) => item.id !== id && !item.optIn);
        if (!LIBRARY_IDS.has(state.story.id) && !state.story.optIn) {
          shelf = [state.story, ...shelf.filter((item) => item.id !== state.story.id)].slice(0, 8);
        }
        set({
          ...freshRead(next),
          story: next,
          shelf,
          places,
          sceneId: sceneOk && saved ? saved.sceneId : next.start,
          line: sceneOk && saved ? saved.line : 0,
          log: saved?.log ?? [],
          directorOpen: false,
          logOpen: false,
        });
      },
      setBusy: (busy) => set({ busy }),
      setError: (error) => set({ error, busy: false }),
    }),
    {
      name: "zizzy-pony-v5",
      skipHydration: true,
      version: 2,
      migrate: (persisted) => {
        const state = (persisted ?? {}) as {
          story?: Story;
          shelf?: Story[];
          places?: Record<string, Place>;
          phase?: Phase;
          sceneId?: string;
          line?: number;
          log?: Place["log"];
          messages?: ChatTurn[];
        };
        const story = state.story ?? STARTER;
        return {
          story,
          shelf: state.shelf ?? [],
          places: state.places ?? {},
          phase: state.phase ?? "title",
          sceneId: state.sceneId ?? story.start,
          line: state.line ?? 0,
          log: state.log ?? [],
          messages: state.messages ?? [],
        };
      },
      partialize: (state) => ({
        story: state.story,
        shelf: state.shelf,
        places: state.places,
        phase: state.phase,
        sceneId: state.sceneId,
        line: state.line,
        log: state.log,
        messages: state.messages,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES === "true") return;
        const shelf = state.shelf.filter((item) => !item.optIn);
        if (!state.story.optIn && shelf.length === state.shelf.length) return;
        const story = state.story.optIn ? STARTER : state.story;
        useVN.setState({
          story,
          shelf,
          phase: state.story.optIn ? "title" : state.phase,
          sceneId: state.story.optIn ? story.start : state.sceneId,
          line: state.story.optIn ? 0 : state.line,
          log: state.story.optIn ? [] : state.log,
        });
      },
    },
  ),
);
