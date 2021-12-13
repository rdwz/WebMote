importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
  ({url}) => url.origin === self.location.origin &&
             url.pathname.startsWith('/'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' ||
                    request.destination === 'style' ,
    new workbox.strategies.CacheFirst({
      cacheName: 'static-resources',
    })
  );
  