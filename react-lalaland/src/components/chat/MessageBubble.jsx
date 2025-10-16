import React, { useState } from 'react'
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react'
import { useChatStore } from '../../store/chatStore'
import { useAuthStore } from '../../store/authStore'

const MessageBubble = ({ message, isOwn, onReply }) => {
  const { setCurrentPrivateChat, setCurrentRoom } = useChatStore()
  const { user } = useAuthStore()
  const [showActions, setShowActions] = useState(false)
  const [liked, setLiked] = useState(message.liked || false)

  // 處理頭像點擊 - 開始私聊
  const handleAvatarClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const senderInfo = getSenderInfo()
    
    // 不允許與自己聊天
    if (senderInfo.uid === user?.uid) {
      return
    }
    
    console.log('👆 頭像點擊 - 開始私聊:', senderInfo)
    
    setCurrentPrivateChat({
      roomId: `private_${senderInfo.uid}`,
      recipientId: senderInfo.uid,
      nickname: senderInfo.nickname,
      avatar: senderInfo.avatar,
      isOnline: false
    })
    setCurrentRoom('private')
  }

  // 取得用戶信息 - 支援多種可能的欄位結構
  const getSenderInfo = () => {
    // 如果有 sender 物件 (新格式)
    if (message.sender) {
      return {
        nickname: message.sender.nickname || message.sender.displayName || message.sender.name,
        avatar: message.sender.avatar || message.sender.photoURL,
        uid: message.sender.uid
      }
    }
    
    // 原始格式的欄位結構 (支援私訊格式)
    return {
      nickname: message.user || message.senderName || message.nickname || message.userName || '匿名用戶',
      avatar: message.avatar || message.senderAvatar,
      uid: message.from || message.senderId || message.userId || message.uid
    }
  }

  // 處理按讚
  const handleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
    // TODO: 可以在這裡添加 Firebase 更新邏輯
    console.log('💖 按讚訊息:', message.id, !liked)
  }

  // 處理回覆
  const handleReply = (e) => {
    e.stopPropagation()
    try {
      if (onReply && typeof onReply === 'function') {
        const messageText = message.text || message.content || message.message || message.msg || ''
        const senderInfo = getSenderInfo()
        onReply({
          id: message.id,
          text: messageText,
          sender: senderInfo.nickname
        })
        console.log('💬 回覆訊息:', message.id)
      } else {
        console.warn('⚠️ onReply 函數未提供或不是函數')
      }
    } catch (error) {
      console.error('回覆功能錯誤:', error)
      // 顯示用戶友好的錯誤信息
      alert('回覆功能暫時無法使用，請稍後再試')
    }
  }

  // 安全檢查，確保 message 有必要的屬性
  if (!message) {
    return null
  }

  const senderInfo = getSenderInfo()

  // 如果沒有發送者信息，使用預設值
  if (!senderInfo.nickname && !senderInfo.uid) {
    console.warn('訊息缺少發送者信息:', message)
  }

  // 渲染包含連結的文字
  const renderTextWithLinks = (text) => {
    if (!text) return ''
    
    // URL 正則表達式
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  const formatTime = (timestamp) => {
    // 支援多種時間欄位格式
    const time = timestamp || message.timestamp || message.time
    if (!time) return '未知時間'
    
    // 確保時間是正確的毫秒格式
    let messageTime
    if (typeof time === 'number') {
      messageTime = time
    } else if (typeof time === 'string') {
      messageTime = new Date(time).getTime()
    } else if (time && typeof time === 'object' && time.seconds) {
      // Firebase Timestamp 格式
      messageTime = time.seconds * 1000 + (time.nanoseconds || 0) / 1000000
    } else {
      messageTime = Date.now()
    }
    
    // 驗證時間戳是否有效
    if (isNaN(messageTime)) {
      return '時間錯誤'
    }
    
    // 顯示完整的年/月/日 時間格式
    return new Date(messageTime).toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // 使用 24 小時格式
    })
  }

  const renderMessageContent = () => {
    if (message.type === 'vote') {
      return <VoteContent voteData={message.content} />
    }

    // 取得訊息內容 - 支援多種欄位名稱 (原始格式使用 text)
    const messageText = message.text || message.content || message.message || message.msg || ''

    return (
      <div>
        {message.image && (
          <img 
            src={message.image} 
            alt="分享的圖片" 
            className="max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => window.open(message.image, '_blank')}
          />
        )}
        {messageText && (
          <div className="break-words">
            {renderTextWithLinks(messageText)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div 
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'} group`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className={`flex items-start gap-3 max-w-[70%] ${isOwn ? 'flex-row-reverse' : ''}`}>
        {/* 頭像 - 顯示所有用戶的頭像 */}
        <img 
          src={senderInfo.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(senderInfo.nickname || '匿名')}&background=56c596&color=fff`}
          alt={`${senderInfo.nickname || '匿名用戶'}的頭像`}
          className={`w-8 h-8 rounded-full flex-shrink-0 mt-1 avatar-image ${
            senderInfo.uid !== user?.uid 
              ? 'cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200' 
              : ''
          }`}
          onClick={senderInfo.uid !== user?.uid ? handleAvatarClick : undefined}
          title={senderInfo.uid !== user?.uid ? `點擊與 ${senderInfo.nickname} 私聊` : ''}
          style={{ pointerEvents: senderInfo.uid !== user?.uid ? 'auto' : 'none' }}
        />

        {/* 訊息內容 */}
        <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
          {/* 發送者暱稱 - 顯示所有用戶的暱稱 */}
          <p className="text-xs text-gray-500 mb-1 px-1">
            {senderInfo.nickname || '匿名用戶'}
            {isOwn && <span className="text-blue-500"> (你)</span>}
          </p>

          {/* 訊息氣泡 */}
          <div 
            className={`
              message-bubble relative
              ${isOwn 
                ? 'message-self bg-sea-blue dark:bg-green-600 text-white' 
                : 'message-other bg-white dark:bg-green-700 text-gray-700 dark:text-green-100 border border-gray-200 dark:border-green-600'
              }
            `}
          >
            {renderMessageContent()}
            
            {/* 時間戳記 */}
            <div className={`text-xs mt-1 ${isOwn ? 'text-sea-light dark:text-green-200' : 'text-gray-400 dark:text-green-300'}`}>
              {formatTime(message.timestamp || message.time)}
            </div>
          </div>

          {/* 訊息操作 */}
          {showActions && (
            <div className={`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${isOwn ? 'flex-row-reverse' : ''}`}>
              <button 
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                onClick={handleLike}
                title="按讚"
              >
                <Heart 
                  className={`w-3 h-3 transition-colors ${
                    liked ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'
                  }`} 
                />
              </button>
              <button 
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                onClick={handleReply}
                title="回覆"
              >
                <MessageCircle className="w-3 h-3 text-gray-400 hover:text-blue-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// 投票內容組件
const VoteContent = ({ voteData }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  
  // 確保 voteData 和 votes 存在
  const votes = voteData?.votes || []
  const options = voteData?.options || []
  const question = voteData?.question || '投票問題'
  
  const totalVotes = votes.reduce((sum, count) => sum + (count || 0), 0)

  const handleVote = (optionIndex) => {
    if (selectedOption !== null) return // 已經投過票
    setSelectedOption(optionIndex)
    // 這裡應該發送投票到 Firebase
  }

  return (
    <div className="bg-gray-50 dark:bg-green-900/30 rounded-lg p-4 min-w-[250px]">
      <h4 className="font-medium mb-3 text-gray-800 dark:text-gray-200">
        📊 {question}
      </h4>
      
      <div className="space-y-2">
        {options.map((option, index) => {
          const optionVotes = votes[index] || 0
          const percentage = totalVotes > 0 ? (optionVotes / totalVotes * 100) : 0
          const isSelected = selectedOption === index
          
          return (
            <button
              key={index}
              onClick={() => handleVote(index)}
              disabled={selectedOption !== null}
              className={`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${isSelected 
                  ? 'border-sea-blue dark:border-green-400 bg-sea-light dark:bg-green-800 text-sea-dark dark:text-green-100' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }
                ${selectedOption !== null ? 'cursor-default' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-green-800/50'}
              `}
            >
              {/* 背景進度條 */}
              {selectedOption !== null && (
                <div 
                  className="absolute inset-0 bg-sea-blue/10 dark:bg-green-500/20 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}
              
              <div className="relative flex justify-between items-center">
                <span>{option}</span>
                {selectedOption !== null && (
                  <span className="text-sm font-medium">
                    {optionVotes} ({percentage.toFixed(1)}%)
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
      
      {selectedOption !== null && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          總投票數: {totalVotes}
        </p>
      )}
    </div>
  )
}

export default MessageBubble