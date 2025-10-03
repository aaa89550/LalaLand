// NotificationSystem.jsx
import React, { useEffect, useState } from 'react';

// 臨時使用測試用的 VAPID 公鑰，實際部署時需要替換
const VAPID_PUBLIC_KEY = process.env.REACT_APP_VAPID_PUBLIC_KEY || 'BMqVJWe1KqP8Rd3hNwT4Fg7D6Y8zV9VcX1p2e1f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const b64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(b64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; ++i) arr[i] = raw.charCodeAt(i);
  return arr;
}

export default function NotificationSystem() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [permission, setPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );

  useEffect(() => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;
    navigator.serviceWorker.register('/sw.js'); // 確保 /sw.js 存在且可被抓到
  }, []);

  const enable = async () => {
    try {
      if (!('Notification' in window)) {
        alert('此瀏覽器不支援通知');
        return;
      }
      
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        alert('通知/推播需要 HTTPS');
        return;
      }

      // 1) 要在使用者手勢中請求權限
      const perm = await Notification.requestPermission();
      setPermission(perm);
      if (perm !== 'granted') {
        alert('需要通知權限才能啟用推播通知');
        return;
      }

      // 2) 訂閱 Push
      const reg = await navigator.serviceWorker.ready;
      
      // 檢查是否已有訂閱
      const existingSub = await reg.pushManager.getSubscription();
      if (existingSub) {
        setIsEnabled(true);
        console.log('已存在推播訂閱');
        return;
      }
      
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });

      // 3) 傳到後端儲存（如果有後端服務的話）
      try {
        await fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sub),
        });
        console.log('推播訂閱已保存到後端');
      } catch (error) {
        console.warn('無法保存訂閱到後端，但本地推播仍然啟用:', error);
      }

      setIsEnabled(true);
      console.log('推播通知已啟用');
    } catch (error) {
      console.error('啟用推播失敗:', error);
      alert('啟用推播失敗，請稍後再試');
    }
  };

  const disable = async () => {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await fetch('/api/push/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(await sub.toJSON()),
      });
      await sub.unsubscribe();
    }
    setIsEnabled(false);
  };

  // 分頁在前景時的「即時站內提醒」(非推播) 可直接用 Notification 或 UI 紅點
  const testInPage = async () => {
    if (document.visibilityState === 'visible') {
      // 站內提示（自家 UI、Toast、聲音等）
      alert('站內通知：You have a new private message!');
    } else if (permission === 'granted') {
      // 分頁仍活著時的 Notification（非背景推播）
      new Notification('New Message', { body: 'You have a new private message!' });
    }
  };

  return (
    <div>
      {isEnabled ? (
        <button onClick={disable}>停用推播</button>
      ) : (
        <button onClick={enable}>啟用推播</button>
      )}
      <button onClick={testInPage}>測試站內提醒/通知</button>
    </div>
  );
}
