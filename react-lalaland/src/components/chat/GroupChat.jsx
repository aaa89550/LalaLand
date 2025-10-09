import React, { useState, useEffect, useRef } from 'react'
import { 
  Send, 
  Image, 
  Smile, 
  BarChart3, 
  X,
  MessageCircle,
  UserPlus
} from 'lucide-react'
import { useChatStore } from '../../store/chatStore'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom'
import { useFirebaseChat } from '../../hooks/useFirebaseChat'
import { useOnlineUsers } from '../../hooks/useOnlineUsers'
import { uploadImage, createImagePreview } from '../../utils/imageUtils'
import MessageBubble from './MessageBubble'
import EmojiPicker from './EmojiPicker'
import VotePoll from './VotePoll'
import AgeVerificationModal from '../common/AgeVerificationModal'
import toast from 'react-hot-toast'

const GroupChat = ({ roomId }) => {
  const { user, isAnonymousUser } = useAuthStore()
  const { messages, setCurrentRoom } = useChatStore()
  const { sendMessage } = useFirebaseChat(roomId)
  const navigate = useNavigate()
  const isAnonymous = isAnonymousUser()
  const [inputMessage, setInputMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showVotePoll, setShowVotePoll] = useState(false)
  const [showAgeVerification, setShowAgeVerification] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [replyTo, setReplyTo] = useState(null)
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)

  // 自動滾動到底部 - 使用 setTimeout 避免版面問題
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        const container = messagesEndRef.current.parentElement
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      }
    }
    
    // 延遲滾動，避免影響布局
    const timeoutId = setTimeout(scrollToBottom, 100)
    return () => clearTimeout(timeoutId)
  }, [messages])

  // 年齡驗證 - 檢查是否進入約炮區
  useEffect(() => {
    if (roomId === 'sex') {
      // 檢查是否已經驗證過年齡（使用 sessionStorage，每次會話都需要重新驗證）
      const ageVerified = sessionStorage.getItem('ageVerified')
      if (!ageVerified) {
        setShowAgeVerification(true)
      }
    }
  }, [roomId])

  // 使用在線用戶 hook
  useOnlineUsers()

  const roomInfo = {
    chat: { name: '閒聊區', tip: '歡迎隨意聊聊、發問、抒發生活大小事。' },
    love: { name: '找伴區', tip: '你正在找伴專區，請多用心互動，彼此尊重。' },
    sex: { name: '約炮區', tip: '匿名聊性、約炮自由，但請勿冒犯他人。' }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!inputMessage.trim() && !imagePreview) return

    try {
      let imageUrl = null
      
      // 如果有圖片預覽，先上傳圖片
      if (imagePreview && fileInputRef.current?.files[0]) {
        setUploadingImage(true)
        imageUrl = await uploadImage(fileInputRef.current.files[0])
      }

      const messageData = {
        type: 'text',
        content: inputMessage.trim(),
        image: imageUrl
      }

      await sendMessage(messageData)
      
      // 清空輸入
      setInputMessage('')
      setImagePreview(null)
      setShowEmojiPicker(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      toast.success('訊息已發送')
    } catch (error) {
      toast.error('發送失敗: ' + error.message)
    } finally {
      setUploadingImage(false)
    }
  }

  const handleImageSelect = async (e) => {
    const file = e.target.files[0]
    if (file) {
      try {
        const preview = await createImagePreview(file)
        setImagePreview(preview)
      } catch (error) {
        toast.error('圖片預覽失敗')
      }
    }
  }

  const handleEmojiSelect = (emoji) => {
    setInputMessage(prev => prev + emoji)
    setShowEmojiPicker(false)
  }

  // 處理回覆功能
  const handleReply = (messageData) => {
    setReplyTo(messageData)
    setInputMessage(`@${messageData.sender} `)
  }

  // 取消回覆
  const cancelReply = () => {
    setReplyTo(null)
    setInputMessage('')
  }

  // Firebase hook 已經過濾了當前房間的訊息
  const roomMessages = messages

  return (
    <div className="flex flex-col h-screen pt-16 md:pt-0">
      {/* 聊天室標題和提示 */}
      <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-1">
          {roomInfo[roomId]?.name || '聊天室'}
        </h2>
        {roomInfo[roomId]?.tip && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {roomInfo[roomId].tip}
          </p>
        )}
      </div>

      {/* 訊息區域 */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar">

        
        {roomMessages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>還沒有訊息，開始聊天吧！</p>
          </div>
        ) : (
          roomMessages.map((message, index) => (
            <MessageBubble 
              key={message.id}
              message={message} 
              isOwn={message.sender?.uid === user?.uid || message.from === user?.uid}
              onReply={handleReply}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 圖片預覽 */}
      {imagePreview && (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="relative inline-block">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="max-w-xs rounded-lg"
            />
            <button
              onClick={() => setImagePreview(null)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 回覆預覽 */}
      {replyTo && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-blue-600 dark:text-blue-400">
                回覆 {replyTo.sender}
              </span>
              <span className="text-sm text-gray-500 truncate max-w-xs">
                {replyTo.text}
              </span>
            </div>
            <button 
              onClick={cancelReply}
              className="p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors"
            >
              <X className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>
      )}

      {/* 輸入區域 */}
      <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4">
        {isAnonymous ? (
          // 匿名用戶顯示註冊提示
          <div className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
            <div className="flex items-center gap-3">
              <UserPlus className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              <div>
                <p className="text-amber-800 dark:text-amber-200 font-medium">
                  你正在以匿名模式瀏覽
                </p>
                <p className="text-amber-600 dark:text-amber-400 text-sm">
                  註冊帳號即可發送訊息、上傳圖片、建立投票等功能
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
            >
              立即註冊
            </button>
          </div>
        ) : (
          // 正常用戶顯示輸入表單
          <form onSubmit={handleSendMessage} className="flex items-end gap-2">
            {/* 功能按鈕 */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors"
                title="上傳圖片"
              >
                <Image className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors"
                title="表情符號"
              >
                <Smile className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setShowVotePoll(!showVotePoll)}
                className="p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors"
                title="建立投票"
              >
                <BarChart3 className="w-5 h-5" />
              </button>
            </div>

            {/* 文字輸入 */}
            <div className="flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="輸入訊息..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-dark-card dark:text-dark-text outline-none"
              />
            </div>

            {/* 發送按鈕 */}
            <button
              type="submit"
              disabled={(!inputMessage.trim() && !imagePreview) || uploadingImage}
              className="p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {uploadingImage ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>

            {/* 隱藏的檔案輸入 */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </form>
        )}

        {/* 表情符號選擇器 - 只有非匿名用戶可使用 */}
        {!isAnonymous && showEmojiPicker && (
          <EmojiPicker 
            onEmojiSelect={handleEmojiSelect}
            onClose={() => setShowEmojiPicker(false)}
          />
        )}

        {/* 投票建立器 - 只有非匿名用戶可使用 */}
        {!isAnonymous && showVotePoll && (
          <VotePoll
            onSubmit={async (pollData) => {
              try {
                await sendMessage({
                  type: 'vote',
                  content: pollData
                })
                setShowVotePoll(false)
                toast.success('投票已建立')
              } catch (error) {
                toast.error('建立投票失敗')
              }
            }}
            onClose={() => setShowVotePoll(false)}
          />
        )}

        {/* 年齡驗證彈窗 - 約炮區專用 */}
        <AgeVerificationModal
          isOpen={showAgeVerification}
          onConfirm={() => {
            // 已滿18歲，允許進入約炮區並記住驗證結果
            sessionStorage.setItem('ageVerified', 'true')
            setShowAgeVerification(false)
            toast.success('歡迎進入約炮區！請遵守社群規範。')
          }}
          onReject={() => {
            // 未滿18歲，跳轉到閒聊區
            setCurrentRoom('chat')
            setShowAgeVerification(false)
            toast.error('未滿18歲無法進入約炮區，已自動跳轉至閒聊區。')
          }}
          onClose={() => {
            // 關閉彈窗但不同意驗證，跳轉到閒聊區
            setCurrentRoom('chat')
            setShowAgeVerification(false)
            toast.info('已跳轉至閒聊區。')
          }}
        />
      </div>
    </div>
  )
}

export default GroupChat