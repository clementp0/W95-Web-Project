let version = '0.4';
console.log(`BETA version ${version} loaded`);


const cacheName = 'BETA';

const filesToCache = [
  './',
  './css/style.css',
  './css/style2.css',
  './css/mobile.css'
];

self.addEventListener('install', function(event){
  console.log(`${cacheName} install`);
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log(`${cacheName} caching files`);
      return cache.addAll(filesToCache);
    })
  );
  //uncomment this to activate on install
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  console.log(`${cacheName} activate`);
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log('loaded from cache', event.request);
      return caches.match(event.request);
    })
  );
  console.log('network then fallback to cache');
});
