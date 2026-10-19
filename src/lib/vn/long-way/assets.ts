/** Public files, fetched when a scene needs them. Not part of the JS bundle. */
export function longWayStoryUrl(): string {
  return `${import.meta.env.BASE_URL}vn/long-way/story.json`;
}

export function longWayAssetUrl(assetPath: string): string {
  const rel = assetPath.replace(/^art\//, "");
  return `${import.meta.env.BASE_URL}vn/long-way/${rel}`;
}
