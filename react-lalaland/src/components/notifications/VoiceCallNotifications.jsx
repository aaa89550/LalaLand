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

  // 組件初始化日誌
  console.log('🚀 VoiceCallNotifications 組件初始化:', {
    hasUser: !!user,
    userUid: user?.uid,
    userName: user?.nickname
  })

  useEffect(() => {
    if (!user?.uid) {
      console.log('⚠️ 用戶未登錄，無法監聽來電')
      return
    }

    console.log('🔔 開始監聽語音通話通知:', user.uid)
    console.log('🌿 當前狀態 - showIncomingCall:', showIncomingCall, 'incomingCall:', !!incomingCall)
    console.log('🔗 Firebase 數據庫實例:', !!database)

    // 監聽語音通話邀請
    const voiceCallsRef = ref(database, `voiceCalls`)
    console.log('📡 創建 Firebase 監聽器，路徑: voiceCalls')
    
    const unsubscribe = onValue(voiceCallsRef, (snapshot) => {
      console.log('📡 Firebase 監聽回調觸發 - 用戶:', user.uid)
      
      if (snapshot.exists()) {
        const calls = snapshot.val()
        console.log('📞 所有通話記錄:', calls)
        console.log('📞 檢查發給我的通話:', Object.keys(calls).filter(callId => {
          const call = calls[callId]
          return call.to === user.uid
        }))
        
        // 查找發給當前用戶的通話邀請
        Object.entries(calls).forEach(([callId, callData]) => {
          console.log(`🔍 檢查通話 ${callId}:`, {
            to: callData.to,
            currentUser: user.uid,
            status: callData.status,
            from: callData.from,
            isForMe: callData.to === user.uid,
            isCalling: callData.status === 'calling',
            notFromMe: callData.from !== user.uid
          })
          
          if (
            callData.to === user.uid && 
            callData.status === 'calling' &&
            callData.from !== user.uid
          ) {
            console.log('✅ 正在處理來電:', callData)
            
            // 顯示來電界面
            const callInfo = {
              ...callData,
              callId,
              notificationId: callId
            }
            
            console.log('📦 設定來電狀態:', callInfo)
            setIncomingCall(callInfo)
            setShowIncomingCall(true)
            
            // 播放提示音（如果瀏覽器支援）
            playCallRingtone()
            
            // 顯示瀏覽器通知
            showBrowserNotification(callData)
            
            // 標記通話為已見
            markCallAsReceived(callId)
          }
        })
      } else {
        console.log('📞 無通話記錄')
      }
    })

    // 測試監聽是否正常
    setTimeout(() => {
      console.log('🧪 5秒後測試監聽狀態:', {
        用戶: user.uid,
        監聽器: !!unsubscribe,
        數據庫: !!database
      })
    }, 5000)

    return () => {
      console.log('🔕 停止監聽語音通話通知 - 用戶:', user.uid)
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

  // 調試日誌
  console.log('📺 VoiceCallNotifications 渲染狀態:', {
    showIncomingCall,
    hasIncomingCall: !!incomingCall,
    incomingCallDetails: incomingCall ? {
      fromName: incomingCall.fromName,
      callId: incomingCall.callId
    } : null
  })

  // 開發環境添加測試函數
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    window.testIncomingCall = () => {
      console.log('🧪 測試來電界面')
      const testCall = {
        from: 'test-user',
        fromName: '測試用戶',
        fromAvatar: null,
        callId: 'test-call-' + Date.now(),
        notificationId: 'test-notification'
      }
      setIncomingCall(testCall)
      setShowIncomingCall(true)
    }
  }

  return (
    <>
      {/* 來電通知界面 */}
      {showIncomingCall && incomingCall ? (
        <div className="fixed inset-0 z-[9999]">
          <VoiceCall
            isVisible={true}
            onClose={handleRejectCall}
            recipientName={incomingCall.fromName || '未知用戶'}
            recipientId={incomingCall.from}
            isIncoming={true}
            onAnswer={handleAnswerCall}
            onReject={handleRejectCall}
          />
        </div>
      ) : (
        <div className="hidden">
          {/* Debug: 無來電 */}
          {console.log('🚫 無來電顯示')}
        </div>
      )}
    </>
  )
}

export default VoiceCallNotifications