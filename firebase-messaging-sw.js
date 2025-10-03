// firebase-messaging-sw.js - FCM Service Worker
// 這個檔案必須放在網站根目錄 (public 資料夾)

// 匯入 Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",
  authDomain: "lalaland-24931.firebaseapp.com",
  databaseURL: "https://lalaland-24931-default-rtdb.firebaseio.com",
  projectId: "lalaland-24931",
  storageBucket: "lalaland-24931.firebasestorage.app",
  messagingSenderId: "45134876312",
  appId: "1:45134876312:web:9e33e46c54cb7c9bfc8aed",
  measurementId: "G-M04NRCY9FQ"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 取得 messaging 服務
const messaging = firebase.messaging();

// 處理背景推播訊息
messaging.onBackgroundMessage((payload) => {
  console.log('🔔 FCM 背景訊息:', payload);

  const notificationTitle = payload.notification?.title || '新訊息';
  const notificationOptions = {
    body: payload.notification?.body || '您有新的訊息',
    icon: '/icon-512.png',
    badge: '/icon-512.png',
    tag: 'lalaland-fcm',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: '查看',
        icon: '/icon-512.png'
      },
      {
        action: 'close',
        title: '關閉',
        icon: '/icon-512.png'
      }
    ],
    data: payload.data || {}
  };

  // 顯示通知
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 處理通知點擊事件
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 FCM 通知被點擊:', event);
  
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    // 開啟或聚焦到應用程式
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // 尋找已開啟的分頁
          for (const client of clientList) {
            if (client.url.includes('lalaland') && 'focus' in client) {
              return client.focus();
            }
          }
          // 如果沒有開啟的分頁，開啟新的
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
    );
  }
  // 如果是 'close' 動作，不做任何事（通知已經關閉）
});