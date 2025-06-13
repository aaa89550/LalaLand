# 女同志聊天室 (Lesbian Chat Room)

本聊天室是一個即時線上聊天室，供女同志朋友們匿名交流、聊天。使用 [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) 來實現訊息的即時同步。

## 功能簡介

- 匿名聊天室，輸入暱稱即可發言。
- 無需註冊或登入。
- 支援訊息即時推播與顯示。
- 最多顯示最近 50 則訊息。
- 訊息自動顯示時間戳記。

## 專案架構與技術

- 前端：HTML + CSS + 原生 JavaScript (ES Module)
- 資料庫：Firebase Realtime Database

## 如何運作

1. 使用者輸入暱稱與訊息，按下「送出」。
2. 訊息以 `{ user, message, timestamp }` 的格式推送到 Firebase 資料庫的 `messages` 路徑。
3. 前端監聽 `messages` 路徑，當有新訊息時自動顯示於聊天室視窗中。

## 前端原始碼簡要說明

```html
<!-- Firebase SDK 以 module 方式引入，初始化 Config 請自行替換 -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase, ref, push, onChildAdded, query, limitToLast } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  const firebaseConfig = { ... };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // 傳送訊息
  window.sendMessage = function() {
    // ...略
    push(ref(db, "messages"), { user, message: msg, timestamp: Date.now() });
  }

  // 接收訊息
  const messagesQuery = query(ref(db, "messages"), limitToLast(50));
  onChildAdded(messagesQuery, (snapshot) => {
    // ...略
  });
</script>