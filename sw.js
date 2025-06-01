const cacheName = "menu-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/photos/logo.png"
  // أضف هنا بقية الصور لاحقًا لو أردت دعم offline أوسع
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
