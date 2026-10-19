import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronDown, PenLine, RotateCcw, ScrollText, Send, X } from "lucide-react";
import { LongWayGallery, LongWayRead } from "@/components/vn/LongWayRead";
import { directStory } from "@/lib/vn/direct.functions";
import {
  CAST_BLURBS,
  LIBRARY,
  LONG_WAY_ID,
  PLACES,
  PROMPTS,
  STARTER,
  backgroundSrc,
  portraitSrc,
  stillSrc,
} from "@/lib/vn/catalog";
import { ensureLongWayScript, useLongWay, type Edition } from "@/lib/vn/long-way/store";
import { registerOptInStory, useVN } from "@/lib/vn/store";
import {
  BACKGROUNDS,
  CASTS,
  EXPRESSIONS,
  STILLS,
  type BackgroundId,
  type CastId,
  type Expression,
  type Story,
} from "@/lib/vn/types";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type PrivateModule = typeof import("@/lib/vn/long-way/private");

function adultConfirmed(): boolean {
  if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES !== "true") return false;
  try {
    return localStorage.getItem("zizzy-pony-18-ok") === "1";
  } catch {
    return false;
  }
}

function speakerName(story: Story, id: string) {
  if (id === "narrator") return "Narrator";
  return story.characters.find((character) => character.id === id)?.name ?? "";
}

function portraitFor(story: Story, speaker: string, expression?: Expression) {
  if (speaker === "narrator") return null;
  const character = story.characters.find((item) => item.id === speaker);
  if (!character) return null;
  return {
    cast: character.cast,
    expression: expression ?? "neutral",
    name: character.name,
  };
}

function useReveal(text: string) {
  const [shown, setShown] = useState(text);
  const [done, setDone] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!text || reduce) {
      setShown(text);
      setDone(true);
      return;
    }
    setShown("");
    setDone(false);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
        setDone(true);
      }
    }, 18);
    return () => window.clearInterval(timer);
  }, [text]);

  return {
    shown,
    done,
    finish() {
      setShown(text);
      setDone(true);
    },
  };
}

