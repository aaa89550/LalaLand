# LalaLand React 版本

## 概述

這是 LalaLand 女同聊天室的全新 React + Tailwind CSS 版本，提供更現代化、簡約的使用體驗。

## 主要功能

### ✨ 核心功能
- **多聊天室系統**：閒聊區、找伴區、約炮區
- **私人訊息**：一對一私聊功能
- **好友系統**：添加好友並管理聯絡人
- **即時通訊**：基於 Firebase 的即時訊息同步
- **圖片分享**：支援圖片上傳和分享
- **投票功能**：群組投票和結果統計
- **在線狀態**：即時顯示用戶在線狀態

### 🔐 認證系統
- **註冊登入**：Email 和密碼註冊/登入
- **匿名模式**：無需註冊即可體驗聊天
- **用戶資料**：個人頭像和暱稱設定

### 🎨 使用者體驗
- **響應式設計**：完美支援手機和桌機
- **夜間模式**：深色主題切換
- **簡約介面**：使用 Tailwind CSS 的現代化設計
- **流暢動畫**：平滑的過場和互動效果

## 技術架構

### 前端技術棧
- **React 18**：最新的 React 框架
- **Vite**：快速的開發建置工具
- **Tailwind CSS**：功能優先的 CSS 框架
- **Zustand**：輕量級狀態管理
- **React Router**：路由管理
- **Lucide React**：現代化圖示庫

### 後端服務
- **Firebase Authentication**：用戶認證
- **Firebase Realtime Database**：即時資料同步
- **Firebase Storage**：圖片檔案儲存

### 開發工具
- **ESLint**：程式碼品質檢查
- **PostCSS**：CSS 後處理
- **React Hot Toast**：通知系統

## 專案結構

```
src/
├── components/          # React 組件
│   ├── chat/           # 聊天相關組件
│   │   ├── ChatArea.jsx
│   │   ├── GroupChat.jsx
│   │   ├── PrivateChat.jsx
│   │   ├── FriendsList.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── EmojiPicker.jsx
│   │   ├── VotePoll.jsx
│   │   ├── Sidebar.jsx
│   │   └── MobileHeader.jsx
│   └── SplashScreen.jsx
├── pages/              # 頁面組件
│   ├── Landing.jsx     # 首頁
│   ├── Login.jsx       # 登入頁
│   └── Chat.jsx        # 聊天頁
├── store/              # 狀態管理
│   ├── authStore.js    # 認證狀態
│   └── chatStore.js    # 聊天狀態
├── hooks/              # 自定義 Hooks
│   ├── useFirebaseChat.js
│   └── useOnlineUsers.js
├── services/           # API 服務
│   └── firebase.js
├── utils/              # 工具函數
│   └── imageUtils.js
├── config/             # 配置文件
│   └── firebase.js
├── App.jsx             # 主應用組件
├── main.jsx           # 應用入口
└── index.css          # 全域樣式
```

## 開發指南

### 環境要求
- Node.js 16+
- npm 或 yarn

### 安裝與運行

1. **安裝依賴**
   ```bash
   npm install
   ```

2. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

3. **建置正式版本**
   ```bash
   npm run build
   ```

4. **預覽建置結果**
   ```bash
   npm run preview
   ```

### 環境變數配置

Firebase 配置已內建在專案中，生產環境建議使用環境變數管理敏感資訊。

## 與原版對比

### 改進之處

1. **效能提升**
   - React 18 的並行渲染
   - 組件懶加載和代碼分割
   - 優化的重新渲染邏輯

2. **開發體驗**
   - TypeScript 支援（可選）
   - 熱重載開發
   - 組件化架構

3. **使用者體驗**
   - 更快的載入速度
   - 流暢的動畫效果
   - 一致的設計語言

4. **維護性**
   - 模組化組件結構
   - 清晰的狀態管理
   - 容易擴展的架構

### 功能對等

- ✅ 多聊天室切換
- ✅ 私訊和好友系統
- ✅ 圖片上傳分享
- ✅ 投票功能
- ✅ 在線狀態顯示
- ✅ 夜間模式
- ✅ 響應式設計
- ✅ PWA 支援（manifest.json）

## 部署

### Vercel 部署
```bash
npm i -g vercel
vercel --prod
```

### Netlify 部署
```bash
npm run build
# 將 dist/ 目錄上傳至 Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
npm run build
firebase init hosting
firebase deploy
```

## 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個專案！

## 授權

MIT License

---

**LalaLand React 版本** - 為女性 LGBTQ+ 社群打造的現代化聊天平台 💖