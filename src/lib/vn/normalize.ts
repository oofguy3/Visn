import {
  BACKGROUNDS,
  CASTS,
  EXPRESSIONS,
  STILLS,
  type BackgroundId,
  type CastId,
  type Character,
  type Choice,
  type Expression,
  type Line,
  type Scene,
  type StillId,
  type Story,
} from "./types";

const CAST_SET = new Set<string>(CASTS);
const BG_SET = new Set<string>(BACKGROUNDS);
const EXPR_SET = new Set<string>(EXPRESSIONS);
const STILL_SET = new Set<string>(STILLS);

function text(value: unknown, max: number, fallback = ""): string {
  if (typeof value !== "string") return fallback;
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9_]/g, "");
}

export function normalizeStory(raw: unknown, id: string): Story {
  const source = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const title = text(source.title, 60, "Untitled night");
  const logline = text(source.logline, 180, "A draft still drying on the desk.");

  const characters: Character[] = [];
  const seenIds = new Set<string>();
  const incoming = Array.isArray(source.characters) ? source.characters : [];
  for (const item of incoming) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    const idSlug = slug(text(record.id, 32));
    const cast = text(record.cast, 16).toLowerCase();
    if (!idSlug || idSlug === "narrator" || seenIds.has(idSlug)) continue;
    if (!CAST_SET.has(cast)) continue;
    seenIds.add(idSlug);
    characters.push({
      id: idSlug,
      name: text(record.name, 32, idSlug),
      cast: cast as CastId,
      role: text(record.role, 48, "on stage"),
    });
    if (characters.length >= 6) break;
  }
  if (characters.length === 0) {
    characters.push({
      id: "zizzy",
      name: "Zizzy",
      cast: "zizzy",
      role: "came in from the snow",
    });
  }

  const known = new Set(characters.map((character) => character.id));

  function resolveSpeaker(value: unknown): string {
    const original = text(value, 40).toLowerCase();
    if (!original || original === "narrator") return "narrator";
    if (known.has(original)) return original;
    const named = characters.find((character) => character.name.toLowerCase() === original);
    if (named) return named.id;
    const compact = slug(original);
    if (known.has(compact)) return compact;
    return "narrator";
  }

  const scenes: Scene[] = [];
  const sceneIds = new Set<string>();
  const incomingScenes = Array.isArray(source.scenes) ? source.scenes : [];
  for (const item of incomingScenes) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    let sceneId = slug(text(record.id, 24)) || `s${scenes.length + 1}`;
    while (sceneIds.has(sceneId)) sceneId = `${sceneId}x`;
    sceneIds.add(sceneId);
    const backgroundName = text(record.background, 16).toLowerCase();
    const background: BackgroundId = BG_SET.has(backgroundName)
      ? (backgroundName as BackgroundId)
      : "kitchen";
    const lines: Line[] = [];
    const incomingLines = Array.isArray(record.lines) ? record.lines : [];
    for (const lineItem of incomingLines) {
      if (!lineItem || typeof lineItem !== "object") continue;
      const line = lineItem as Record<string, unknown>;
      const body = text(line.text, 240);
      if (!body) continue;
      const speaker = resolveSpeaker(line.speaker);
      const stillName = text(line.still, 16).toLowerCase();
      const still: StillId | undefined = STILL_SET.has(stillName) ? (stillName as StillId) : undefined;
      if (speaker === "narrator") {
        lines.push(still ? { speaker, text: body, still } : { speaker, text: body });
      } else {
        const expressionName = text(line.expression, 12).toLowerCase();
        const expression: Expression = EXPR_SET.has(expressionName)
          ? (expressionName as Expression)
          : "neutral";
        lines.push(still ? { speaker, text: body, expression, still } : { speaker, text: body, expression });
      }
      if (lines.length >= 8) break;
    }
    if (lines.length === 0) continue;
    const ending = record.end === true;
    const choices: Choice[] = [];
    if (!ending && Array.isArray(record.choices)) {
      for (const choiceItem of record.choices) {
        if (!choiceItem || typeof choiceItem !== "object") continue;
        const choice = choiceItem as Record<string, unknown>;
        const label = text(choice.label, 52);
        const goto = slug(text(choice.goto, 24));
        if (!label || !goto) continue;
        choices.push({ label, goto });
        if (choices.length >= 3) break;
      }
    }
    const scene: Scene = { id: sceneId, background, lines };
    if (ending || choices.length === 0) scene.end = true;
    else scene.choices = choices;
    scenes.push(scene);
    if (scenes.length >= 6) break;
  }

  if (scenes.length === 0) {
    throw new Error("The draft had no playable scenes.");
  }

  const valid = new Set(scenes.map((scene) => scene.id));
  for (const scene of scenes) {
    if (!scene.choices) continue;
    const kept = scene.choices.filter((choice) => valid.has(choice.goto) && choice.goto !== scene.id);
    if (kept.length === 0) {
      delete scene.choices;
      scene.end = true;
    } else {
      scene.choices = kept;
    }
  }
  if (!scenes.some((scene) => scene.end)) {
    const last = scenes[scenes.length - 1];
    delete last.choices;
    last.end = true;
  }

  let start = slug(text(source.start, 24));
  if (!valid.has(start)) start = scenes[0].id;

  return {
    id: slug(id).slice(0, 40) || "draft",
    title,
    logline,
    characters,
    start,
    scenes,
  };
}