function Backdrop({ id }: { id: BackgroundId }) {
  const [stack, setStack] = useState<BackgroundId[]>([id]);
  useEffect(() => {
    setStack((prev) => (prev[prev.length - 1] === id ? prev : [...prev.slice(-1), id]));
  }, [id]);
  return (
    <>
      {stack.map((item, index) => (
        <img
          key={`${item}-${index}`}
          src={backgroundSrc(item)}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            index === stack.length - 1 ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}

export function NightMargin() {
  const story = useVN((s) => s.story);
  const shelf = useVN((s) => s.shelf);
  const phase = useVN((s) => s.phase);
  const sceneId = useVN((s) => s.sceneId);
  const line = useVN((s) => s.line);
  const log = useVN((s) => s.log);
  const messages = useVN((s) => s.messages);
  const directorOpen = useVN((s) => s.directorOpen);
  const logOpen = useVN((s) => s.logOpen);
  const busy = useVN((s) => s.busy);
  const error = useVN((s) => s.error);
  const openDirector = useVN((s) => s.openDirector);
  const toggleLog = useVN((s) => s.toggleLog);
  const play = useVN((s) => s.play);
  const toTitle = useVN((s) => s.toTitle);
  const restart = useVN((s) => s.restart);
  const advance = useVN((s) => s.advance);
  const choose = useVN((s) => s.choose);
  const rememberLine = useVN((s) => s.rememberLine);
  const pushUser = useVN((s) => s.pushUser);
  const selectStory = useVN((s) => s.selectStory);

  const [draft, setDraft] = useState("");
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [extraStories, setExtraStories] = useState<Story[]>([]);
  const [AdultGate, setAdultGate] = useState<PrivateModule["AdultGate"] | null>(null);
  const [adultOk, setAdultOk] = useState(adultConfirmed);
  const [gateOpen, setGateOpen] = useState(false);
  const [ghost, setGhost] = useState<{ cast: CastId; expression: Expression; name: string } | null>(
    null,
  );
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void useVN.persist.rehydrate();
    void useLongWay.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES !== "true") return;
    let cancel = false;
    void import("@/lib/vn/long-way/private").then((mod) => {
      if (cancel) return;
      registerOptInStory(mod.LONG_WAY_18);
      setExtraStories([mod.LONG_WAY_18]);
      setAdultGate(() => mod.AdultGate);
    });
    return () => {
      cancel = true;
    };
  }, []);

  const scene = story.scenes.find((item) => item.id === sceneId) ?? story.scenes[0];
  const lineIndex = scene ? Math.min(line, Math.max(0, scene.lines.length - 1)) : 0;
  const current = scene?.lines[lineIndex];
  const name = current ? speakerName(story, current.speaker) : "";
  const reveal = useReveal(phase === "read" && current ? current.text : "");
  const atLast = !!scene && lineIndex >= scene.lines.length - 1;
  const choices = atLast && reveal.done && scene?.choices ? scene.choices : [];
  const ended = atLast && reveal.done && !!scene?.end && choices.length === 0;
  const longGallery = useLongWay((s) => s.galleryOpen);
  const privateEnabled = import.meta.env.VITE_ENABLE_PRIVATE_STORIES === "true";
  const privatePlay = privateEnabled && story.optIn === true;
  const longEdition: Edition | null =
    story.id === LONG_WAY_ID ? "public" : privatePlay ? "private" : null;
  const longActive = longEdition !== null;
  const privateBlocked = privatePlay && !adultOk;
  const longRead = phase === "read" && longActive && !privateBlocked;
  const longSave = useLongWay((s) => (privatePlay ? s.saves.private : s.saves.public));
  const continued = longActive
    ? !!longSave &&
      (longSave.log.length > 0 || !!longSave.ending || Object.keys(longSave.choices).length > 0)
    : sceneId !== story.start || line > 0 || log.length > 0;
  const place = scene ? PLACES[scene.background] : PLACES.kitchen;

  const stories = (() => {
    const seen = new Set<string>();
    const list: Story[] = [];
    for (const item of [...LIBRARY, ...extraStories]) {
      if (item.optIn && !privateEnabled) continue;
      seen.add(item.id);
      list.push(item.id === story.id ? story : item);
    }
    for (const item of [story, ...shelf]) {
      if (seen.has(item.id)) continue;
      if (item.optIn && !privateEnabled) continue;
      seen.add(item.id);
      list.push(item);
    }
    return list;
  })();

  const speaking = !!current && current.speaker !== "narrator";
  const live = current ? portraitFor(story, current.speaker, current.expression) : null;
  const figure = speaking && live ? live : ghost;
  const liveKey = live ? `${live.cast}:${live.expression}:${live.name}` : "";

  useEffect(() => {
    if (live) setGhost(live);
    // liveKey is the stable identity; `live` is a fresh object each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveKey]);

  useEffect(() => {
    if (story.id === LONG_WAY_ID || story.optIn) return;
    if (phase === "read" && reveal.done && current) rememberLine(name || "Narrator", current.text);
  }, [story.id, story.optIn, phase, reveal.done, current, name, rememberLine]);

  useEffect(() => {
    const node = threadRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, directorOpen, busy]);

  function onAdvance() {
    if (phase !== "read" || !current) return;
    if (!reveal.done) {
      reveal.finish();
      return;
    }
    if (choices.length > 0 || ended) return;
    advance();
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "TEXTAREA" || target.tagName === "INPUT")) return;
      if (event.key !== " " && event.key !== "Enter") return;
      const state = useVN.getState();
      if (state.story.id === LONG_WAY_ID || state.story.optIn) return;
      if (state.directorOpen || state.logOpen || state.phase !== "read" || storiesOpen) return;
      event.preventDefault();
      onAdvance();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function startLongWay(edition: Edition) {
    if (edition === "private" && !adultConfirmed()) {
      setGateOpen(true);
      setStoriesOpen(false);
      return;
    }
    useLongWay.getState().setEdition(edition);
    void ensureLongWayScript(edition);
    useVN.getState().play();
    setStoriesOpen(false);
  }

  function openStory(id: string) {
    const chosen =
      extraStories.find((item) => item.id === id) ??
      LIBRARY.find((item) => item.id === id) ??
      (useVN.getState().story.id === id ? useVN.getState().story : undefined);
    if (chosen?.optIn && !privateEnabled) return;
    if (useVN.getState().story.id !== id) selectStory(id);
    if (id === LONG_WAY_ID) {
      startLongWay("public");
      return;
    }
    if (chosen?.optIn) {
      startLongWay("private");
      return;
    }
    useVN.getState().play();
    setStoriesOpen(false);
  }

  function acceptAdult() {
    if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES !== "true") return;
    void import("@/lib/vn/long-way/private").then((mod) => {
      mod.confirmAdult();
      setAdultOk(true);
      setGateOpen(false);
      useLongWay.getState().setEdition("private");
      void ensureLongWayScript("private");
      useVN.getState().play();
    });
  }

  async function ask(prompt: string) {
    const message = prompt.trim();
    if (message.length < 2 || busy) return;
    const history = useVN.getState().messages;
    const currentStory = useVN.getState().story;
    const seed = currentStory.id === LONG_WAY_ID || currentStory.optIn ? STARTER : currentStory;
    setDraft("");
    pushUser(message);
    useVN.getState().setBusy(true);
    try {
      const result = await directStory({ data: { message, story: seed, history } });
      if (!result.ok) {
        useVN.getState().setError(result.error);
        return;
      }
      useVN.getState().commitStory(result.story, result.reply);
    } catch {
      useVN.getState().setError("Grok couldn't take the page. Try once more.");
    }
  }

  return (
    <main className="relative h-dvh overflow-hidden bg-ink text-fg">
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden>
        {CASTS.flatMap((cast) =>
          EXPRESSIONS.map((expression) => (
            <img key={`${cast}-${expression}`} src={portraitSrc(cast, expression)} alt="" />
          )),
        )}
        {BACKGROUNDS.map((id) => (
          <img key={id} src={backgroundSrc(id)} alt="" />
        ))}
        {STILLS.map((id) => (
          <img key={id} src={stillSrc(id)} alt="" />
        ))}
      </div>

      {!longRead && (
        <>
          <Backdrop id={scene?.background ?? "kitchen"} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

          {current?.still && phase === "read" && (
            <img
              key={current.still}
              src={stillSrc(current.still)}
              alt=""
              className="absolute inset-0 z-[12] h-full w-full object-cover"
            />
          )}

          {figure && !current?.still && (
            <div className="pointer-events-none absolute inset-x-0 top-16 bottom-40 z-10 flex items-end justify-center sm:justify-start sm:pl-[6%]">
              <img
                key={`${figure.cast}-${figure.expression}`}
                src={portraitSrc(figure.cast, figure.expression)}
                alt=""
                className={cn(
                  "h-[min(70dvh,40rem)] w-auto max-w-[min(100%,26rem)] object-contain object-bottom transition-opacity duration-300",
                  speaking ? "opacity-100" : "opacity-40",
                )}
              />
            </div>
          )}

          <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between gap-3 px-3 py-3">
            <button type="button" onClick={toTitle} className="min-h-11 min-w-0 text-left">
              <span className="block truncate font-display text-lg leading-none italic text-fg">
                Zizzy & Pony
              </span>
              <span className="mt-1 block truncate text-xs text-fg/80">{place}</span>
            </button>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                onClick={() => {
                  setStoriesOpen(true);
                  openDirector(false);
                }}
                className="inline-flex min-h-11 items-center rounded-full bg-lamp px-3 text-sm font-medium text-ink"
              >
                Stories
              </button>
              <button
                type="button"
                aria-label="Read log"
                onClick={toggleLog}
                className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
              >
                <ScrollText className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Ask Grok"
                onClick={() => openDirector(true)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
              >
                <PenLine className="size-5" />
              </button>
            </div>
          </header>

          {phase === "read" && current && (
            <div className="absolute inset-x-0 bottom-0 z-20 px-3 pb-3 sm:px-6 sm:pb-5">
              {choices.length > 0 && (
                <div className="mx-auto mb-2 flex max-w-3xl flex-col gap-2">
                  {choices.map((choice) => (
                    <button
                      key={choice.label}
                      type="button"
                      onClick={() => choose(choice.goto)}
                      className="min-h-12 rounded-2xl border border-line bg-ink/80 px-4 text-left text-fg transition-transform duration-150 ease-out active:scale-[0.98]"
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              )}
              {ended && (
                <div className="mx-auto mb-2 flex max-w-3xl gap-2">
                  <button
                    type="button"
                    onClick={toTitle}
                    className="inline-flex min-h-12 items-center rounded-full bg-lamp px-5 font-medium text-ink"
                  >
                    Stories
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-ink/70 px-4 text-fg"
                  >
                    <RotateCcw className="size-4" />
                    Again
                  </button>
                </div>
              )}
              <button
                type="button"
                aria-label="Advance"
                onClick={onAdvance}
                className="mx-auto block w-full max-w-3xl rounded-2xl border border-line border-t-lamp bg-paper/95 px-5 py-4 text-left shadow-xl backdrop-blur-md"
              >
                <span className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "font-display text-lg italic",
                      name === "Narrator" ? "text-muted" : "text-lamp",
                    )}
                  >
                    {name || " "}
                  </span>
                  {!ended && choices.length === 0 && reveal.done && (
                    <ChevronDown className="size-4 text-lamp motion-safe:animate-bounce" />
                  )}
                </span>
                <span className="mt-1 block min-h-16 font-display text-lg leading-relaxed text-pretty text-fg sm:min-h-20 sm:text-xl">
                  {reveal.shown}
                </span>
              </button>
            </div>
          )}
        </>
      )}

      {longRead && (
        <LongWayRead
          paused={storiesOpen || directorOpen}
          onTitle={toTitle}
          onStories={() => {
            setStoriesOpen(true);
            openDirector(false);
          }}
          onDirector={() => openDirector(true)}
        />
      )}

      {phase === "title" && (
        <div className="absolute inset-0 z-30 flex flex-col overflow-y-auto bg-ink/75 px-5 pt-20 pb-8 sm:items-center">
          <div className="mx-auto flex w-full max-w-lg flex-col">
            <p className="text-xs font-medium tracking-widest text-lamp uppercase">
              A visual novel
            </p>
            <h1 className="mt-2 font-display text-5xl leading-none text-balance text-fg sm:text-6xl">
              {story.title}
            </h1>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-fg/90">
              {story.logline}
            </p>
            <h2 className="mt-5 text-xs font-medium tracking-widest text-muted uppercase">
              Stories
            </h2>
            <ul className="mt-2 flex flex-col gap-2">
              {stories.map((item) => {
                const selected = item.id === story.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => openStory(item.id)}
                      aria-current={selected ? "true" : undefined}
                      className={cn(
                        "flex w-full min-h-16 flex-col items-start rounded-2xl border px-4 py-3 text-left transition-transform duration-150 ease-out active:scale-[0.99]",
                        selected ? "border-lamp bg-ink/80" : "border-line bg-ink/45",
                      )}
                    >
                      <span className="font-display text-lg leading-tight italic text-fg">
                        {item.title}
                      </span>
                      <span className="mt-1 line-clamp-2 text-sm text-muted">{item.logline}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 grid grid-cols-4 gap-x-2 gap-y-3 sm:grid-cols-7">
              {CASTS.map((cast) => (
                <figure key={cast} className="min-w-0">
                  <img
                    src={portraitSrc(cast, "neutral")}
                    alt={CAST_BLURBS[cast].name}
                    className="mx-auto h-16 w-full object-contain object-bottom sm:h-24"
                  />
                  <figcaption className="truncate text-center text-[11px] text-fg">
                    {CAST_BLURBS[cast].name}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  if (longEdition) {
                    startLongWay(longEdition);
                    return;
                  }
                  play();
                }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lamp px-6 font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                <BookOpen className="size-4" />
                {continued ? "Continue" : "Begin"}
              </button>
              <button
                type="button"
                onClick={() => openDirector(true)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-ink/70 px-6 text-fg"
              >
                <PenLine className="size-4" />
                Ask Grok to write
              </button>
            </div>
            {longActive && longSave?.chapter.title && (
              <p className="mt-3 text-sm text-muted">
                Chapter {longSave.chapter.number} · {longSave.chapter.title}
                {longSave.ending ? ` · ${longSave.ending.title}` : ""}
              </p>
            )}
            {continued && (
              <button
                type="button"
                onClick={() => {
                  if (longEdition) {
                    if (longEdition === "private" && !adultConfirmed()) {
                      setGateOpen(true);
                      return;
                    }
                    useLongWay.getState().setEdition(longEdition);
                    useLongWay.getState().restart();
                    void ensureLongWayScript(longEdition);
                    play();
                    return;
                  }
                  restart();
                }}
                className="mt-3 self-start text-sm text-muted underline-offset-2 hover:underline"
              >
                From the top
              </button>
            )}
          </div>
        </div>
      )}

      {storiesOpen && (
        <div className="absolute inset-0 z-50 overflow-y-auto bg-ink/92 px-5 pt-20 pb-8">
          <div className="mx-auto flex w-full max-w-lg flex-col">
            <div className="flex items-center justify-between">
              <p className="font-display text-2xl italic">Stories</p>
              <button
                type="button"
                aria-label="Close stories"
                onClick={() => setStoriesOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {stories.map((item) => {
                const selected = item.id === story.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => openStory(item.id)}
                      className={cn(
                        "flex w-full min-h-16 flex-col items-start rounded-2xl border px-4 py-3 text-left",
                        selected ? "border-lamp bg-surface" : "border-line bg-ink/60",
                      )}
                    >
                      <span className="font-display text-lg italic">{item.title}</span>
                      <span className="mt-1 line-clamp-2 text-sm text-muted">{item.logline}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {logOpen && !longRead && (
        <div className="absolute inset-0 z-30 overflow-y-auto bg-ink/85 px-5 pt-20 pb-8">
          <div className="mx-auto flex max-w-lg items-center justify-between">
            <p className="font-display text-lg italic">Log</p>
            <button
              type="button"
              onClick={toggleLog}
              className="inline-flex size-11 items-center justify-center"
              aria-label="Close log"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mx-auto mt-2 flex max-w-lg flex-col gap-3">
            {log.length === 0 && <p className="text-sm text-muted">Nothing read yet.</p>}
            {log.map((entry, index) => (
              <p key={`${entry.speaker}-${index}`} className="text-sm leading-relaxed text-pretty">
                <span className="text-lamp">{entry.speaker}. </span>
                {entry.text}
              </p>
            ))}
          </div>
        </div>
      )}

      <div
        inert={!directorOpen}
        aria-hidden={!directorOpen}
        className={cn(
          "absolute inset-y-0 right-0 z-40 flex w-full max-w-md flex-col border-l border-line bg-bg/96 shadow-2xl transition-transform duration-200 ease-out",
          directorOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <p className="font-display text-lg italic text-fg">Director</p>
            <p className="text-sm text-muted">Grok rewrites the night. The painted cast stays.</p>
          </div>
          <button
            type="button"
            aria-label="Close director"
            onClick={() => openDirector(false)}
            className="inline-flex size-11 items-center justify-center rounded-full text-fg"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto border-b border-line px-4 py-3">
          {CASTS.map((cast) => (
            <figure key={cast} className="w-16 shrink-0">
              <img
                src={portraitSrc(cast, "neutral")}
                alt={CAST_BLURBS[cast].name}
                className="cast-face h-16 w-16 rounded-full border border-line bg-surface"
              />
              <figcaption className="mt-1 text-center text-xs text-muted">
                {CAST_BLURBS[cast].name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div ref={threadRef} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
          {messages.length === 0 && (
            <p className="text-pretty text-sm leading-relaxed text-muted">
              Tell Grok what should happen. A new draft shows up in Stories, and you can tap it.
            </p>
          )}
          {messages.map((turn, index) => (
            <p
              key={`${turn.role}-${index}`}
              className={cn(
                "max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed text-pretty",
                turn.role === "user" ? "self-end bg-surface text-fg" : "self-start text-muted",
              )}
            >
              {turn.text}
            </p>
          ))}
          {error && <p className="text-sm text-seal">{error}</p>}
          <div className="flex flex-col gap-2">
            {PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                disabled={busy}
                onClick={() => void ask(prompt)}
                className="min-h-11 rounded-full border border-line px-3 text-left text-sm text-muted disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
        <form
          className="flex items-end gap-2 border-t border-line px-3 py-3"
          onSubmit={(event) => {
            event.preventDefault();
            void ask(draft);
          }}
        >
          <label className="sr-only" htmlFor="director-draft">
            Ask Grok
          </label>
          <textarea
            id="director-draft"
            value={draft}
            rows={2}
            maxLength={600}
            placeholder="A quieter scene, just the two of them…"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void ask(draft);
              }
            }}
            suppressHydrationWarning
            className="min-h-12 flex-1 resize-none rounded-2xl border border-line bg-ink px-3 py-2 text-sm text-fg outline-none"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={busy || draft.trim().length < 2}
            className="inline-flex size-11 items-center justify-center rounded-full bg-lamp text-ink disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </form>
        <div className="px-3 pb-3">
          <button
            type="button"
            onClick={() => {
              openDirector(false);
              play();
            }}
            className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-fg"
          >
            Play this draft
          </button>
        </div>
      </div>
      {longGallery && !longRead && (
        <LongWayGallery onClose={() => useLongWay.getState().closePanels()} />
      )}
      {privateEnabled && AdultGate && (gateOpen || (privateBlocked && phase === "read")) && (
        <AdultGate
          onConfirm={acceptAdult}
          onCancel={() => {
            setGateOpen(false);
            toTitle();
          }}
        />
      )}
    </main>
  );
}
