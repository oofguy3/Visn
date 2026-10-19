import { useEffect, useState } from "react";
import { ChevronDown, Images, PenLine, RotateCcw, ScrollText, X } from "lucide-react";
import { portraitSrc } from "@/lib/vn/catalog";
import { CASTS, type CastId, type Expression } from "@/lib/vn/types";
import { longWayAssetUrl } from "@/lib/vn/long-way/assets";
import { ensureLongWayScript, useLongWay, type ScriptSlot } from "@/lib/vn/long-way/store";
import { emphasize, plainText, sliceSpans } from "@/lib/vn/long-way/text";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const CAST_SET = new Set<string>(CASTS);

function asCast(speaker: string | undefined): CastId | null {
  if (speaker && CAST_SET.has(speaker)) return speaker as CastId;
  return null;
}

function asExpression(value: string | undefined): Expression {
  if (value === "smile" || value === "tense" || value === "neutral") return value;
  return "neutral";
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

function UrlBackdrop({ src }: { src: string | null }) {
  const [stack, setStack] = useState<string[]>([]);
  useEffect(() => {
    if (!src) return;
    setStack((prev) => (prev[prev.length - 1] === src ? prev : [...prev.slice(-1), src]));
  }, [src]);
  return (
    <>
      {stack.map((item, index) => (
        <img
          key={`${item}-${index}`}
          src={item}
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

function RichLine({ source, shown }: { source: string; shown: string }) {
  const spans = sliceSpans(emphasize(source), shown.length);
  return (
    <>
      {spans.map((span, index) => (
        <span key={index} className={cn(span.italic && "italic", span.bold && "font-semibold")}>
          {span.text}
        </span>
      ))}
    </>
  );
}

export function LongWayGallery({ onClose }: { onClose: () => void }) {
  const script = useLongWay((s) => s.script);
  const seen = useLongWay((s) => s.runtime?.seenCg ?? []);
  const [focus, setFocus] = useState<string | null>(null);
  const total = script ? Object.keys(script.assets).filter((id) => id.startsWith("cg_")).length : 0;
  const focused = focus && script?.assets[focus] ? longWayAssetUrl(script.assets[focus]) : null;

  return (
    <div className="absolute inset-0 z-50 overflow-y-auto bg-ink/92 px-5 pt-20 pb-8">
      <div className="mx-auto flex w-full max-w-lg flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-2xl italic">Pictures</p>
            <p className="text-sm text-muted">
              {seen.length} of {total || seen.length} found
            </p>
          </div>
          <button
            type="button"
            aria-label="Close pictures"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
          >
            <X className="size-5" />
          </button>
        </div>
        {seen.length === 0 && (
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Pictures you find on the road collect here.
          </p>
        )}
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {seen.map((id) => {
            const path = script?.assets[id];
            if (!path) return null;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setFocus(id)}
                  className="block w-full overflow-hidden rounded-xl"
                >
                  <img src={longWayAssetUrl(path)} alt="" className="h-28 w-full object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {focused && (
        <button
          type="button"
          aria-label="Close picture"
          onClick={() => setFocus(null)}
          className="absolute inset-0 z-10 bg-ink"
        >
          <img src={focused} alt="" className="h-full w-full object-contain" />
        </button>
      )}
    </div>
  );
}

let bootToken = 0;

export function LongWayRead({
  slot,
  paused,
  onTitle,
  onStories,
  onDirector,
}: {
  slot: ScriptSlot;
  paused: boolean;
  onTitle: () => void;
  onStories: () => void;
  onDirector: () => void;
}) {
  const script = useLongWay((s) => s.script);
  const runtime = useLongWay((s) => s.runtime);
  const beat = useLongWay((s) => s.beat);
  const error = useLongWay((s) => s.error);
  const logOpen = useLongWay((s) => s.logOpen);
  const galleryOpen = useLongWay((s) => s.galleryOpen);
  const advance = useLongWay((s) => s.advance);
  const choose = useLongWay((s) => s.choose);
  const restart = useLongWay((s) => s.restart);
  const toggleLog = useLongWay((s) => s.toggleLog);
  const toggleGallery = useLongWay((s) => s.toggleGallery);
  const closePanels = useLongWay((s) => s.closePanels);
  const [ghost, setGhost] = useState<{ cast: CastId; expression: Expression } | null>(null);

  useEffect(() => {
    const token = ++bootToken;
    void (async () => {
      if (!useLongWay.getState().hydrated) await useLongWay.persist.rehydrate();
      if (token !== bootToken) return;
      useLongWay.getState().setStory(slot);
      try {
        await ensureLongWayScript(slot);
      } catch {
        return;
      }
      if (token !== bootToken) return;
      useLongWay.getState().resumeOrStart();
    })();
  }, [slot]);

  const line =
    beat?.kind === "line"
      ? beat
      : runtime?.lastLine
        ? { kind: "line" as const, ...runtime.lastLine }
        : null;
  const source = line?.text ?? "";
  const reveal = useReveal(plainText(source));
  const choices = beat?.kind === "choice" && reveal.done ? beat.options : [];
  const ended = beat?.kind === "ending" && reveal.done;
  const waiting = !beat && !error;

  const speakerId = line?.speaker;
  const expression = line?.expression;
  const liveCast = asCast(speakerId);
  const speaking = !!liveCast && beat?.kind === "line";
  useEffect(() => {
    if (!liveCast) return;
    setGhost({ cast: liveCast, expression: asExpression(expression) });
  }, [liveCast, expression]);

  function onAdvance() {
    if (paused || logOpen || galleryOpen || waiting || error) return;
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
      if (paused || useLongWay.getState().logOpen || useLongWay.getState().galleryOpen) return;
      event.preventDefault();
      onAdvance();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const hasPictures = script
    ? Object.keys(script.assets).some((id) => id.startsWith("cg_"))
    : false;
  const bgId = runtime?.bg;
  const cgId = runtime?.cg;
  const bgSrc = bgId && script?.assets[bgId] ? longWayAssetUrl(script.assets[bgId]) : null;
  const cgSrc = cgId && script?.assets[cgId] ? longWayAssetUrl(script.assets[cgId]) : null;
  const chapter = runtime?.chapter;
  const total = script?.chapters.length ?? 11;
  const place =
    ended && beat?.kind === "ending"
      ? beat.title
      : chapter
        ? `Chapter ${chapter.number} of ${total} · ${chapter.title}`
        : "The Long Way Round";
  const name = line?.name ?? (waiting ? "Narrator" : "");
  const shownSource = waiting ? "The road is opening…" : error ? error : source;
  const shownPlain = waiting || error ? shownSource : reveal.shown;

  return (
    <div className="absolute inset-0 z-20 bg-ink">
      <UrlBackdrop src={bgSrc} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />
      {cgSrc && (
        <img src={cgSrc} alt="" className="absolute inset-0 z-[12] h-full w-full object-cover" />
      )}
      {ghost && !cgSrc && (
        <div className="pointer-events-none absolute inset-x-0 top-16 bottom-40 z-10 flex items-end justify-center sm:justify-start sm:pl-[6%]">
          <img
            key={`${ghost.cast}-${ghost.expression}`}
            src={portraitSrc(ghost.cast, ghost.expression)}
            alt=""
            className={cn(
              "h-[min(70dvh,40rem)] w-auto max-w-[min(100%,26rem)] object-contain object-bottom transition-opacity duration-300",
              speaking ? "opacity-100" : "opacity-40",
            )}
          />
        </div>
      )}

      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between gap-3 px-3 py-3">
        <button type="button" onClick={onTitle} className="min-h-11 min-w-0 text-left">
          <span className="block truncate font-display text-lg leading-none italic text-fg">
            Zizzy & Pony
          </span>
          <span className="mt-1 block truncate text-xs text-fg/80">{place}</span>
        </button>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={onStories}
            className="inline-flex min-h-11 items-center rounded-full bg-lamp px-3 text-sm font-medium text-ink"
          >
            Stories
          </button>
          {hasPictures && (
            <button
              type="button"
              aria-label="Pictures"
              onClick={() => {
                void ensureLongWayScript(slot);
                toggleGallery();
              }}
              className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
            >
              <Images className="size-5" />
            </button>
          )}
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
            onClick={onDirector}
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink/50 text-fg"
          >
            <PenLine className="size-5" />
          </button>
        </div>
      </header>

      <div className="absolute inset-x-0 bottom-0 z-20 px-3 pb-3 sm:px-6 sm:pb-5">
        {choices.length > 0 && beat?.kind === "choice" && (
          <div className="mx-auto mb-2 flex max-w-3xl flex-col gap-2">
            {beat.prompt && (
              <p className="px-1 font-display text-base italic text-lamp">
                {plainText(beat.prompt)}
              </p>
            )}
            {choices.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => choose(option.key)}
                className="min-h-12 rounded-2xl border border-line bg-ink/80 px-4 py-2 text-left text-fg transition-transform duration-150 ease-out active:scale-[0.98]"
              >
                {plainText(option.label)}
              </button>
            ))}
          </div>
        )}
        {(ended || error) && (
          <div className="mx-auto mb-2 flex max-w-3xl gap-2">
            <button
              type="button"
              onClick={onTitle}
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
            {!ended && !error && choices.length === 0 && reveal.done && !waiting && (
              <ChevronDown className="size-4 text-lamp motion-safe:animate-bounce" />
            )}
          </span>
          <span className="mt-1 block min-h-16 font-display text-lg leading-relaxed text-pretty text-fg sm:min-h-20 sm:text-xl">
            {waiting || error ? shownPlain : <RichLine source={shownSource} shown={shownPlain} />}
          </span>
        </button>
      </div>

      {logOpen && (
        <div className="absolute inset-0 z-30 overflow-y-auto bg-ink/85 px-5 pt-20 pb-8">
          <div className="mx-auto flex max-w-lg items-center justify-between">
            <p className="font-display text-lg italic">Log</p>
            <button
              type="button"
              onClick={closePanels}
              className="inline-flex size-11 items-center justify-center"
              aria-label="Close log"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mx-auto mt-2 flex max-w-lg flex-col gap-3">
            {(runtime?.log.length ?? 0) === 0 && (
              <p className="text-sm text-muted">Nothing read yet.</p>
            )}
            {runtime?.log.map((entry, index) => (
              <p key={`${entry.speaker}-${index}`} className="text-sm leading-relaxed text-pretty">
                <span className="text-lamp">{entry.speaker}. </span>
                {plainText(entry.text)}
              </p>
            ))}
          </div>
        </div>
      )}

      {galleryOpen && <LongWayGallery onClose={closePanels} />}
    </div>
  );
}
