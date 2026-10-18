self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Empty on purpose. Chrome needs a fetch handler before it will install the app.
// It does not cache or change any request.
self.addEventListener("fetch", () => {});
