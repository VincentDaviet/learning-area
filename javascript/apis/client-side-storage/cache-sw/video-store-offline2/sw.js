self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/javascript/apis/client-side-storage/cache-sw/video-store-offline/',
       '/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html',
       '/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js',
       '/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
