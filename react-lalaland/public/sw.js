// Service Worker for LalaLand PWA
const CACHE_NAME = 'lalaland-v3-android-fix';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-512.png'
];

// 安裝事件 - 緩存資源
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: 緩存開啟成功');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('❌ Service Worker: 緩存失敗', error);
      })
  );
});

// 激活事件 - 清理舊緩存
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: 激活中...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: 刪除舊緩存', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 攔截請求 - 緩存優先策略
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果緩存中有，直接返回
        if (response) {
          return response;
        }
        
        // 否則從網路獲取
        return fetch(event.request).then((response) => {
          // 檢查是否是有效響應
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 複製響應
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // 網路失敗時的離線頁面
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

// 消息處理
self.addEventListener('message', (event) => {
  console.log('📬 Service Worker: 收到消息', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('🚀 Service Worker: 腳本已載入');