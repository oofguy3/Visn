/**
 * Interpreter for the Long Way Round script (`lwr-vn-story` v1).
 *
 * Steps of type bg, cg, set, if, and jump run immediately. say, narrate,
 * choice, and ending wait for the reader. A choice's effects apply before its
 * inline steps. After those steps, play continues with the step after the
 * choice. `heart` is derived. Ending conditions are checked in priority order.
 */

export type Cond =
  | { flag: string }
  | { var: string; op: string; value: number }
  | { choice: string; op: string; value: string }
  | { and: Cond[] }
  | { or: Cond[] }
  | { not: Cond }
  | { ending: string };

export type Step =
  | { type: "bg"; id: string }
  | { type: "cg"; id: string }
  | { type: "say"; speaker: string; expression?: string; text: string; name?: string }
  | { type: "narrate"; text: string }
  | { type: "choice"; id: string; prompt?: string; options: Option[] }
  | { type: "if"; cond: Cond; then?: Step[]; else?: Step[] }
  | {
      type: "set";
      flags?: Record<string, boolean | Cond>;
      meters?: Record<string, { add?: number; value?: number }>;
    }
  | { type: "jump"; target: string }
  | { type: "ending"; id: string; title: string };

export type Option = {
  key: string;
  label: string;
  effects?: { meters?: Record<string, number>; flags?: Record<string, boolean> };
  cond?: Cond | null;
  goto?: string | null;
  steps?: Step[];
};

type Derived = { var: string } | { sum: Derived[] } | { floor_div: [Derived, number | Derived] };

export type Chapter = {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  scenes: Scene[];
};

export type Scene = { id: string; bg?: string | null; steps: Step[] };

export type EndingDef = {
  id: string;
  title: string;
  priority: number;
  cond: Cond;
  entry: string;
};

export type Script = {
  title: string;
  start: string;
  meters: { id: string; initial: number }[];
  flags: { id: string; initial: boolean }[];
  derived: Record<string, Derived>;
  endings: EndingDef[];
  assets: Record<string, string>;
  chapters: Chapter[];
  sceneIndex: Map<string, { scene: Scene; chapter: Chapter }>;
};

export type Branch =
  { kind: "root" } | { kind: "then" } | { kind: "else" } | { kind: "option"; key: string };

export type Frame = { index: number; branch: Branch };

export type Cursor = { sceneId: string; frames: Frame[] };

export type StoryState = {
  meters: Record<string, number>;
  flags: Record<string, boolean>;
  choices: Record<string, string>;
};

export type LineBeat = {
  kind: "line";
  speaker: string;
  name: string;
  expression?: string;
  text: string;
};

export type Beat =
  | LineBeat
  | { kind: "choice"; id: string; prompt: string; options: { key: string; label: string }[] }
  | { kind: "ending"; id: string; title: string }
  | { kind: "error"; message: string };

export type Runtime = StoryState & {
  cursor: Cursor;
  bg: string | null;
  cg: string | null;
  seenCg: string[];
  ending: { id: string; title: string } | null;
  lastLine: { speaker: string; name: string; expression?: string; text: string } | null;
  log: { speaker: string; text: string }[];
  chapter: { number: number; title: string };
  seq: number;
  loggedSeq: number;
};

const NAMES: Record<string, string> = {
  zizzy: "Zizzy",
  pony: "Pony",
  fenn: "Fenn",
  bruno: "Bruno",
  clover: "Clover",
  giraffy: "Giraffy",
  pia: "Pia",
};

const MAX_STEPS = 20000;

