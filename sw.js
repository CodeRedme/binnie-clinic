// Bump this on every deploy so the browser knows a new version exists.
// Old caches (anything not matching CACHE_NAME) get wiped in 'activate' below.
const CACHE_NAME = 'binnie-clinic-v6';

const STATIC_ASSETS = [
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/bg-bunny.png',
  '/bg-penguin.png',
  '/bg-puppy.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  // NOTE: no self.skipWaiting() here on purpose — we want this worker to sit
  // in "waiting" so index.html can show the "Update now" banner and let the
  // user choose when to swap over, instead of yanking the rug mid-use.
});

// index.html sends this once the person taps "Update now"
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
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

  // For static assets (icons, manifest, backgrounds): cache-first is fine, they rarely change.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
