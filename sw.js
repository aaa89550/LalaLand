// Service Worker for LalaLand Chat
const CACHE_NAME = 'lalaland-v1'
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/icon-512.png',
  '/manifest.json'
]

// 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: 快取檔案')
        return cache.addAll(urlsToCache)
      })
  )
})

// 激活 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: 清除舊快取', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// 處理網路請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果在快取中找到，返回快取的版本
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})

// 處理推播通知
self.addEventListener('push', event => {
  console.log('📩 Service Worker: 收到推播通知', event)
  
  let data = {};
  try { 
    data = event.data ? event.data.json() : {}; 
  } catch (error) {
    console.warn('無法解析推播數據:', error);
  }
  
  const title = data.title || 'LalaLand 聊天室';
  const body = data.body || '您有新的訊息';
  const url = data.url || '/';
  
  const options = {
    body: body,
    icon: '/icon-512.png',
    badge: '/icon-512.png',
    vibrate: [100, 50, 100],
    data: {
      url: url,
      dateOfArrival: Date.now(),
      primaryKey: data.primaryKey || '1'
    },
    actions: [
      {
        action: 'explore',
        title: '查看訊息',
        icon: '/icon-512.png'
      },
      {
        action: 'close',
        title: '關閉',
        icon: '/icon-512.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

// 處理通知點擊
self.addEventListener('notificationclick', event => {
  console.log('🔔 Service Worker: 通知被點擊', event)
  
  event.notification.close()
  
  const targetUrl = event.notification.data?.url || '/';

  if (event.action === 'explore' || !event.action) {
    // 開啟或聚焦到應用程式
    event.waitUntil(
      (async () => {
        const allClients = await clients.matchAll({ 
          type: 'window', 
          includeUncontrolled: true 
        });
        
        // 嘗試找到已存在的分頁
        const found = allClients.find(client => {
          try {
            const clientUrl = new URL(client.url);
            const targetUrlObj = new URL(targetUrl, self.location.origin);
            return clientUrl.pathname === targetUrlObj.pathname;
          } catch (error) {
            return false;
          }
        });
        
        if (found) {
          // 聚焦到現有的分頁
          return found.focus();
        } else {
          // 開啟新分頁
          return clients.openWindow(targetUrl);
        }
      })()
    )
  } else if (event.action === 'close') {
    // 關閉通知
    console.log('🔔 Service Worker: 通知被關閉')
  }
})

// 處理後台同步
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('🔄 Service Worker: 執行後台同步')
    event.waitUntil(doBackgroundSync())
  }
})

function doBackgroundSync() {
  // 實作後台同步邏輯
  return Promise.resolve()
}


