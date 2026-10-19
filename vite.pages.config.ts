import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "dist-pages");

/** Vite keeps the input's directory, which would publish the app at /Visn/pages-site/. */
function hoistPagesIndex(): Plugin {
  return {
    name: "hoist-pages-index",
    apply: "build",
    closeBundle() {
      const from = path.join(outDir, "pages-site/index.html");
      if (!fs.existsSync(from)) return;
      fs.renameSync(from, path.join(outDir, "index.html"));
      fs.rmSync(path.join(outDir, "pages-site"), { recursive: true, force: true });
    },
  };
}

export default defineConfig({
  base: "/Visn/",
  publicDir: path.join(root, "public"),
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: path.join(root, "pages-site/index.html"),
    },
  },
  resolve: {
    alias: [
      {
        find: "@/lib/vn/direct.functions",
        replacement: path.join(root, "src/lib/vn/direct.pages.ts"),
      },
      { find: "@", replacement: path.join(root, "src") },
    ],
  },
  plugins: [tailwindcss(), react(), hoistPagesIndex()],
});
