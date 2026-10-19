import type { BackgroundId, CastId, Expression, StillId, Story } from "./types";
import { UNTIL_MORNING } from "./until-morning";

export const CAST_BLURBS: Record<CastId, { name: string; note: string }> = {
  zizzy: { name: "Zizzy", note: "Stripes, purple hat, purple coat." },
  pony: { name: "Pony", note: "Beanie, glasses, green coat." },
  fenn: { name: "Fenn", note: "The fox. A man. Auburn hair, orange hoodie." },
  bruno: { name: "Bruno", note: "The brown-haired one. Navy jacket." },
  clover: { name: "Clover", note: "The rabbit. Long ears, olive coat." },
  giraffy: { name: "Giraffy", note: "A man. Spots, ossicones, green coat." },
  pia: { name: "Pia", note: "The glasses girl. Bob, rose cardigan." },
};

export const PLACES: Record<BackgroundId, string> = {
  kitchen: "Night kitchen, snow at the door",
  table: "Stove, kettle, two cups",
  room: "Lamp, couch, snow on the glass",
  dock: "Dusk pier, lanterns on the water",
  snow: "The lane between the houses",
  dawn: "First light in the kitchen",
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const portrait = (cast: CastId, expression: Expression) => asset(`vn/${cast}-${expression}.png`);

export function portraitSrc(cast: CastId, expression: Expression = "neutral"): string {
  return portrait(cast, expression);
}

export function backgroundSrc(id: BackgroundId): string {
  return asset(`vn/bg-${id}.jpg`);
}

export function stillSrc(id: StillId): string {
  return asset(`vn/still-${id}.jpg`);
}

export const STARTER: Story = {
  id: "door-in-the-snow",
  title: "The Door in the Snow",
  logline:
    "Zizzy comes in from the snow. Pony has been sitting with a letter that still sounds like her.",
  characters: [
    { id: "zizzy", name: "Zizzy", cast: "zizzy", role: "home from the snow" },
    { id: "pony", name: "Pony", cast: "pony", role: "kept the kettle on" },
  ],
  start: "door",
  scenes: [
    {
      id: "door",
      background: "kitchen",
      lines: [
        {
          speaker: "narrator",
          text: "Snow follows her in and melts on the tile. The lamp over the sink is the only thing that remembered to stay awake.",
        },
        {
          speaker: "zizzy",
          expression: "tense",
          text: "You didn't lock it.",
        },
        {
          speaker: "pony",
          expression: "neutral",
          text: "I heard you on the step. I didn't want the letter to be the thing that opened the door.",
        },
        {
          speaker: "narrator",
          text: "He's between the fridge and the chair. A dark coat, not his, is folded on the seat. The hinge ticks as the cold works on it.",
        },
        {
          speaker: "pony",
          expression: "neutral",
          text: "It's still your handwriting.",
        },
        {
          speaker: "zizzy",
          expression: "tense",
          text: "I wrote it before I knew if I was coming back.",
        },
      ],
      choices: [
        { label: "Sit with him.", goto: "table" },
        { label: "Ask where he found it.", goto: "letter" },
      ],
    },
    {
      id: "table",
      background: "table",
      lines: [
        {
          speaker: "pony",
          expression: "smile",
          text: "Tea's hot. The kettle did the brave part.",
        },
        {
          speaker: "zizzy",
          expression: "smile",
          text: "You always talk about the kettle when you're scared.",
        },
        {
          speaker: "pony",
          expression: "neutral",
          text: "I'm not scared. I'm cold, and you brought the weather in with you.",
        },
        {
          speaker: "narrator",
          text: "Their shoulders almost touch. The letter is smoothed flat on the table, still creased down the middle.",
          still: "letter",
        },
        {
          speaker: "zizzy",
          expression: "neutral",
          text: "Read it out loud. I want to hear if it still sounds like me.",
        },
      ],
      choices: [
        { label: "Let him read it.", goto: "read" },
        { label: "Take it back.", goto: "keep" },
      ],
    },
    {
      id: "letter",
      background: "kitchen",
      lines: [
        {
          speaker: "zizzy",
          expression: "tense",
          text: "Where did you find it?",
        },
        {
          speaker: "pony",
          expression: "neutral",
          text: "In the pocket of that coat. The one you left when you said you were only going to the shop.",
        },
        {
          speaker: "narrator",
          text: "Outside, snow keeps rewriting the step. Inside, the lamp makes a small honest circle.",
        },
        {
          speaker: "pony",
          expression: "smile",
          text: "I wasn't going to read it. Then it started snowing, and not-reading felt like a lie.",
        },
      ],
      choices: [
        { label: "Then read it.", goto: "read" },
        { label: "Not tonight.", goto: "keep" },
      ],
    },
    {
      id: "read",
      background: "room",
      lines: [
        {
          speaker: "narrator",
          text: "He reads the last line twice. The second time is quieter, like the room asked him to.",
        },
        {
          speaker: "pony",
          expression: "smile",
          text: "You were already on your way home when you wrote this.",
        },
        {
          speaker: "zizzy",
          expression: "smile",
          text: "Don't sound so surprised.",
        },
        {
          speaker: "narrator",
          text: "She steps in. His arms come up, and the lamp paints the hug the same warm color. Outside, the snow keeps its distance.",
          still: "hug",
        },
      ],
      end: true,
    },
    {
      id: "keep",
      background: "table",
      lines: [
        {
          speaker: "zizzy",
          expression: "neutral",
          text: "Not tonight.",
        },
        {
          speaker: "pony",
          expression: "smile",
          text: "Then it stays on the table. Creases and all.",
        },
        {
          speaker: "narrator",
          text: "He pours the second cup anyway. She doesn't take the cold out of her sleeves yet. The door is shut. That is enough for one night.",
        },
      ],
      end: true,
    },
  ],
};

export const LANTERNS: Story = {
  id: "lanterns",
  title: "The Lanterns",
  logline: "Giraffy lit one jar and won't say for whom. Fenn is already counting the rest.",
  characters: [
    { id: "giraffy", name: "Giraffy", cast: "giraffy", role: "lit the first jar" },
    { id: "fenn", name: "Fenn", cast: "fenn", role: "counts what people won't say" },
    { id: "zizzy", name: "Zizzy", cast: "zizzy", role: "came down to the water" },
    { id: "pony", name: "Pony", cast: "pony", role: "brought the matches" },
  ],
  start: "pier",
  scenes: [
    {
      id: "pier",
      background: "dock",
      lines: [
        {
          speaker: "narrator",
          text: "The jars are already in the water, a crooked line of light toward the spire.",
        },
        {
          speaker: "fenn",
          expression: "neutral",
          text: "You lit yours before the rest of us got here.",
        },
        { speaker: "giraffy", expression: "tense", text: "It was getting dark. That's all." },
        { speaker: "zizzy", expression: "smile", text: "You don't waste a match on 'that's all.'" },
        {
          speaker: "pony",
          expression: "neutral",
          text: "Three left. Someone says a name, or they just float.",
        },
      ],
      choices: [
        { label: "Ask who it's for.", goto: "name" },
        { label: "Light one and say nothing.", goto: "quiet" },
      ],
    },
    {
      id: "name",
      background: "dock",
      lines: [
        {
          speaker: "zizzy",
          expression: "neutral",
          text: "Say it. The water doesn't repeat things.",
        },
        {
          speaker: "giraffy",
          expression: "tense",
          text: "It's for the walk home. For whoever is still out.",
        },
        { speaker: "fenn", expression: "smile", text: "That's a name, if you squint." },
        {
          speaker: "pony",
          expression: "smile",
          text: "Then we light the rest for the same person.",
        },
      ],
      choices: [
        { label: "Light them together.", goto: "together" },
        { label: "Leave his jar alone.", goto: "alone" },
      ],
    },
    {
      id: "quiet",
      background: "dock",
      lines: [
        {
          speaker: "narrator",
          text: "Fenn strikes a match and doesn't speak. The jar takes the flame like it was waiting.",
        },
        { speaker: "giraffy", expression: "smile", text: "You didn't ask." },
        {
          speaker: "fenn",
          expression: "neutral",
          text: "You didn't want to answer. I can work with that.",
        },
        {
          speaker: "zizzy",
          expression: "neutral",
          text: "Then we stand here until the line looks finished.",
        },
      ],
      choices: [
        { label: "Stay until the last jar.", goto: "together" },
        { label: "Walk him home.", goto: "alone" },
      ],
    },
    {
      id: "together",
      background: "dock",
      lines: [
        {
          speaker: "narrator",
          text: "Fenn holds the jar. Giraffy lights it. The mill windows answer, small and orange.",
          still: "lanterns",
        },
        {
          speaker: "pony",
          expression: "smile",
          text: "Looks like a street, if a street could float.",
        },
        {
          speaker: "giraffy",
          expression: "smile",
          text: "It'll do. Thank you for not making me say more.",
        },
        {
          speaker: "zizzy",
          expression: "smile",
          text: "We didn't need more. The light's enough to walk by.",
        },
      ],
      end: true,
    },
    {
      id: "alone",
      background: "room",
      lines: [
        {
          speaker: "narrator",
          text: "The pier stays behind them. One jar burns higher than the others, as if it knows.",
        },
        { speaker: "giraffy", expression: "neutral", text: "You can tell them later. Or not." },
        { speaker: "fenn", expression: "smile", text: "Later's a place. I'll walk you to it." },
      ],
      end: true,
    },
  ],
};

export const COAT: Story = {
  id: "brown-coat",
  title: "The Brown Coat",
  logline: "Bruno's coat is on the chair. Clover wants to wait. Pia already found the note.",
  characters: [
    { id: "bruno", name: "Bruno", cast: "bruno", role: "left the coat" },
    { id: "clover", name: "Clover", cast: "clover", role: "wants to wait" },
    { id: "pia", name: "Pia", cast: "pia", role: "read the note" },
    { id: "pony", name: "Pony", cast: "pony", role: "keeps the kettle on" },
  ],
  start: "chair",
  scenes: [
    {
      id: "chair",
      background: "kitchen",
      lines: [
        {
          speaker: "narrator",
          text: "The coat is folded on the chair, still holding the shape of his shoulders. Snow ticks at the door.",
        },
        {
          speaker: "clover",
          expression: "tense",
          text: "We wait. He said he was only going to the shop.",
        },
        {
          speaker: "pia",
          expression: "neutral",
          text: "The shop closed an hour ago. And there's a note in the pocket.",
        },
        {
          speaker: "pony",
          expression: "neutral",
          text: "I didn't read it. I also didn't hide it. Those are different.",
        },
      ],
      choices: [
        { label: "Read the note.", goto: "note" },
        { label: "Leave it in the pocket.", goto: "wait" },
      ],
    },
    {
      id: "note",
      background: "table",
      lines: [
        {
          speaker: "narrator",
          text: "Pia smooths the paper on the table. The crease has been folded more than once.",
        },
        {
          speaker: "pia",
          expression: "smile",
          text: "It says he'll be late, and not to let the kettle win.",
        },
        {
          speaker: "clover",
          expression: "smile",
          text: "That's just him. Late, and bossy about tea.",
        },
        { speaker: "pony", expression: "smile", text: "The kettle can wait its turn. So can we." },
      ],
      choices: [
        { label: "Put the kettle on anyway.", goto: "home" },
        { label: "Go look for him.", goto: "step" },
      ],
    },
    {
      id: "wait",
      background: "kitchen",
      lines: [
        {
          speaker: "clover",
          expression: "neutral",
          text: "If he wanted it read, he'd have left it on the table.",
        },
        {
          speaker: "pia",
          expression: "tense",
          text: "He left it where a worried person would find it. That's a kind of table.",
        },
        { speaker: "pony", expression: "neutral", text: "Then we sit where he can see the lamp." },
      ],
      choices: [
        { label: "Keep the lamp in the window.", goto: "home" },
        { label: "Step outside.", goto: "step" },
      ],
    },
    {
      id: "home",
      background: "room",
      lines: [
        {
          speaker: "narrator",
          text: "The door opens on the second cup. Bruno shakes snow off his hair, and the room makes room for him.",
          still: "welcome",
        },
        { speaker: "bruno", expression: "smile", text: "You found the coat before you found me." },
        { speaker: "clover", expression: "smile", text: "The coat was on time. You weren't." },
        { speaker: "pia", expression: "smile", text: "Sit. The note already apologized." },
      ],
      end: true,
    },
    {
      id: "step",
      background: "dock",
      lines: [
        {
          speaker: "narrator",
          text: "He's on the pier, watching one jar turn in the current, hands in his pockets.",
        },
        {
          speaker: "bruno",
          expression: "tense",
          text: "I was coming back. I just needed the water to be louder than my head.",
        },
        {
          speaker: "pony",
          expression: "smile",
          text: "Then walk with us. The kettle is still the loudest thing in the kitchen.",
        },
      ],
      end: true,
    },
  ],
};

export const LONG_WAY_ID = "long-way-round";

export const ECHOES_ID = "echoes-of-regret";

export const LONG_WAY: Story = {
  id: LONG_WAY_ID,
  title: "The Long Way Round",
  logline:
    "About two hours, whichever road you take. Eleven chapters, one tandem, and four ways the race can end.",
  characters: [
    { id: "zizzy", name: "Zizzy", cast: "zizzy", role: "draws a partner" },
    { id: "pony", name: "Pony", cast: "pony", role: "the other seat on the tandem" },
    { id: "fenn", name: "Fenn", cast: "fenn", role: "knows the rules" },
    { id: "bruno", name: "Bruno", cast: "bruno", role: "drives the support van" },
    { id: "clover", name: "Clover", cast: "clover", role: "rides with Fenn" },
    { id: "giraffy", name: "Giraffy", cast: "giraffy", role: "a long way up" },
    { id: "pia", name: "Pia", cast: "pia", role: "writes the riddles" },
  ],
  start: "ch01_s01",
  scenes: [
    {
      id: "ch01_s01",
      background: "dock",
      lines: [{ speaker: "narrator", text: "The Long Way Round opens in its own player." }],
      end: true,
    },
  ],
};

export const ECHOES: Story = {
  id: ECHOES_ID,
  title: "Echoes of Regret",
  logline:
    "Mr. P meant the potion to heal. Lucella is left with what people wish they could change.",
  characters: [],
  start: "ch01_s01",
  scenes: [
    {
      id: "ch01_s01",
      background: "room",
      lines: [{ speaker: "narrator", text: "Echoes of Regret opens in its own player." }],
      end: true,
    },
  ],
};

export function isScriptedStory(id: string): boolean {
  return id === LONG_WAY_ID || id === ECHOES_ID;
}

export const LIBRARY: Story[] = [UNTIL_MORNING, STARTER, LANTERNS, COAT, LONG_WAY, ECHOES];

export const PROMPTS = [
  "Write a new quiet night for Zizzy and Pony, still in this kitchen.",
  "Put them on the dock, with the lanterns already in the water.",
  "Giraffy is a man. Give him a quiet line beside Zizzy.",
  "Fenn and Clover are waiting. Let them speak.",
  "Softer. One more scene, just Zizzy and Pony.",
];
