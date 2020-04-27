self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js',
       '/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log("fetch : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      console.log("serviceworker rapporte : " + response);
      return response || fetch(e.request);
    })
  );
});
