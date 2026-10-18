import type { Story } from "@/lib/vn/types";
import { LONG_WAY } from "@/lib/vn/catalog";

/** Same key NightMargin reads before this module loads. */
export const ADULT_OK_KEY = "zizzy-pony-18-ok";

export const LONG_WAY_18: Story = {
  id: "long-way-round-18",
  optIn: true,
  title: "The Long Way Round (18+)",
  logline:
    "The same race, for adults. About two hours, with the scenes the public road leaves out.",
  characters: LONG_WAY.characters,
  start: LONG_WAY.start,
  scenes: LONG_WAY.scenes,
};

export function confirmAdult() {
  try {
    localStorage.setItem(ADULT_OK_KEY, "1");
  } catch {
    /* private mode can block storage; the gate still closes for this visit */
  }
}

export function AdultGate({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="adult-gate-title"
      className="absolute inset-0 z-[60] flex items-end justify-center bg-ink/80 px-5 pb-8 sm:items-center"
    >
      <div className="w-full max-w-md rounded-2xl border border-line bg-ink px-5 py-6 shadow-xl">
        <p className="text-xs font-medium tracking-widest text-lamp uppercase">18+</p>
        <h2 id="adult-gate-title" className="mt-2 font-display text-3xl italic text-fg">
          The Long Way Round
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty text-fg/90">
          This telling includes adult romance scenes. Confirm you are 18 or older before it starts.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-lamp px-5 font-medium text-ink"
          >
            I'm 18 or older
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-ink/70 px-5 text-fg"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
