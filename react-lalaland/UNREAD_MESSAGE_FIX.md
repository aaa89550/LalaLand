# 未讀訊息系統修復

## 問題描述

1. **紅點在點開訊息後才出現** - 原本的邏輯錯誤，導致未讀計數異常顯示
2. **點開後不會消失** - 標記已讀的邏輯有問題，沒有正確清除未讀狀態
3. **數據結構不一致** - 原本的數據結構設計有問題，導致邏輯混亂

## 修復內容

### 1. 重新設計數據結構

**原本結構（有問題）:**
```
privateChats/
  userId/
    chatPartnerId/
      unreadCount: number
```

**新結構（已修復）:**
```
userUnreadCounts/
  userId/
    chatPartnerId: number

userLastRead/
  userId/
    chatPartnerId/
      timestamp: number
```

### 2. 修復 `useUnreadMessages.js` Hook

- **監聽路徑**: 改為監聽 `userUnreadCounts/${user.uid}`
- **數據處理**: 統一使用 `chatPartnerId` 作為鍵值
- **標記已讀**: 刪除未讀記錄而非設為 0
- **增加未讀**: 只在非當前聊天時才增加

### 3. 修復 `PrivateChat.jsx` 組件

- **修正參數**: `markAsRead(chat.recipientId)` 而非 `chat.id`
- **自動已讀**: 進入聊天時自動標記為已讀
- **正確顯示**: 使用 `chat.recipientId` 獲取未讀數量

### 4. 修復 `usePrivateChat.js` Hook

- **通知邏輯**: 檢查是否為當前聊天來決定是否顯示通知
- **未讀增加**: 只有非當前聊天才增加未讀數量
- **參數修正**: 使用正確的 `recipientId` 比較

## 修復後的邏輯流程

1. **收到新訊息時**:
   - 檢查是否為當前正在聊天的對象
   - 如果不是，增加未讀計數並顯示通知
   - 如果是，不增加未讀計數，也不顯示通知

2. **進入聊天時**:
   - 自動調用 `markAsRead(recipientId)` 標記為已讀
   - 刪除該對話的未讀記錄
   - 更新最後讀取時間

3. **顯示未讀徽章**:
   - 使用 `getUnreadCount(recipientId)` 獲取正確的未讀數量
   - 當數量為 0 時，徽章自動隱藏

## 測試情境

- ✅ 收到新訊息時顯示紅點
- ✅ 點開聊天後紅點消失
- ✅ 正在聊天時收到訊息不顯示紅點
- ✅ 切換到其他聊天時正確顯示各自的未讀數量
- ✅ 總未讀數量正確計算

## 注意事項

- 新的數據結構需要 Firebase 安全規則支援
- 舊有的未讀數據可能需要遷移
- 確保所有調用 `markAsRead` 和 `incrementUnread` 的地方都使用正確的參數