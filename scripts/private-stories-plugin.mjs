/**
 * Serves and copies `private/long-way-18` only when
 * `VITE_ENABLE_PRIVATE_STORIES=true`. The folder is not under `public/`, so a
 * default build never ships the 18+ script or its pictures.
 */
import { cpSync, createReadStream, existsSync, statSync } from "node:fs";
import { dirname, join, normalize, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "private", "long-way-18");
const urlPrefix = "vn/long-way-18";

function flagOn(mode) {
  const loaded = loadEnv(mode, root, "VITE_");
  const value = process.env.VITE_ENABLE_PRIVATE_STORIES ?? loaded.VITE_ENABLE_PRIVATE_STORIES;
  return value === "true";
}

function fileFor(urlPath) {
  let rel = urlPath;
  try {
    rel = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  if (rel.includes("\0")) return null;
  const file = normalize(join(sourceDir, rel));
  const fromRoot = relative(sourceDir, file);
  if (!fromRoot || fromRoot.startsWith("..") || fromRoot.split(sep).includes("..")) return null;
  return file;
}

function serve(middlewares, base) {
  middlewares.use((req, res, next) => {
    const raw = (req.url ?? "").split("?")[0] ?? "";
    const prefixes = [`${base || "/"}${urlPrefix}/`, `/${urlPrefix}/`].map((item) =>
      item.replace(/\/{2,}/g, "/"),
    );
    const prefix = prefixes.find((item) => raw.startsWith(item));
    if (!prefix) {
      next();
      return;
    }
    const file = fileFor(raw.slice(prefix.length));
    if (!file || !existsSync(file) || !statSync(file).isFile()) {
      next();
      return;
    }
    const type = file.endsWith(".json")
      ? "application/json; charset=utf-8"
      : file.endsWith(".webp")
        ? "image/webp"
        : "application/octet-stream";
    res.setHeader("content-type", type);
    res.setHeader("cache-control", "no-cache");
    createReadStream(file).pipe(res);
  });
}

export function privateStoriesPlugin() {
  let enabled = false;
  return {
    name: "visn-private-stories",
    config(_config, env) {
      enabled = flagOn(env.mode);
    },
    configureServer(server) {
      if (!enabled) return;
      serve(server.middlewares, server.config.base);
    },
    configurePreviewServer(server) {
      if (!enabled) return;
      serve(server.middlewares, server.config.base);
    },
    closeBundle() {
      if (!enabled) return;
      const name = this.environment?.name;
      if (name && name !== "client") return;
      const outDir = this.environment?.config?.build?.outDir;
      if (!outDir) return;
      const normalized = outDir.replace(/\\/g, "/");
      if (/\/(ssr|server|functions)(\/|$)/.test(normalized)) return;
      cpSync(sourceDir, join(outDir, urlPrefix), { recursive: true });
    },
  };
}
