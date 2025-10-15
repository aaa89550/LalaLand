# LOGO 更新快取清除指南

## 問題描述
當更換了 `icon-512.png` 文件後，瀏覽器可能仍然顯示舊的 LOGO，這是因為瀏覽器快取和 Service Worker 快取的影響。

## 已執行的解決方案

### 1. 添加版本號參數
已在以下文件中添加 `?v=2` 參數來強制瀏覽器重新載入圖片：

- `src/components/SplashScreen.jsx` - 開場動畫 LOGO
- `src/pages/Landing.jsx` - 首頁 LOGO (兩處)
- `src/pages/Login.jsx` - 登入頁面 LOGO

### 2. 更新 Service Worker 快取版本
已更新快取名稱：

- `public/sw.js`: `lalaland-v1` → `lalaland-v2-logo-update`
- `sw.js`: `lalaland-v6-fcm-fix` → `lalaland-v7-logo-update`

## 額外的清除快取方法

### 在瀏覽器中手動清除快取：

1. **Chrome/Edge:**
   - 按 `F12` 打開開發者工具
   - 右鍵點擊重新整理按鈕，選擇「強制重新整理」
   - 或按 `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

2. **清除應用程式快取:**
   - 開發者工具中，到 Application 標籤
   - 在 Storage 區域，點擊「Clear storage」
   - 勾選所有選項，點擊「Clear site data」

3. **手動註銷 Service Worker:**
   - 在 Application 標籤的 Service Workers 區域
   - 點擊「Unregister」來移除舊的 Service Worker

### 在開發環境中：

1. **停用快取:**
   ```bash
   # 在瀏覽器開發者工具中的 Network 標籤
   # 勾選 "Disable cache" 選項
   ```

2. **使用無痕模式測試:**
   ```bash
   # 在無痕視窗中訪問應用程式
   # 確保沒有快取影響
   ```

## 驗證更新是否成功

1. 訪問應用程式：http://localhost:3000
2. 檢查開場動畫中的 LOGO 是否已更新
3. 檢查首頁和登入頁面的 LOGO 是否已更新
4. 在開發者工具的 Network 標籤中，確認 `icon-512.png?v=2` 有被重新載入

## 未來 LOGO 更新時的建議

1. **更新版本號:**
   ```jsx
   // 將 ?v=2 改為 ?v=3, ?v=4 等等
   src="/icon-512.png?v=3"
   ```

2. **或使用時間戳:**
   ```jsx
   // 使用當前時間戳
   src={`/icon-512.png?t=${Date.now()}`}
   ```

3. **同時更新 Service Worker:**
   ```javascript
   // 更新快取名稱
   const CACHE_NAME = 'lalaland-v8-logo-update'
   ```

## 注意事項

- 版本號參數只影響瀏覽器請求，不會影響實際的文件名稱
- Service Worker 快取版本更新會自動清除舊快取
- 在生產環境中，建議使用構建工具自動生成版本號

---

**✅ LOGO 快取清除已完成！新的 LOGO 現在應該會正確顯示。**