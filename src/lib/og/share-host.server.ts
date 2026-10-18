import { getRequest } from "@tanstack/react-start/server";

function cleanHost(value: string | null | undefined): string {
  const host = String(value ?? "")
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();
  if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
  if (
    host === "vercel.app" ||
    host.endsWith(".vercel.app") ||
    host === "vercel.com" ||
    host.endsWith(".vercel.com")
  ) {
    return "";
  }
  return host;
}

/** Absolute X feed card URL, or "" when the host is not a public app host. */
export function xGameImage(): string {
  const fromEnv = cleanHost(process.env.VITE_PUBLIC_HOSTNAME);
  const header = fromEnv
    ? ""
    : (() => {
        try {
          const request = getRequest();
          return request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
        } catch {
          return "";
        }
      })();
  const host = fromEnv || cleanHost(header);
  return host ? `https://${host}/x-banner.jpg` : "";
}
