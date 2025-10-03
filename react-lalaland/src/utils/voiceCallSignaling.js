import { ref, push, onValue, remove, get } from 'firebase/database'
import { database } from '../config/firebase'

class VoiceCallSignaling {
  constructor(userId) {
    this.userId = userId
    this.listeners = new Map()
  }

  // 發起通話
  async initiateCall(recipientId, offer) {
    const callId = `${this.userId}_${recipientId}_${Date.now()}`
    const callRef = ref(database, `voiceCalls/${callId}`)
    
    const callData = {
      callId,
      from: this.userId,
      to: recipientId,
      offer,
      status: 'calling',
      timestamp: Date.now()
    }

    try {
      await push(callRef, callData)
      console.log('📞 語音通話邀請已發送:', callId)
      return callId
    } catch (error) {
      console.error('❌ 發送通話邀請失敗:', error)
      throw error
    }
  }

  // 接聽通話
  async answerCall(callId, answer) {
    const answerRef = ref(database, `voiceCalls/${callId}/answer`)
    
    try {
      await push(answerRef, {
        answer,
        timestamp: Date.now(),
        from: this.userId
      })
      console.log('✅ 通話已接聽:', callId)
    } catch (error) {
      console.error('❌ 接聽通話失敗:', error)
      throw error
    }
  }

  // 拒絕或掛斷通話
  async endCall(callId, reason = 'ended') {
    const callRef = ref(database, `voiceCalls/${callId}`)
    
    try {
      await remove(callRef)
      console.log('📞 通話已結束:', callId, reason)
    } catch (error) {
      console.error('❌ 結束通話失敗:', error)
    }
  }

  // 發送 ICE 候選
  async sendICECandidate(callId, candidate) {
    const candidateRef = ref(database, `voiceCalls/${callId}/candidates`)
    
    try {
      await push(candidateRef, {
        candidate,
        from: this.userId,
        timestamp: Date.now()
      })
      console.log('🧊 ICE 候選已發送')
    } catch (error) {
      console.error('❌ 發送 ICE 候選失敗:', error)
    }
  }

  // 監聽來電
  listenForIncomingCalls(callback) {
    const incomingCallsRef = ref(database, `voiceCalls`)
    
    const unsubscribe = onValue(incomingCallsRef, (snapshot) => {
      if (snapshot.exists()) {
        const calls = snapshot.val()
        
        // 查找發給當前用戶的通話
        Object.entries(calls).forEach(([callId, callData]) => {
          if (Object.values(callData).some(call => 
            call.to === this.userId && call.status === 'calling'
          )) {
            callback({
              callId,
              from: Object.values(callData)[0].from,
              offer: Object.values(callData)[0].offer
            })
          }
        })
      }
    })

    this.listeners.set('incomingCalls', unsubscribe)
    return unsubscribe
  }

  // 監聽通話應答
  listenForCallAnswer(callId, callback) {
    const answerRef = ref(database, `voiceCalls/${callId}/answer`)
    
    const unsubscribe = onValue(answerRef, (snapshot) => {
      if (snapshot.exists()) {
        const answers = snapshot.val()
        const latestAnswer = Object.values(answers).pop()
        
        if (latestAnswer && latestAnswer.from !== this.userId) {
          callback(latestAnswer.answer)
        }
      }
    })

    this.listeners.set(`answer_${callId}`, unsubscribe)
    return unsubscribe
  }

  // 監聽 ICE 候選
  listenForICECandidates(callId, callback) {
    const candidatesRef = ref(database, `voiceCalls/${callId}/candidates`)
    
    const unsubscribe = onValue(candidatesRef, (snapshot) => {
      if (snapshot.exists()) {
        const candidates = snapshot.val()
        
        Object.values(candidates).forEach(candidateData => {
          if (candidateData.from !== this.userId) {
            callback(candidateData.candidate)
          }
        })
      }
    })

    this.listeners.set(`candidates_${callId}`, unsubscribe)
    return unsubscribe
  }

  // 監聽通話狀態變化
  listenForCallStatus(callId, callback) {
    const callRef = ref(database, `voiceCalls/${callId}`)
    
    const unsubscribe = onValue(callRef, (snapshot) => {
      if (!snapshot.exists()) {
        callback('ended')
      } else {
        const callData = snapshot.val()
        const latestStatus = Object.values(callData)[0]?.status || 'unknown'
        callback(latestStatus)
      }
    })

    this.listeners.set(`status_${callId}`, unsubscribe)
    return unsubscribe
  }

  // 清理所有監聽器
  cleanup() {
    this.listeners.forEach((unsubscribe) => {
      try {
        unsubscribe()
      } catch (error) {
        console.error('清理監聽器失敗:', error)
      }
    })
    this.listeners.clear()
    console.log('🧹 語音通話信令監聽器已清理')
  }

  // 獲取用戶的通話狀態
  async getUserCallStatus(userId) {
    const callsRef = ref(database, `voiceCalls`)
    
    try {
      const snapshot = await get(callsRef)
      if (snapshot.exists()) {
        const calls = snapshot.val()
        
        // 查找該用戶的活動通話
        for (const [callId, callData] of Object.entries(calls)) {
          const call = Object.values(callData)[0]
          if ((call.from === userId || call.to === userId) && call.status !== 'ended') {
            return { callId, status: call.status, callData: call }
          }
        }
      }
      return null
    } catch (error) {
      console.error('獲取通話狀態失敗:', error)
      return null
    }
  }
}

export default VoiceCallSignaling