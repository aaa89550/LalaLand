// server/push.js
import webpush from 'web-push';
import express from 'express';

const app = express();
app.use(express.json());

webpush.setVapidDetails(
  'mailto:you@example.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// 你需要把訂閱存到資料庫
const subscriptions = new Set();

app.post('/api/push/subscribe', (req, res) => {
  subscriptions.add(req.body);
  res.sendStatus(201);
});

app.post('/api/push/unsubscribe', (req, res) => {
  // 依實作從 DB 移除
  res.sendStatus(200);
});

// 當站內訊息來了（例如 WebSocket/DB 事件回呼），就呼叫這個來推播：
async function notifyAll(payload) {
  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(sub, JSON.stringify(payload));
    } catch (e) {
      // 失效就從 DB 移除
    }
  }
}

// 範例：手動測試
app.post('/api/push/test', async (req, res) => {
  await notifyAll({ title: 'New Message', body: 'You have a new private message!', url: '/inbox' });
  res.sendStatus(200);
});

app.listen(3000);
