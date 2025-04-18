self.addEventListener('install', e => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  // You can add caching logic here if needed
});
