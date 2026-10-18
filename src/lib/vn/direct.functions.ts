import { createServerFn } from "@tanstack/react-start";
import { normalizeStory } from "./normalize";
import type { ChatTurn, DirectResult, Story } from "./types";

type DirectInput = {
  message: string;
  story: Story;
  history: ChatTurn[];
};

const SYSTEM = `You are the director of Zizzy & Pony, a visual novel the author plays in this app.
The author speaks to you. You answer briefly, then return a complete playable script.
The pictures are already painted. You choose who speaks, how they look, which room is behind them, and when a full picture replaces the portrait.

Reply with JSON only, no markdown:
{
  "reply": "1 to 3 sentences to the author. Specific, warm, no bullets.",
  "story": {
    "title": "short title",
    "logline": "one sentence",
    "characters": [{ "id": "zizzy", "name": "Zizzy", "cast": "zizzy", "role": "short role" }],
    "start": "scene id",
    "scenes": [
      {
        "id": "opening",
        "background": "kitchen",
        "lines": [
          { "speaker": "narrator", "text": "Present-tense narration." },
          { "speaker": "zizzy", "text": "Spoken line.", "expression": "neutral" },
          { "speaker": "narrator", "text": "The hug lands.", "still": "hug" }
        ],
        "choices": [{ "label": "Short choice", "goto": "next" }]
      }
    ]
  }
}

Actors — same painterly style, same slender build, different faces. Do not invent an eighth face:
- zizzy: zebra woman, black-and-white stripes, curly dark hair with a white streak, wide purple hat, purple coat, striped hands.
- pony: young man, blonde, black beanie, thin glasses, rounded ears, mustard turtleneck, green coat.
- fenn: a young man, never a woman. The fox. Fox ears, messy auburn hair, orange hoodie.
- bruno: a young man. The brown-haired one. Short brown hair, dark ears, navy jacket with an ochre collar.
- clover: the rabbit. Long cream ears, blonde hair, olive coat.
- giraffy: a young man, never a woman. Spotted face and neck, two short ossicones, short curly brown hair, green coat.
- pia: the glasses girl. Black bob, round ears, round glasses, dusty rose cardigan.

Places:
- kitchen: night kitchen, fridge, one hanging lamp, chair with a coat, open door onto snow
- table: wood stove, kettle, wooden table, two mugs, papers, warm yellow wall
- room: low couch, a single lamp, snow on the dark window
- dock: empty wooden pier at dusk, brick mill, jar lanterns floating on the water, a distant spire
- snow: a narrow lane between wooden houses, one streetlamp, deep snow, no people
- dawn: the same kitchen at first light, lamp off, blue snow-light in the door

Full pictures, optional, only on the line where that moment happens. Omit "still" on ordinary lines:
- hug: Zizzy and Pony embrace in the lamp room
- letter: Pony holds the creased letter, Zizzy beside him at the table
- lanterns: Fenn and Giraffy, both men, light a jar on the dock
- welcome: Bruno comes in from the snow to Clover and Pia

Rules:
- 2 to 6 characters. ids are short slugs. speaker is a character id or "narrator".
- expression is only "neutral", "smile", or "tense".
- 4 to 6 scenes. 4 to 7 lines each. Line text under 220 characters. No wrapping quotation marks.
- At least two scenes offer exactly 2 choices. Choice labels under 48 characters.
- Ending scenes set "end": true and omit choices. Every path must reach an ending.
- Every choice.goto and start must be a real scene id.
- Literary, concrete, present tense. Warm, quiet, a little romantic. Wit is welcome.
- No explicit sexual content. No minors. No gore.
- Keep what the author liked. Change what they asked to change.
- A request for a new story replaces the plot. Zizzy and Pony stay available even if a scene rests them.
- The reply must not retell the script.`;

function validate(input: unknown): DirectInput {
  if (!input || typeof input !== "object") throw new Error("Missing request.");
  const record = input as Record<string, unknown>;
  const message = typeof record.message === "string" ? record.message.trim() : "";
  if (message.length < 2 || message.length > 600) {
    throw new Error("Tell Grok a little more — under 600 characters.");
  }
  let story: Story;
  try {
    story = normalizeStory(record.story, "current");
  } catch {
    throw new Error("The current script could not be read.");
  }
  const history: ChatTurn[] = [];
  if (Array.isArray(record.history)) {
    for (const item of record.history.slice(-6)) {
      if (!item || typeof item !== "object") continue;
      const turn = item as Record<string, unknown>;
      const role = turn.role === "director" ? "director" : turn.role === "user" ? "user" : null;
      const text = typeof turn.text === "string" ? turn.text.trim().slice(0, 500) : "";
      if (!role || !text) continue;
      history.push({ role, text });
    }
  }
  return { message, story, history };
}

function extractJson(raw: string): unknown {
  const trimmed = raw.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    /* fall through */
  }
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) return JSON.parse(fenced[1]);
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) return JSON.parse(trimmed.slice(start, end + 1));
  throw new Error("parse");
}

function messageText(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") return part;
        if (part && typeof part === "object" && "text" in part && typeof part.text === "string") {
          return part.text;
        }
        return "";
      })
      .join("");
  }
  return "";
}

async function complete(apiKey: string, messages: { role: string; content: string }[], jsonMode: boolean) {
  return fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.7,
      max_tokens: 4500,
      messages,
      ...(jsonMode ? { response_format: { type: "json_object" } } : {}),
    }),
  });
}

export const directStory = createServerFn({ method: "POST" })
  .validator(validate)
  .handler(async ({ data }): Promise<DirectResult> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "Grok isn't available right now. The kitchen story still plays." };
    }

    const messages = [
      { role: "system", content: SYSTEM },
      ...data.history.map((turn) => ({
        role: turn.role === "director" ? "assistant" : "user",
        content: turn.text,
      })),
      {
        role: "user",
        content: `Current script:\n${JSON.stringify(data.story)}\n\nAuthor:\n${data.message}`,
      },
    ];

    try {
      let response = await complete(apiKey, messages, true);
      if (response.status === 400) response = await complete(apiKey, messages, false);
      if (response.status === 429) {
        return { ok: false, error: "Grok needs a moment. Try again shortly." };
      }
      if (!response.ok) {
        return { ok: false, error: "Grok couldn't take the page. Try once more." };
      }
      const body = (await response.json()) as {
        choices?: { message?: { content?: unknown } }[];
      };
      const parsed = extractJson(messageText(body.choices?.[0]?.message?.content));
      const record = parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {};
      const story = normalizeStory(record.story ?? parsed, `draft${Date.now().toString(36)}`);
      const reply =
        typeof record.reply === "string" && record.reply.trim()
          ? record.reply.trim().slice(0, 420)
          : "Draft's on the title card. Read it whenever you want.";
      return { ok: true, reply, story };
    } catch {
      return { ok: false, error: "The draft came back tangled. Ask again, a little simpler." };
    }
  });
