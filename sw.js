// Naming the cacheName to use later
let staticCacheName = 'restaurant-static-v1';
// Creating an array of the app's assets to cache
let assets = [
    '../',
    '../css/styles.css',
    '../js/dbhelper.js',
    '../js/main.js',
    '../js/restaurant_info.js',
    '../data/restaurants.json',
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg',
    '../img/5.jpg',
    '../img/6.jpg',
    '../img/7.jpg',
    '../img/8.jpg',
    '../img/9.jpg',
    '../img/10.jpg',
    '../restaurant.html?id=1',
    '../restaurant.html?id=2',
    '../restaurant.html?id=3',
    '../restaurant.html?id=4',
    '../restaurant.html?id=5',
    '../restaurant.html?id=6',
    '../restaurant.html?id=7',
    '../restaurant.html?id=8',
    '../restaurant.html?id=9',
    '../restaurant.html?id=10'
];
// Creating an install event using the 'waitUntil' to wait until progress is finished 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName)
        .then((cache) => {
            return cache.addAll(assets);
        })
    );
});
// Creating an event to check when the serviceworker is activated to give it new tasks
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('review-') &&
                        cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
// Creating a fetch event using the 'respondWith' to tell the browser that we're handling this request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});