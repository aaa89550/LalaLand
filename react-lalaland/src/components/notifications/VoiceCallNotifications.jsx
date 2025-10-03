import React, { useEffect, useState } from 'react'
import { ref, onValue, remove, push, set, query, orderByChild, equalTo } from 'firebase/database'
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

    // 監聽語音通話邀請
    const voiceCallsRef = ref(database, `voiceCalls`)
    
    const unsubscribe = onValue(voiceCallsRef, (snapshot) => {
      if (snapshot.exists()) {
        const calls = snapshot.val()
        
        // 查找發給當前用戶的通話邀請
        Object.entries(calls).forEach(([callId, callData]) => {
          if (
            callData.to === user.uid && 
            callData.status === 'calling' &&
            callData.from !== user.uid
          ) {
            console.log('📞 收到來電通知:', callData)
            
            // 顯示來電界面
            setIncomingCall({
              ...callData,
              callId,
              notificationId: callId
            })
            setShowIncomingCall(true)
            
            // 播放提示音（如果瀏覽器支援）
            playCallRingtone()
            
            // 顯示瀏覽器通知
            showBrowserNotification(callData)
            
            // 標記通話為已見
            markCallAsReceived(callId)
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

  // 標記通話為已接收
  const markCallAsReceived = async (callId) => {
    try {
      const callRef = ref(database, `voiceCalls/${callId}/status`)
      await set(callRef, 'ringing')
      console.log('📋 通話狀態已更新為響鈴:', callId)
    } catch (error) {
      console.error('更新通話狀態失敗:', error)
    }
  }

  // 拒接通話
  const handleRejectCall = async () => {
    if (incomingCall) {
      try {
        // 更新通話狀態為已拒接
        const callRef = ref(database, `voiceCalls/${incomingCall.callId}/status`)
        await set(callRef, 'rejected')
        
        toast.info(`已拒接 ${incomingCall.fromName} 的通話`)
        console.log('📞 通話已拒接:', incomingCall.callId)
      } catch (error) {
        console.error('更新拒接狀態失敗:', error)
      }
    }
    
    setShowIncomingCall(false)
    setIncomingCall(null)
  }

  // 接聽通話
  const handleAnswerCall = async () => {
    if (incomingCall) {
      try {
        // 更新通話狀態為已接聽
        const callRef = ref(database, `voiceCalls/${incomingCall.callId}/status`)
        await set(callRef, 'answered')
        
        toast.success(`正在與 ${incomingCall.fromName} 建立通話...`)
        console.log('📞 通話已接聽:', incomingCall.callId)
      } catch (error) {
        console.error('更新接聽狀態失敗:', error)
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