export function prepareScript(raw: unknown): Script {
  if (!raw || typeof raw !== "object") throw new Error("Story file was empty.");
  const data = raw as Record<string, unknown>;
  const chapters = Array.isArray(data.chapters) ? (data.chapters as Chapter[]) : [];
  const start = typeof data.start === "string" ? data.start : "";
  if (!start || chapters.length === 0) throw new Error("Story file was not a script.");
  const assets: Record<string, string> = {};
  const rawAssets =
    data.assets && typeof data.assets === "object" ? (data.assets as Record<string, unknown>) : {};
  for (const [id, path] of Object.entries(rawAssets)) {
    assets[id] = String(path).replace(/\.png$/i, ".webp");
  }
  const sceneIndex = new Map<string, { scene: Scene; chapter: Chapter }>();
  for (const chapter of chapters) {
    for (const scene of chapter.scenes ?? []) sceneIndex.set(scene.id, { scene, chapter });
  }
  if (!sceneIndex.has(start)) throw new Error("Story start scene is missing.");
  const meters = Array.isArray(data.meters) ? (data.meters as Script["meters"]) : [];
  const flags = Array.isArray(data.flags) ? (data.flags as Script["flags"]) : [];
  const endings = Array.isArray(data.endings) ? (data.endings as EndingDef[]) : [];
  const derived =
    data.derived && typeof data.derived === "object" ? (data.derived as Script["derived"]) : {};
  return {
    title:
      typeof data.meta === "object" && data.meta && "title" in data.meta
        ? String((data.meta as { title?: unknown }).title ?? "The Long Way Round")
        : "The Long Way Round",
    start,
    meters,
    flags,
    derived,
    endings,
    assets,
    chapters,
    sceneIndex,
  };
}

function evalDerived(
  expr: Derived | undefined,
  state: StoryState,
  derived: Script["derived"],
  depth: number,
): number {
  if (!expr || depth > 8) return 0;
  if ("var" in expr && typeof expr.var === "string") {
    if (expr.var in state.meters) return state.meters[expr.var] ?? 0;
    if (expr.var in derived) return evalDerived(derived[expr.var], state, derived, depth + 1);
    return 0;
  }
  if ("sum" in expr && Array.isArray(expr.sum)) {
    return expr.sum.reduce(
      (total, part) => total + evalDerived(part, state, derived, depth + 1),
      0,
    );
  }
  if ("floor_div" in expr && Array.isArray(expr.floor_div)) {
    const [num, den] = expr.floor_div;
    const divisor = typeof den === "number" ? den : evalDerived(den, state, derived, depth + 1);
    if (!divisor) return 0;
    return Math.floor(evalDerived(num, state, derived, depth + 1) / divisor);
  }
  return 0;
}

export function readMeter(script: Script, state: StoryState, name: string): number {
  if (name in script.derived) return evalDerived(script.derived[name], state, script.derived, 0);
  return state.meters[name] ?? 0;
}

function compare(left: number | string | null, op: string, right: number | string): boolean {
  if (op === "==") return left === right;
  if (op === "!=") return left !== right;
  if (typeof left !== "number" || typeof right !== "number") return false;
  if (op === ">=") return left >= right;
  if (op === "<=") return left <= right;
  if (op === ">") return left > right;
  if (op === "<") return left < right;
  return false;
}

export function winningEnding(
  script: Script,
  state: StoryState,
  stack: Set<string> = new Set(),
): EndingDef | null {
  const ordered = [...script.endings].sort((a, b) => a.priority - b.priority);
  for (const ending of ordered) {
    if (stack.has(ending.id)) continue;
    stack.add(ending.id);
    const ok = evalCond(ending.cond, state, script, stack);
    stack.delete(ending.id);
    if (ok) return ending;
  }
  return null;
}

export function evalCond(
  cond: Cond | null | undefined,
  state: StoryState,
  script: Script,
  stack: Set<string> = new Set(),
): boolean {
  if (!cond || typeof cond !== "object") return false;
  if ("ending" in cond) {
    return winningEnding(script, state, stack)?.id === cond.ending;
  }
  if ("flag" in cond) return state.flags[cond.flag] === true;
  if ("and" in cond && Array.isArray(cond.and))
    return cond.and.every((part) => evalCond(part, state, script, stack));
  if ("or" in cond && Array.isArray(cond.or))
    return cond.or.some((part) => evalCond(part, state, script, stack));
  if ("not" in cond) return !evalCond(cond.not, state, script, stack);
  if ("var" in cond) return compare(readMeter(script, state, cond.var), cond.op, cond.value);
  if ("choice" in cond) {
    const picked = Object.prototype.hasOwnProperty.call(state.choices, cond.choice)
      ? state.choices[cond.choice]
      : null;
    return compare(picked, cond.op, cond.value);
  }
  return false;
}

function displayName(step: { speaker: string; name?: string }): string {
  if (step.speaker === "narrator") return "Narrator";
  if (step.speaker === "extra") return step.name?.trim() || "Someone";
  return NAMES[step.speaker] ?? step.name?.trim() ?? step.speaker;
}

