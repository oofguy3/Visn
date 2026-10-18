import type { DirectResult } from "./types";

/** Static copies have no server, so the director cannot run. The built-in stories still play. */
export async function directStory(): Promise<DirectResult> {
  return {
    ok: false,
    error: "Grok isn't available on this copy. The stories already in the app still play.",
  };
}
