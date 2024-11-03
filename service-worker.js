const CACHE_NAME = "isha-time-v1";
const urlsToCache = [
  "ishaTime",
  "ishaTime/index.html",
  "ishaTime/output.css",
  "ishaTime/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
