export type ScriptSlot = "long-way" | "echoes";

/** Public files, fetched when a scene needs them. Not part of the JS bundle. */
export function longWayStoryUrl(): string {
  return `${import.meta.env.BASE_URL}vn/long-way/story.json`;
}

export function scriptedStoryUrl(slot: ScriptSlot = "long-way"): string {
  if (slot === "echoes") return `${import.meta.env.BASE_URL}vn/echoes/story.json`;
  return longWayStoryUrl();
}

export function longWayAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("vn/")) {
    return `${import.meta.env.BASE_URL}${assetPath}`;
  }
  const rel = assetPath.replace(/^art\//, "");
  return `${import.meta.env.BASE_URL}vn/long-way/${rel}`;
}