function syncChapter(script: Script, rt: Runtime) {
  const hit = script.sceneIndex.get(rt.cursor.sceneId);
  if (hit) rt.chapter = { number: hit.chapter.number, title: hit.chapter.title };
}

function stepsFor(script: Script, cursor: Cursor): Step[] | null {
  const hit = script.sceneIndex.get(cursor.sceneId);
  if (!hit) return null;
  let steps = hit.scene.steps;
  for (let depth = 1; depth < cursor.frames.length; depth += 1) {
    const parent = cursor.frames[depth - 1];
    const frame = cursor.frames[depth];
    const step = steps[parent.index];
    const branch = frame.branch;
    if (!step) return null;
    if (branch.kind === "then" && step.type === "if") steps = step.then ?? [];
    else if (branch.kind === "else" && step.type === "if") steps = step.else ?? [];
    else if (branch.kind === "option" && step.type === "choice") {
      steps = step.options.find((option) => option.key === branch.key)?.steps ?? [];
    } else return null;
  }
  return steps;
}

function applyEffects(effects: Option["effects"], rt: Runtime) {
  if (!effects) return;
  for (const [id, delta] of Object.entries(effects.meters ?? {})) {
    if (typeof delta === "number") rt.meters[id] = (rt.meters[id] ?? 0) + delta;
  }
  for (const [id, value] of Object.entries(effects.flags ?? {})) {
    if (typeof value === "boolean") rt.flags[id] = value;
  }
}

function applySet(step: Extract<Step, { type: "set" }>, rt: Runtime, script: Script) {
  for (const [id, spec] of Object.entries(step.meters ?? {})) {
    if (!spec || typeof spec !== "object") continue;
    if (typeof spec.value === "number") rt.meters[id] = spec.value;
    else if (typeof spec.add === "number") rt.meters[id] = (rt.meters[id] ?? 0) + spec.add;
  }
  for (const [id, spec] of Object.entries(step.flags ?? {})) {
    rt.flags[id] = typeof spec === "boolean" ? spec : evalCond(spec, rt, script);
  }
}

export function settle(script: Script, rt: Runtime): Beat {
  for (let guard = 0; guard < MAX_STEPS; guard += 1) {
    syncChapter(script, rt);
    const steps = stepsFor(script, rt.cursor);
    if (!steps) return { kind: "error", message: "The story lost its place." };
    const frames = rt.cursor.frames;
    const frame = frames[frames.length - 1];
    if (!frame) return { kind: "error", message: "The story lost its place." };
    if (frame.index >= steps.length) {
      if (frames.length === 1)
        return { kind: "error", message: "This scene ended before the road did." };
      frames.pop();
      const parent = frames[frames.length - 1];
      if (parent) parent.index += 1;
      continue;
    }
    const step = steps[frame.index];
    if (!step || typeof step.type !== "string") {
      frame.index += 1;
      continue;
    }
    if (step.type === "bg") {
      rt.bg = step.id;
      rt.cg = null;
      frame.index += 1;
      continue;
    }
    if (step.type === "cg") {
      rt.cg = step.id;
      if (!rt.seenCg.includes(step.id)) rt.seenCg.push(step.id);
      frame.index += 1;
      continue;
    }
    if (step.type === "set") {
      applySet(step, rt, script);
      frame.index += 1;
      continue;
    }
    if (step.type === "jump") {
      if (!script.sceneIndex.has(step.target)) {
        return { kind: "error", message: `Missing scene ${step.target}.` };
      }
      rt.cursor = { sceneId: step.target, frames: [{ index: 0, branch: { kind: "root" } }] };
      continue;
    }
    if (step.type === "if") {
      const take = evalCond(step.cond, rt, script);
      const child = take ? step.then : step.else;
      if (!child || child.length === 0) {
        frame.index += 1;
        continue;
      }
      frames.push({ index: 0, branch: { kind: take ? "then" : "else" } });
      continue;
    }
    if (step.type === "say") {
      return {
        kind: "line",
        speaker: step.speaker,
        name: displayName(step),
        expression: step.expression,
        text: step.text,
      };
    }
    if (step.type === "narrate") {
      return { kind: "line", speaker: "narrator", name: "Narrator", text: step.text };
    }
    if (step.type === "choice") {
      const options = (step.options ?? []).filter(
        (option) => !option.cond || evalCond(option.cond, rt, script),
      );
      return {
        kind: "choice",
        id: step.id,
        prompt: step.prompt ?? "",
        options: options.map((option) => ({ key: option.key, label: option.label })),
      };
    }
    if (step.type === "ending") {
      rt.ending = { id: step.id, title: step.title };
      return { kind: "ending", id: step.id, title: step.title };
    }
    frame.index += 1;
  }
  return { kind: "error", message: "The story looped." };
}

