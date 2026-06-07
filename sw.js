// Service Worker — מנקה את עצמו ומבטל את כל הקאשים
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// לא מיירט שום בקשה — הדפדפן טוען הכל ישירות מהרשת
