// Service Worker for LalaLand PWA - Android Optimized
const CACHE_NAME = 'lalaland-v4-stable';
const STATIC_CACHE = 'lalaland-static-v4';
const DYNAMIC_CACHE = 'lalaland-dynamic-v4';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-512.png',
  '/favicon.ico'
];

// 最大緩存大小 (Android 記憶體限制)
const MAX_CACHE_SIZE = 50;
const MAX_CACHE_AGE = 24 * 60 * 60 * 1000; // 24小時

// 清理過期緩存
const cleanupCache = async (cacheName) => {
  try {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    if (requests.length > MAX_CACHE_SIZE) {
      // 刪除最舊的緩存項目
      const deletePromises = requests
        .slice(0, requests.length - MAX_CACHE_SIZE)
        .map(request => cache.delete(request));
      await Promise.allSettled(deletePromises);
      console.log(`🧹 清理了 ${deletePromises.length} 個舊緩存項目`);
    }
  } catch (error) {
    console.warn('⚠️ 緩存清理失敗:', error);
  }
};

// 安裝事件 - 緩存靜態資源
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: 安裝中... (v4-stable)');
  
  event.waitUntil(
    (async () => {
      try {
        // 開啟靜態緩存
        const cache = await caches.open(STATIC_CACHE);
        console.log('📦 Service Worker: 靜態緩存開啟成功');
        
        // 使用 Promise.allSettled 避免單個失敗導致全部失敗
        const cacheResults = await Promise.allSettled(
          urlsToCache.map(url => cache.add(url))
        );
        
        const failures = cacheResults.filter(result => result.status === 'rejected');
        if (failures.length > 0) {
          console.warn(`⚠️ ${failures.length} 個資源緩存失敗:`, failures);
        }
        
        console.log(`✅ 成功緩存 ${cacheResults.length - failures.length}/${cacheResults.length} 個資源`);
        
        // 強制接管頁面
        self.skipWaiting();
        
      } catch (error) {
        console.error('❌ Service Worker 安裝失敗:', error);
        // 不拋出錯誤，讓 SW 繼續運行
      }
    })()
  );
});

// 激活事件 - 清理舊緩存並接管客戶端
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: 激活中...');
  
  event.waitUntil(
    (async () => {
      try {
        // 獲取所有緩存名稱
        const cacheNames = await caches.keys();
        
        // 刪除舊版本緩存
        const deletePromises = cacheNames
          .filter(cacheName => 
            cacheName !== CACHE_NAME && 
            cacheName !== STATIC_CACHE && 
            cacheName !== DYNAMIC_CACHE
          )
          .map(cacheName => {
            console.log('🗑️ Service Worker: 刪除舊緩存', cacheName);
            return caches.delete(cacheName);
          });
        
        await Promise.allSettled(deletePromises);
        
        // 清理當前緩存
        await cleanupCache(DYNAMIC_CACHE);
        
        // 立即接管所有客戶端
        await clients.claim();
        
        console.log('🎉 Service Worker 激活完成，已接管所有頁面');
        
      } catch (error) {
        console.error('❌ Service Worker 激活失敗:', error);
      }
    })()
  );
});

// 網路優先策略（適用於動態內容）
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      // 只緩存 GET 請求的成功響應
      if (request.method === 'GET') {
        const cache = await caches.open(DYNAMIC_CACHE);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    }
    
    // 網路響應無效，嘗試緩存
    return await caches.match(request) || networkResponse;
    
  } catch (error) {
    console.warn('網路請求失敗，嘗試緩存:', request.url);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 創建離線響應
    return createOfflineResponse(request);
  }
};

// 緩存優先策略（適用於靜態資源）
const cacheFirst = async (request) => {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.warn('靜態資源載入失敗:', request.url);
    return createOfflineResponse(request);
  }
};

// 創建離線響應
const createOfflineResponse = (request) => {
  if (request.destination === 'document') {
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>離線模式 - LalaLand</title>
        <style>
          body { 
            font-family: system-ui, -apple-system, sans-serif; 
            text-align: center; 
            padding: 2rem; 
            background: #f7f1e1; 
            color: #333;
          }
          .container { 
            max-width: 400px; 
            margin: 0 auto; 
            background: white; 
            padding: 2rem; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          button { 
            background: #2563eb; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 6px; 
            cursor: pointer; 
            font-size: 16px;
            margin: 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🌐 目前處於離線模式</h1>
          <p>請檢查網路連接後重試</p>
          <button onclick="window.location.reload()">重新載入</button>
          <button onclick="window.location.href='/'">回到首頁</button>
        </div>
      </body>
      </html>`,
      { 
        headers: { 'Content-Type': 'text/html' },
        status: 200
      }
    );
  }
  
  // 其他類型的請求返回基本錯誤響應
  return new Response(
    JSON.stringify({ 
      error: 'Offline', 
      message: '網路不可用，請稍後再試' 
    }),
    { 
      headers: { 'Content-Type': 'application/json' },
      status: 503
    }
  );
};

// 攔截請求 - 智能路由策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 跳過非 HTTP 請求
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // 跳過 Chrome 擴展請求
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  event.respondWith(
    (async () => {
      try {
        // 靜態資源使用緩存優先
        if (
          request.destination === 'style' ||
          request.destination === 'script' ||
          request.destination === 'image' ||
          request.destination === 'font' ||
          url.pathname.includes('/assets/') ||
          url.pathname.endsWith('.css') ||
          url.pathname.endsWith('.js') ||
          url.pathname.endsWith('.ico')
        ) {
          return await cacheFirst(request);
        }
        
        // 動態內容使用網路優先
        return await networkFirst(request);
        
      } catch (error) {
        console.error('Fetch 處理失敗:', error);
        return createOfflineResponse(request);
      }
    })()
  );
});

// 消息處理
self.addEventListener('message', (event) => {
  console.log('📬 Service Worker: 收到消息', event.data);
  
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
        
      case 'CLEAR_CACHE':
        clearAllCaches();
        break;
        
      case 'GET_CACHE_INFO':
        getCacheInfo().then(info => {
          event.ports[0]?.postMessage(info);
        });
        break;
        
      default:
        console.log('未知消息類型:', event.data.type);
    }
  }
});

// 清理所有緩存
const clearAllCaches = async () => {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('🧹 已清理所有緩存');
  } catch (error) {
    console.error('清理緩存失敗:', error);
  }
};

// 獲取緩存資訊
const getCacheInfo = async () => {
  try {
    const cacheNames = await caches.keys();
    const info = {};
    
    for (const name of cacheNames) {
      const cache = await caches.open(name);
      const keys = await cache.keys();
      info[name] = keys.length;
    }
    
    return info;
  } catch (error) {
    console.error('獲取緩存資訊失敗:', error);
    return {};
  }
};

// 錯誤處理
self.addEventListener('error', (event) => {
  console.error('🚨 Service Worker 錯誤:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Service Worker 未處理的 Promise 拒絕:', event.reason);
  event.preventDefault();
});

// 定期清理緩存 (每小時)
setInterval(() => {
  cleanupCache(DYNAMIC_CACHE);
}, 60 * 60 * 1000);

console.log('🚀 Service Worker v4-stable 已載入，Android 優化啟用');