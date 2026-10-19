# Visn

Zizzy & Pony, a visual novel you play in the browser. The story list includes the short nights, Until Morning, The Long Way Round, and Echoes of Regret.

The Long Way Round (18+) is a separate telling. It stays out of the story list and out of the build unless you opt in:

```bash
VITE_ENABLE_PRIVATE_STORIES=true npm run dev
```

The story then asks you to confirm you are 18 or older before it starts. The default build and the GitHub Pages build do not include it.

```bash
npm install
npm run dev
```

The dev server listens on port 8080.
