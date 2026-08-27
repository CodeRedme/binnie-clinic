const CACHE_NAME = 'binnie-clinic-v2';
const STATIC_ASSETS = ['/icon-192.png', '/icon-512.png', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // For the page itself (navigation requests): always try the network first
  // so new deploys show up immediately. Only fall back to cache if offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // For static assets (icons, manifest): cache-first is fine, they rarely change.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
