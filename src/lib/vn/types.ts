export const CASTS = ["zizzy", "pony", "fenn", "bruno", "clover", "giraffy", "pia"] as const;
export const BACKGROUNDS = ["kitchen", "table", "room", "dock", "snow", "dawn"] as const;
export const EXPRESSIONS = ["neutral", "smile", "tense"] as const;

export const STILLS = ["hug", "letter", "lanterns", "welcome"] as const;

export type CastId = (typeof CASTS)[number];
export type BackgroundId = (typeof BACKGROUNDS)[number];
export type Expression = (typeof EXPRESSIONS)[number];
export type StillId = (typeof STILLS)[number];

export type Line = {
  speaker: string;
  text: string;
  expression?: Expression;
  still?: StillId;
};

export type Choice = {
  label: string;
  goto: string;
};

export type Scene = {
  id: string;
  background: BackgroundId;
  lines: Line[];
  choices?: Choice[];
  next?: string;
  end?: boolean;
};

export type Character = {
  id: string;
  name: string;
  cast: CastId;
  role: string;
};

export type Story = {
  id: string;
  title: string;
  logline: string;
  characters: Character[];
  start: string;
  scenes: Scene[];
};

export type ChatTurn = {
  role: "user" | "director";
  text: string;
};

export type DirectResult =
  | { ok: true; reply: string; story: Story }
  | { ok: false; error: string };