function remember(rt: Runtime, beat: Beat) {
  if (beat.kind !== "line" || rt.loggedSeq === rt.seq) return;
  rt.lastLine = {
    speaker: beat.speaker,
    name: beat.name,
    expression: beat.expression,
    text: beat.text,
  };
  rt.log = [...rt.log, { speaker: beat.name, text: beat.text }].slice(-200);
  rt.loggedSeq = rt.seq;
}

function land(script: Script, rt: Runtime): Beat {
  const beat = settle(script, rt);
  remember(rt, beat);
  return beat;
}

export function createRuntime(script: Script): { runtime: Runtime; beat: Beat } {
  const meters: Record<string, number> = {};
  for (const meter of script.meters) meters[meter.id] = meter.initial ?? 0;
  const flags: Record<string, boolean> = {};
  for (const flag of script.flags) flags[flag.id] = !!flag.initial;
  const runtime: Runtime = {
    cursor: { sceneId: script.start, frames: [{ index: 0, branch: { kind: "root" } }] },
    meters,
    flags,
    choices: {},
    bg: null,
    cg: null,
    seenCg: [],
    ending: null,
    lastLine: null,
    log: [],
    chapter: { number: 1, title: "" },
    seq: 0,
    loggedSeq: -1,
  };
  return { runtime, beat: land(script, runtime) };
}

export function advanceRuntime(script: Script, rt: Runtime): Beat {
  const current = settle(script, rt);
  if (current.kind !== "line") return current;
  rt.seq += 1;
  const frame = rt.cursor.frames[rt.cursor.frames.length - 1];
  if (frame) frame.index += 1;
  return land(script, rt);
}

export function chooseRuntime(script: Script, rt: Runtime, key: string): Beat {
  const current = settle(script, rt);
  if (current.kind !== "choice") return current;
  const steps = stepsFor(script, rt.cursor);
  const frame = rt.cursor.frames[rt.cursor.frames.length - 1];
  const step = steps && frame ? steps[frame.index] : undefined;
  if (!step || step.type !== "choice" || !frame) return current;
  const option = step.options.find((item) => item.key === key);
  if (!option || (option.cond && !evalCond(option.cond, rt, script))) return current;
  rt.choices[step.id] = key;
  applyEffects(option.effects, rt);
  rt.seq += 1;
  if (option.goto) {
    rt.cursor = { sceneId: option.goto, frames: [{ index: 0, branch: { kind: "root" } }] };
    return land(script, rt);
  }
  if (option.steps && option.steps.length > 0) {
    rt.cursor.frames.push({ index: 0, branch: { kind: "option", key } });
    return land(script, rt);
  }
  frame.index += 1;
  return land(script, rt);
}

export type AutoplayHooks = {
  onChoice?: (beat: Extract<Beat, { kind: "choice" }>, rt: Runtime) => void;
  onLine?: (beat: LineBeat, rt: Runtime) => void;
};

export function autoplay(script: Script, picks: Record<string, string>, hooks: AutoplayHooks = {}) {
  const { runtime, beat: first } = createRuntime(script);
  let beat = first;
  for (let guard = 0; guard < MAX_STEPS; guard += 1) {
    if (beat.kind === "ending" || beat.kind === "error") return { runtime, beat };
    if (beat.kind === "choice") {
      hooks.onChoice?.(beat, runtime);
      const key = picks[beat.id];
      if (!key) throw new Error(`No pick for ${beat.id}.`);
      if (!beat.options.some((option) => option.key === key)) {
        throw new Error(
          `${beat.id} has no option ${key} (available ${beat.options.map((option) => option.key).join(",")}).`,
        );
      }
      beat = chooseRuntime(script, runtime, key);
      continue;
    }
    hooks.onLine?.(beat, runtime);
    beat = advanceRuntime(script, runtime);
  }
  throw new Error("Playthrough did not reach an ending.");
}
