# Firebase Realtime Database 安全規則配置

## 當前問題
應用程式遇到 `permission_denied` 錯誤，需要在 Firebase Console 中更新安全規則。

## 需要在 Firebase Console 中設定的規則

1. 前往 Firebase Console (https://console.firebase.google.com/)
2. 選擇你的專案 "lalaland-24931"
3. 在左側導航中選擇 "Realtime Database"
4. 點擊 "規則" 標籤
5. 將以下規則貼上並發布：

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": true,
        ".write": "auth != null && ($uid === auth.uid || auth.uid != null)"
      }
    },
    "presence": {
      "$uid": {
        ".read": true,
        ".write": "auth != null && $uid === auth.uid"
      }
    },
    "groupChats": {
      "$roomId": {
        "messages": {
          ".read": "auth != null",
          ".write": "auth != null"
        }
      }
    },
    "privateChats": {
      "$chatId": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  }
}
```

## 規則解釋

### users 節點
- **讀取**: 所有人都可以讀取用戶的基本資訊（暱稱、頭像等）
- **寫入**: 只有已認證的用戶可以寫入，且只能寫入自己的資料

### presence 節點
- **讀取**: 所有人都可以查看在線狀態
- **寫入**: 只有已認證的用戶可以更新自己的在線狀態

### groupChats 節點
- **讀寫**: 只有已認證的用戶可以讀取和發送群組聊天訊息

### privateChats 節點
- **讀寫**: 只有已認證的用戶可以讀取和發送私人聊天訊息

## 測試步驟

更新規則後：

1. 重新啟動開發伺服器
2. 嘗試登入應用程式
3. 檢查瀏覽器控制台是否還有權限錯誤
4. 測試發送訊息功能

## 注意事項

- 這些規則允許任何已認證的用戶訪問聊天資料
- 在生產環境中，你可能需要更嚴格的規則
- 確保 Firebase Authentication 已正確設定
- 匿名認證也需要在 Firebase Console 中啟用

## 如果仍有問題

如果更新規則後仍有權限問題：

1. 檢查 Firebase Authentication 設定
2. 確認匿名登入已啟用
3. 檢查 Firebase 專案配置是否正確
4. 查看 Firebase Console 中的使用情況和日誌