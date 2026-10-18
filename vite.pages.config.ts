import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/Visn/",
  publicDir: path.join(root, "public"),
  build: {
    outDir: path.join(root, "dist-pages"),
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
  plugins: [tailwindcss(), react()],
});
