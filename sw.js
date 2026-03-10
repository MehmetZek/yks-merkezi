self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('notificationclick', e => {
    e.notification.close();
    e.waitUntil(
        self.clients.matchAll({type: 'window'}).then(clients => {
            if (clients.length > 0) return clients[0].focus();
            return self.clients.openWindow('./');
        })
    );
});
