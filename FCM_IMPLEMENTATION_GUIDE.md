# Firebase Cloud Messaging (FCM) 實作方案

## FCM 概述
Firebase Cloud Messaging (FCM) 是 Google 提供的免費跨平台消息傳遞解決方案，可以可靠地向 iOS、Android 和網頁應用傳送訊息。

## 在現有 React 應用中實作 FCM

### 1. 安裝必要套件
```bash
# FCM 已包含在 firebase 套件中，無需額外安裝
npm install firebase
```

### 2. FCM 設定步驟

#### A. Firebase 控制台設定
1. 在 Firebase Console 中啟用 Cloud Messaging
2. 生成 Web Push 憑證 (VAPID Key)
3. 設定網域授權

#### B. Service Worker 設定
需要註冊專門處理 FCM 訊息的 Service Worker：

```javascript
// firebase-messaging-sw.js (必須放在 public 目錄)
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
  // 您的 Firebase 設定
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
```

#### C. 前端實作
```javascript
// messaging.js
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { app } from './firebase-config';

const messaging = getMessaging(app);

// 請求通知權限並取得 FCM Token
export const requestFCMPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'YOUR_VAPID_KEY'
    });
    
    if (token) {
      console.log('FCM Token:', token);
      // 將 token 傳送到後端儲存
      return token;
    } else {
      console.log('無法取得 FCM Token');
    }
  } catch (error) {
    console.error('取得 FCM Token 失敗:', error);
  }
};

// 處理前景訊息
export const setupFCMForegroundListener = () => {
  onMessage(messaging, (payload) => {
    console.log('收到前景訊息:', payload);
    
    // 顯示自訂通知
    if (window.showNotification) {
      window.showNotification(
        payload.notification.title, 
        'info',
        5000
      );
    }
  });
};
```

### 3. 後端整合 (Node.js)

```javascript
// server/fcm-admin.js
const admin = require('firebase-admin');

// 初始化 Firebase Admin SDK
const serviceAccount = require('./path/to/service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 發送通知函數
const sendFCMNotification = async (tokens, title, body, data = {}) => {
  const message = {
    notification: {
      title,
      body
    },
    data,
    tokens: Array.isArray(tokens) ? tokens : [tokens]
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log('FCM 發送成功:', response.successCount);
    return response;
  } catch (error) {
    console.error('FCM 發送失敗:', error);
  }
};

module.exports = { sendFCMNotification };
```

## 優勢與限制

### ✅ 優勢
1. **跨平台支援**: 支援 Web、iOS、Android
2. **可靠性**: Google 基礎設施，高可用性
3. **免費**: 基本功能完全免費
4. **豐富功能**: 支援主題訂閱、用戶群組、排程發送
5. **Analytics**: 內建發送統計和追蹤

### ⚠️ 限制
1. **HTTPS 需求**: Web 推送需要 HTTPS 環境
2. **瀏覽器支援**: 某些舊版瀏覽器不支援
3. **用戶權限**: 需要用戶手動授予通知權限
4. **Service Worker**: 必須正確實作 Service Worker

## 實作建議

### 漸進式實作
1. **第一階段**: 先完善內部通知系統
2. **第二階段**: 加入 FCM 作為補充功能
3. **第三階段**: 根據使用情況優化

### 最佳實踐
1. **權限請求**: 在適當時機請求通知權限
2. **Token 管理**: 定期更新和同步 FCM Token
3. **錯誤處理**: 優雅處理網路和權限錯誤
4. **降級策略**: FCM 失敗時回退到內部通知

## 與現有系統整合方案

```javascript
// 整合到現有的 notificationManager.js
class NotificationManager {
  constructor() {
    this.fcmToken = null;
    this.fcmSupported = 'serviceWorker' in navigator && 'PushManager' in window;
  }

  async initFCM() {
    if (this.fcmSupported) {
      try {
        this.fcmToken = await requestFCMPermission();
        setupFCMForegroundListener();
        return true;
      } catch (error) {
        console.error('FCM 初始化失敗:', error);
        return false;
      }
    }
    return false;
  }

  showNotification(title, body, type = 'info') {
    // 優先使用內部通知
    if (window.showNotification) {
      window.showNotification(`${title}: ${body}`, type);
    }
    
    // 如果頁面非活躍狀態，使用桌面通知
    if (document.hidden && this.hasPermission) {
      new Notification(title, { body });
    }
  }
}
```

## 結論
FCM 是一個強大的推送通知解決方案，但需要額外的設定和後端支援。建議：

1. **現階段**: 先完善內部通知系統和紅點提示
2. **後續**: 如有需要再加入 FCM 功能
3. **混合方案**: FCM + 內部通知，提供最佳用戶體驗