navigator.serviceWorker && navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
  console.log('Service Worker instal success. SW Scope : ', registration.scope);
});