import React, { useEffect, useState } from 'react'
import { ref, onValue, remove, push, query, orderByChild, equalTo } from 'firebase/database'
import { database } from '../../config/firebase'
import { useAuthStore } from '../../store/authStore'
import VoiceCall from '../chat/VoiceCall'
import toast from 'react-hot-toast'

const VoiceCallNotifications = () => {
  const { user } = useAuthStore()
  const [incomingCall, setIncomingCall] = useState(null)
  const [showIncomingCall, setShowIncomingCall] = useState(false)

  useEffect(() => {
    if (!user?.uid) return

    console.log('🔔 開始監聽語音通話通知:', user.uid)

    // 監聽通知
    const notificationsRef = ref(database, `notifications/${user.uid}`)
    
    const unsubscribe = onValue(notificationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const notifications = snapshot.val()
        
        // 查找未讀的來電通知
        Object.entries(notifications).forEach(([notificationId, notification]) => {
          if (
            notification.type === 'incoming_call' && 
            !notification.read &&
            notification.from !== user.uid
          ) {
            console.log('📞 收到來電通知:', notification)
            
            // 顯示來電界面
            setIncomingCall({
              ...notification,
              notificationId,
              callId: notification.id
            })
            setShowIncomingCall(true)
            
            // 播放提示音（如果瀏覽器支援）
            playCallRingtone()
            
            // 顯示瀏覽器通知
            showBrowserNotification(notification)
            
            // 標記為已讀
            markNotificationAsRead(notificationId)
          }
        })
      }
    })

    return () => {
      console.log('🔕 停止監聽語音通話通知')
      unsubscribe()
    }
  }, [user?.uid])

  // 播放來電鈴聲
  const playCallRingtone = () => {
    try {
      // 創建簡單的提示音
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.5)
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 1)
    } catch (error) {
      console.log('無法播放鈴聲:', error)
    }
  }

  // 顯示瀏覽器通知
  const showBrowserNotification = (callData) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`來自 ${callData.fromName} 的語音通話`, {
        body: '點擊接聽通話',
        icon: callData.fromAvatar || '/icon-512.png',
        tag: 'voice-call',
        requireInteraction: true
      })
    } else if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showBrowserNotification(callData)
        }
      })
    }
  }

  // 標記通知為已讀
  const markNotificationAsRead = async (notificationId) => {
    try {
      const notificationRef = ref(database, `notifications/${user.uid}/${notificationId}`)
      await remove(notificationRef)
      console.log('📋 通知已清除:', notificationId)
    } catch (error) {
      console.error('清除通知失敗:', error)
    }
  }

  // 拒接通話
  const handleRejectCall = async () => {
    if (incomingCall) {
      try {
        // 發送拒接通知給對方
        const rejectNotificationRef = ref(database, `notifications/${incomingCall.from}`)
        await push(rejectNotificationRef, {
          type: 'call_rejected',
          from: user.uid,
          fromName: user.nickname || user.displayName || '匿名用戶',
          originalCallId: incomingCall.callId,
          timestamp: Date.now(),
          read: false
        })
        
        toast.info(`已拒接 ${incomingCall.fromName} 的通話`)
      } catch (error) {
        console.error('發送拒接通知失敗:', error)
      }
    }
    
    setShowIncomingCall(false)
    setIncomingCall(null)
  }

  // 接聽通話
  const handleAnswerCall = async () => {
    if (incomingCall) {
      try {
        // 發送接聽通知給對方
        const answerNotificationRef = ref(database, `notifications/${incomingCall.from}`)
        await push(answerNotificationRef, {
          type: 'call_answered',
          from: user.uid,
          fromName: user.nickname || user.displayName || '匿名用戶',
          originalCallId: incomingCall.callId,
          timestamp: Date.now(),
          read: false
        })
        
        toast.success(`正在與 ${incomingCall.fromName} 建立通話...`)
      } catch (error) {
        console.error('發送接聽通知失敗:', error)
      }
    }
  }

  return (
    <>
      {/* 來電通知界面 */}
      {showIncomingCall && incomingCall && (
        <VoiceCall
          isVisible={showIncomingCall}
          onClose={handleRejectCall}
          recipientName={incomingCall.fromName}
          recipientId={incomingCall.from}
          isIncoming={true}
          onAnswer={handleAnswerCall}
          onReject={handleRejectCall}
        />
      )}
    </>
  )
}

export default VoiceCallNotifications