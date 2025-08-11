# 私訊通知重複問題修復報告

## 問題描述
私訊通知會重複跳出，有時候已經已讀過了，下次登入還是會跳通知。

## 問題原因分析

1. **缺乏持久化的已讀狀態記錄**
   - `privateChatNotificationStates` 只是記憶體中的變數
   - 重新登入後會重置，導致已讀訊息再次觸發通知

2. **多重通知監聽器**
   - `checkForNewPrivateMessages()` 和 `startGlobalPrivateMessageMonitoring()` 都會監聽私訊
   - 可能造成重複觸發通知

3. **時間判斷過於寬鬆**
   - `checkForNewPrivateMessages()` 中使用 5 秒時間判斷是否為新訊息
   - 重新登入時，所有未讀訊息都會被認為是「新」訊息

## 修復方案

### 1. 新增已讀狀態管理系統

```javascript
// 新增變數記錄每個用戶的最後已讀訊息時間
let lastReadMessages = {}; // 記錄每個用戶的最後已讀訊息時間

// 記錄已讀狀態
function markMessagesAsRead(fromUid) {
  if (!currentUser?.uid || !fromUid) return;
  
  const now = Date.now();
  lastReadMessages[fromUid] = now;
  
  // 儲存到 localStorage 以持久化
  const readStateKey = `lastRead_${currentUser.uid}_${fromUid}`;
  localStorage.setItem(readStateKey, now.toString());
  
  console.log('📖 標記已讀:', { fromUid, timestamp: now });
}

// 檢查訊息是否已讀
function isMessageRead(fromUid, messageTime) {
  if (!currentUser?.uid || !fromUid || !messageTime) return false;
  
  // 先檢查記憶體中的狀態
  if (lastReadMessages[fromUid] && messageTime <= lastReadMessages[fromUid]) {
    return true;
  }
  
  // 檢查 localStorage
  const readStateKey = `lastRead_${currentUser.uid}_${fromUid}`;
  const lastReadTime = localStorage.getItem(readStateKey);
  
  if (lastReadTime) {
    const lastRead = parseInt(lastReadTime, 10);
    lastReadMessages[fromUid] = lastRead; // 同步到記憶體
    return messageTime <= lastRead;
  }
  
  return false;
}

// 載入已讀狀態
function loadReadStates() {
  if (!currentUser?.uid) return;
  
  lastReadMessages = {};
  
  // 從 localStorage 載入所有已讀狀態
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`lastRead_${currentUser.uid}_`)) {
      const fromUid = key.replace(`lastRead_${currentUser.uid}_`, '');
      const timestamp = localStorage.getItem(key);
      if (timestamp) {
        lastReadMessages[fromUid] = parseInt(timestamp, 10);
      }
    }
  }
  
  console.log('📚 載入已讀狀態:', lastReadMessages);
}
```

### 2. 修改通知檢查邏輯

在 `setupPrivateChatListener` 函數中加入已讀檢查：

```javascript
if (messageData.from !== currentUser.uid && 
    messageData.to === currentUser.uid && 
    !isInCurrentPrivateChat &&
    !isMessageRead(messageData.from, messageData.time)) { // 加入已讀檢查
```

### 3. 修改打開私訊時的處理

在 `openPrivateChat` 函數中自動標記為已讀：

```javascript
// 記錄已讀狀態
markMessagesAsRead(uid);
```

### 4. 移除重複的監聽器

簡化 `checkForNewPrivateMessages` 函數，避免重複監聽：

```javascript
function checkForNewPrivateMessages() {
    const user = auth.currentUser;
    if (!user) return;
    
    console.log('🔍 檢查新私訊 - 跳過，使用統一的全域監聽器');
    // 移除重複的監聽邏輯，只使用 startGlobalPrivateMessageMonitoring 的統一監聽器
}
```

### 5. 在登入時載入已讀狀態

在 `onAuthStateChanged` 中加入：

```javascript
// 啟動私訊通知監聽（只在 chat.html 頁面）
if (document.getElementById('main') && document.getElementById('chat')) {
  // 載入已讀狀態
  loadReadStates();
  startGlobalPrivateMessageMonitoring();
}
```

### 6. 視覺改進：未讀指示器

修改 `addPrivateChatToList` 函數，在私訊列表中顯示未讀狀態：

```javascript
// 檢查是否有未讀訊息
const hasUnread = chat.lastTime && !isMessageRead(chat.otherUserId, chat.lastTime);
const unreadIndicator = hasUnread ? '<div class="unread-indicator" style="width: 10px; height: 10px; background: var(--accent-coral); border-radius: 50%; margin-left: 8px;"></div>' : '';

// 根據未讀狀態調整樣式
background: ${hasUnread ? '#fff5f5' : '#f8f9fa'};
border-left: ${hasUnread ? '4px solid var(--accent-coral)' : 'none'};
font-weight: ${hasUnread ? '700' : '600'};
```

## 測試方法

1. 開啟 `test-notification-fix.html` 檢驗基本功能
2. 在聊天應用中進行以下測試：
   - 接收私訊後查看通知
   - 打開私訊對話
   - 重新登入
   - 確認已讀訊息不再跳出通知

## 修復效果

- ✅ 解決已讀訊息重複通知問題
- ✅ 提供持久化的已讀狀態記錄
- ✅ 移除重複的監聽器，提升效能
- ✅ 在私訊列表中顯示未讀指示器
- ✅ 改善用戶體驗

## 檔案修改清單

- `main.js` - 主要修復邏輯
- `test-notification-fix.html` - 新增測試頁面
- `NOTIFICATION_FIX_REPORT.md` - 此修復報告
