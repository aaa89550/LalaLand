// fcmService.js - FCM 推播服務 (後端 Cloud Functions)
const functions = require('firebase-functions');
const admin = require('firebase-admin');



// 初始化 Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.database();
const messaging = admin.messaging();

// 發送私訊推播通知
exports.sendPrivateMessageNotification = functions.database
  .ref('/privateChats/{chatId}/messages/{messageId}')
  .onCreate(async (snapshot, context) => {
    try {
      const message = snapshot.val();
      const { chatId } = context.params;
      
      console.log('🔔 新私訊訊息:', { chatId, message });

      // 解析聊天室 ID 取得參與者
      const [user1Id, user2Id] = chatId.split('_');
      const senderId = message.from || message.userId;
      const recipientId = senderId === user1Id ? user2Id : user1Id;

      console.log('📤 發送者:', senderId, '接收者:', recipientId);

      // 取得接收者的 FCM Token
      const tokenSnapshot = await db.ref(`fcmTokens/${recipientId}`).once('value');
      const tokenData = tokenSnapshot.val();

      if (!tokenData || !tokenData.token) {
        console.log('❌ 接收者沒有 FCM Token:', recipientId);
        return null;
      }

      // 取得發送者資訊
      const senderSnapshot = await db.ref(`users/${senderId}`).once('value');
      const senderData = senderSnapshot.val();
      const senderName = senderData?.nickname || '匿名用戶';

      // 構建推播訊息
      const notificationPayload = {
        notification: {
          title: `💬 ${senderName}`,
          body: message.text.length > 50 ? 
                message.text.substring(0, 50) + '...' : 
                message.text,
          icon: '/icon-512.png'
        },
        data: {
          type: 'private_message',
          senderId: senderId,
          senderName: senderName,
          chatId: chatId,
          messageId: context.params.messageId,
          click_action: `https://lalaland-24931.web.app/?chat=${chatId}`
        },
        token: tokenData.token
      };

      // 發送推播
      const response = await messaging.send(notificationPayload);
      console.log('✅ FCM 推播發送成功:', response);

      return response;
    } catch (error) {
      console.error('❌ FCM 推播發送失敗:', error);
      return null;
    }
  });

// 發送群組訊息推播通知
exports.sendGroupMessageNotification = functions.database
  .ref('/messages/{messageId}')
  .onCreate(async (snapshot, context) => {
    try {
      const message = snapshot.val();
      console.log('🔔 新群組訊息:', message);

      // 取得所有在線用戶的 FCM Token
      const tokensSnapshot = await db.ref('fcmTokens').once('value');
      const allTokens = tokensSnapshot.val() || {};

      // 排除發送者
      const senderId = message.from || message.userId;
      const recipientTokens = [];

      Object.entries(allTokens).forEach(([userId, tokenData]) => {
        if (userId !== senderId && tokenData.token) {
          recipientTokens.push(tokenData.token);
        }
      });

      if (recipientTokens.length === 0) {
        console.log('❌ 沒有接收者的 FCM Token');
        return null;
      }

      // 取得發送者資訊
      const senderSnapshot = await db.ref(`users/${senderId}`).once('value');
      const senderData = senderSnapshot.val();
      const senderName = senderData?.nickname || '匿名用戶';

      // 取得房間名稱
      const roomName = message.room || '聊天室';

      // 構建推播訊息
      const notificationPayload = {
        notification: {
          title: `🏠 ${roomName} - ${senderName}`,
          body: message.text.length > 50 ? 
                message.text.substring(0, 50) + '...' : 
                message.text,
          icon: '/icon-512.png'
        },
        data: {
          type: 'group_message',
          senderId: senderId,
          senderName: senderName,
          room: roomName,
          messageId: context.params.messageId,
          click_action: 'https://lalaland-24931.web.app/'
        }
      };

      // 批量發送推播
      const multicastMessage = {
        ...notificationPayload,
        tokens: recipientTokens
      };

      const response = await messaging.sendEachForMulticast(multicastMessage);
      console.log('✅ 群組 FCM 推播發送成功:', `${response.successCount}/${recipientTokens.length}`);

      return response;
    } catch (error) {
      console.error('❌ 群組 FCM 推播發送失敗:', error);
      return null;
    }
  });

// 清理過期的 FCM Token
exports.cleanupExpiredTokens = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async (context) => {
    try {
      console.log('🧹 開始清理過期 FCM Token');
      
      const tokensSnapshot = await db.ref('fcmTokens').once('value');
      const allTokens = tokensSnapshot.val() || {};
      
      const expiredThreshold = Date.now() - (30 * 24 * 60 * 60 * 1000); // 30天前
      let cleanedCount = 0;

      for (const [userId, tokenData] of Object.entries(allTokens)) {
        if (tokenData.timestamp < expiredThreshold) {
          await db.ref(`fcmTokens/${userId}`).remove();
          cleanedCount++;
        }
      }

      console.log(`✅ 清理完成，刪除了 ${cleanedCount} 個過期 Token`);
      return cleanedCount;
    } catch (error) {
      console.error('❌ 清理 FCM Token 失敗:', error);
      return 0;
    }
  });

  