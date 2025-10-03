# FCM 推播通知部署指南

## 🎉 FCM 功能已實作完成！

### ✅ 已完成的功能

1. **前端 FCM 整合**
   - ✅ Firebase Messaging 設定
   - ✅ FCM Manager 管理類別
   - ✅ Service Worker 處理背景推播
   - ✅ 設定介面整合

2. **VAPID 金鑰設定**
   - ✅ 使用提供的金鑰：`6VcIS3LHfhdZSsTZc_dy9gJVdNOZaUnRMFOv7Ys0G0I`
   - ✅ 前端和 Service Worker 都已配置

3. **通知系統整合**
   - ✅ 與現有內部通知系統並存
   - ✅ 前景訊息處理
   - ✅ 背景推播處理
   - ✅ 用戶偏好設定

## 📱 如何使用

### 用戶端操作
1. 進入聊天室
2. 點擊設定 ⚙️ 按鈕
3. 開啟「推播通知 (FCM)」開關
4. 允許瀏覽器通知權限
5. 完成！現在即使關閉瀏覽器也能收到推播

### 通知類型
- 🔵 **內部通知泡泡**：頁面活躍時顯示
- 🔔 **桌面通知**：瀏覽器原生通知
- 🚀 **FCM 推播**：背景推播 (需啟用)

## 🛠️ 後端部署 (Cloud Functions)

### 1. 安裝 Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### 2. 初始化 Cloud Functions
```bash
cd react-lalaland
firebase init functions
```

### 3. 部署 FCM 服務
```bash
# 將 src/server/fcmService.js 複製到 functions/index.js
cp src/server/fcmService.js functions/index.js

# 安裝依賴
cd functions
npm install firebase-admin firebase-functions

# 部署
firebase deploy --only functions
```

### 4. 設定 Firebase 規則
需要更新 Realtime Database 規則以支援 FCM Token 儲存：

```json
{
  "rules": {
    "fcmTokens": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    // ... 其他現有規則
  }
}
```

## 🔧 技術細節

### FCM Token 管理
- Token 儲存在 `fcmTokens/{userId}` 節點
- 包含 token、時間戳和用戶代理資訊
- 自動清理 30 天過期的 token

### 推播觸發時機
- 🔄 **自動觸發**：收到新私訊或群組訊息時
- 📧 **即時推播**：透過 Cloud Functions 自動發送
- 🎯 **精準投遞**：只發送給相關接收者

### 瀏覽器相容性
- ✅ Chrome 50+
- ✅ Firefox 44+
- ✅ Safari 16+
- ✅ Edge 17+
- ❌ iOS Safari (限制較多)

## 🚦 部署狀態

### 前端 ✅ 已完成
- FCM Manager 實作完成
- Service Worker 已設置
- UI 整合完成
- VAPID 金鑰已配置

### 後端 ⚠️ 需要部署
- Cloud Functions 代碼已準備
- 需要部署到 Firebase
- 需要設定資料庫規則

## 🧪 測試方式

### 1. 本地測試
```bash
# 啟動開發伺服器
npm run dev

# 開啟 https://localhost:3000
# 啟用 FCM 推播通知
# 使用兩個不同帳號測試
```

### 2. 生產測試
- 部署到 HTTPS 環境 (GitHub Pages)
- 啟用 FCM 功能
- 測試跨設備推播

## 📊 監控和分析

### FCM 控制台
- 查看推播統計
- 監控送達率
- 分析用戶互動

### Firebase Analytics
- 追蹤通知開啟率
- 用戶參與度分析
- 效能監控

## 🔮 未來擴展

### 可能的改進
1. **推播排程**：定時推播功能
2. **主題訂閱**：群組推播管理
3. **豐富媒體**：圖片、動作按鈕
4. **A/B 測試**：推播內容優化
5. **深層連結**：直接跳轉到特定聊天

### 高級功能
- 推播模板管理
- 用戶偏好細分
- 智能推播頻率控制
- 多語言推播支援

---

🎯 **FCM 推播通知系統已準備就緒！**
只需要部署 Cloud Functions 就能開始使用真正的推播功能。