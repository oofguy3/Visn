/** Public files, fetched when a scene needs them. Not part of the JS bundle. */
export function longWayStoryUrl(edition: "public" | "private" = "public"): string {
  if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES === "true" && edition === "private") {
    return `${import.meta.env.BASE_URL}vn/long-way-18/story.json`;
  }
  return `${import.meta.env.BASE_URL}vn/long-way/story.json`;
}

export function longWayAssetUrl(assetPath: string): string {
  if (import.meta.env.VITE_ENABLE_PRIVATE_STORIES === "true" && assetPath.startsWith("spicy/")) {
    return `${import.meta.env.BASE_URL}vn/long-way-18/${assetPath}`;
  }
  const rel = assetPath.replace(/^art\//, "");
  return `${import.meta.env.BASE_URL}vn/long-way/${rel}`;
}
