import React, { useState, useEffect, useRef } from 'react'
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'
import toast from 'react-hot-toast'

const VoiceCall = ({ 
  isVisible, 
  onClose, 
  recipientName, 
  recipientId,
  isIncoming = false,
  onAnswer = null,
  onReject = null
}) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isCallConnected, setIsCallConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)
  const [callDuration, setCallDuration] = useState(0)
  const [connectionState, setConnectionState] = useState('connecting') // connecting, connected, disconnected
  
  const localAudioRef = useRef(null)
  const remoteAudioRef = useRef(null)
  const peerConnectionRef = useRef(null)
  const localStreamRef = useRef(null)
  const callTimerRef = useRef(null)

  // WebRTC 配置
  const rtcConfiguration = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  }

  // 初始化 WebRTC 連接
  const initializeWebRTC = async () => {
    try {
      console.log('🔊 初始化語音通話...')
      
      // 獲取用戶麥克風權限
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      })
      
      localStreamRef.current = stream
      if (localAudioRef.current) {
        localAudioRef.current.srcObject = stream
      }

      // 創建 RTCPeerConnection
      peerConnectionRef.current = new RTCPeerConnection(rtcConfiguration)
      
      // 添加本地媒體流到連接
      stream.getTracks().forEach(track => {
        peerConnectionRef.current.addTrack(track, stream)
      })

      // 處理遠端媒體流
      peerConnectionRef.current.ontrack = (event) => {
        console.log('📻 收到遠端音頻流')
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = event.streams[0]
        }
        setIsCallConnected(true)
        setConnectionState('connected')
        toast.success('語音通話已連接')
      }

      // 連接狀態監聽
      peerConnectionRef.current.onconnectionstatechange = () => {
        const state = peerConnectionRef.current.connectionState
        console.log('🔗 連接狀態:', state)
        setConnectionState(state)
        
        if (state === 'connected') {
          setIsCallConnected(true)
          startCallTimer()
        } else if (state === 'disconnected' || state === 'failed') {
          setIsCallConnected(false)
          stopCallTimer()
        }
      }

      // ICE 候選監聽
      peerConnectionRef.current.onicecandidate = (event) => {
        if (event.candidate) {
          console.log('🧊 ICE 候選:', event.candidate)
          // 這裡需要通過 Firebase 發送 ICE 候選給對方
          sendICECandidate(event.candidate)
        }
      }

      setIsCallActive(true)
      setConnectionState('connecting')
      toast.success('正在建立語音連接...')

    } catch (error) {
      console.error('❌ 語音通話初始化失敗:', error)
      toast.error('無法訪問麥克風，請檢查權限設置')
      onClose()
    }
  }

  // 發送 ICE 候選 (需要實現 Firebase 信令)
  const sendICECandidate = (candidate) => {
    // TODO: 通過 Firebase 發送 ICE 候選給對方
    console.log('📤 發送 ICE 候選:', candidate)
  }

  // 開始通話計時器
  const startCallTimer = () => {
    callTimerRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)
  }

  // 停止通話計時器
  const stopCallTimer = () => {
    if (callTimerRef.current) {
      clearInterval(callTimerRef.current)
      callTimerRef.current = null
    }
  }

  // 格式化通話時間
  const formatCallDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // 切換靜音
  const toggleMute = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = isMuted
        setIsMuted(!isMuted)
        toast.success(isMuted ? '麥克風已開啟' : '麥克風已關閉')
      }
    }
  }

  // 切換揚聲器
  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn)
    toast.success(isSpeakerOn ? '揚聲器已關閉' : '揚聲器已開啟')
  }

  // 接聽通話
  const answerCall = async () => {
    try {
      await initializeWebRTC()
      toast.success('通話已接聽')
      
      // 執行外部接聽回調
      if (onAnswer) {
        await onAnswer()
      }
    } catch (error) {
      console.error('接聽失敗:', error)
      toast.error('接聽失敗')
    }
  }

  // 掛斷通話
  const endCall = () => {
    console.log('📞 掛斷通話')
    
    // 停止計時器
    stopCallTimer()
    
    // 關閉媒體流
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop())
    }
    
    // 關閉 WebRTC 連接
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close()
    }
    
    setIsCallActive(false)
    setIsCallConnected(false)
    setCallDuration(0)
    toast.success('通話已結束')
    onClose()
  }

  // 組件初始化
  useEffect(() => {
    if (isVisible && !isIncoming) {
      initializeWebRTC()
    }
    
    return () => {
      // 清理資源
      stopCallTimer()
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop())
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close()
      }
    }
  }, [isVisible])

  // 調試日誌
  console.log('🎬 VoiceCall 渲染狀態:', {
    isVisible,
    recipientName,
    isIncoming,
    isCallActive,
    isCallConnected
  })

  if (!isVisible) {
    console.log('❌ VoiceCall 隱藏中')
    return null
  }

  console.log('✅ VoiceCall 顯示中')
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="bg-white dark:bg-dark-card rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
        {/* 用戶頭像和名稱 */}
        <div className="text-center mb-6">
          <img 
            src={`https://ui-avatars.com/api/?name=${recipientName}&background=56c596&color=fff&size=120`}
            alt={recipientName}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text">
            {recipientName}
          </h3>
          
          {/* 通話狀態 */}
          <div className="mt-2">
            {isIncoming ? (
              <p className="text-green-600 font-medium animate-pulse">來電中...</p>
            ) : connectionState === 'connecting' ? (
              <p className="text-blue-600 font-medium animate-pulse">連接中...</p>
            ) : isCallConnected ? (
              <p className="text-green-600 font-medium">
                通話中 {formatCallDuration(callDuration)}
              </p>
            ) : (
              <p className="text-gray-500">語音通話</p>
            )}
          </div>
        </div>

        {/* 通話控制按鈕 */}
        <div className="flex justify-center gap-4 mb-4">
          {/* 靜音按鈕 */}
          {(isCallActive || isCallConnected) && (
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full transition-colors ${
                isMuted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
              title={isMuted ? '開啟麥克風' : '關閉麥克風'}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
          )}

          {/* 揚聲器按鈕 */}
          {(isCallActive || isCallConnected) && (
            <button
              onClick={toggleSpeaker}
              className={`p-4 rounded-full transition-colors ${
                isSpeakerOn 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
              title={isSpeakerOn ? '關閉揚聲器' : '開啟揚聲器'}
            >
              {isSpeakerOn ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* 主要操作按鈕 */}
        <div className="flex justify-center gap-8">
          {isIncoming ? (
            <>
              {/* 接聽按鈕 */}
              <button
                onClick={answerCall}
                className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                title="接聽"
              >
                <Phone className="w-8 h-8" />
              </button>
              
              {/* 拒接按鈕 */}
              <button
                onClick={() => {
                  if (onReject) {
                    onReject()
                  } else {
                    endCall()
                  }
                }}
                className="p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                title="拒接"
              >
                <PhoneOff className="w-8 h-8" />
              </button>
            </>
          ) : (
            /* 掛斷按鈕 */
            <button
              onClick={endCall}
              className="p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
              title="掛斷"
            >
              <PhoneOff className="w-8 h-8" />
            </button>
          )}
        </div>

        {/* 音頻元素 */}
        <audio ref={localAudioRef} autoPlay muted />
        <audio ref={remoteAudioRef} autoPlay />

        {/* 開發提示 */}
        <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
            🚧 語音通話功能正在開發中
            <br />
            需要實現 Firebase 信令服務器
          </p>
        </div>
      </div>
    </div>
  )
}

export default VoiceCall