import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, ArrowLeft, Send, Image, Smile, Phone, X } from 'lucide-react'
import { useChatStore } from '../../store/chatStore'
import { useAuthStore } from '../../store/authStore'
import { usePrivateChat } from '../../hooks/usePrivateChat'
import { usePrivateChatsList } from '../../hooks/usePrivateChatsList'
import { useUnreadMessages } from '../../hooks/useUnreadMessages'
import { uploadImage, createImagePreview } from '../../utils/imageUtils'
import MessageBubble from './MessageBubble'
import UnreadBadge from '../UnreadBadge'
import VoiceCall from './VoiceCall'
import { ref, push } from 'firebase/database'
import { database } from '../../config/firebase'
import toast from 'react-hot-toast'

const PrivateChat = () => {
  const { user } = useAuthStore()
  const { 
    currentPrivateChat, 
    setCurrentPrivateChat, 
    setCurrentRoom,
    messages
  } = useChatStore()
  
  // 使用新的私聊列表hook
  const { privateChatsList, loading: chatsLoading, refreshList } = usePrivateChatsList()
  
  const [inputMessage, setInputMessage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [showVoiceCall, setShowVoiceCall] = useState(false)
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)
  
  // 使用私聊 hook 來載入歷史訊息
  const { sendPrivateMessage } = usePrivateChat(currentPrivateChat?.recipientId)
  
  // 使用未讀訊息 hook
  const { getUnreadCount, markAsRead, recalculateTotal } = useUnreadMessages()
  
  // 確保進入私訊頁面時設定正確的房間狀態
  useEffect(() => {
    console.log('🏠 設定私訊房間狀態')
    setCurrentRoom('private')
    // 如果沒有選中具體的私聊，清空當前私聊狀態
    if (!currentPrivateChat) {
      console.log('📝 清空當前私聊狀態')
    }
  }, [setCurrentRoom]) // 只在組件載入時執行一次
  
  // 調試日誌 (簡化版)
  console.log('💬 PrivateChat 狀態:', {
    currentPrivateChat: !!currentPrivateChat,
    nickname: currentPrivateChat?.nickname,
    messagesCount: messages.length,
    privateChatsListCount: privateChatsList.length,
    chatsLoading
  })

  // 自動滾動到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // 返回私聊列表
  const handleBackToList = () => {
    console.log('⬅️  返回私聊列表')
    setCurrentPrivateChat(null)
    // 重新計算總未讀數
    recalculateTotal()
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() && !imagePreview) return
    
    try {
      let imageUrl = null
      
      // 如果有圖片預覽，先上傳圖片
      if (imagePreview && fileInputRef.current?.files[0]) {
        setUploadingImage(true)
        toast.loading('正在上傳圖片...')
        imageUrl = await uploadImage(fileInputRef.current.files[0])
        toast.dismiss()
      }

      await sendPrivateMessage({
        text: inputMessage.trim(),
        type: 'text',
        image: imageUrl
      })
      
      // 清空輸入
      setInputMessage('')
      setImagePreview(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      if (imageUrl) {
        toast.success('圖片已發送')
      }
    } catch (error) {
      console.error('發送私訊失敗:', error)
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
        toast.success('圖片已選擇，將自動壓縮')
      } catch (error) {
        toast.error('圖片預覽失敗')
      }
    }
  }

  const handleVoiceCall = async () => {
    try {
      setShowVoiceCall(true)
      toast.success(`正在呼叫 ${currentPrivateChat.nickname}...`)
      
      // 發送語音通話通知給對方
      await sendVoiceCallNotification(currentPrivateChat.recipientId, {
        type: 'incoming_call',
        from: user.uid,
        fromName: user.nickname || user.displayName || '匿名用戶',
        fromAvatar: user.avatar,
        timestamp: Date.now()
      })
      
      console.log('📞 語音通話邀請已發送給:', currentPrivateChat.nickname)
    } catch (error) {
      console.error('發送語音通話邀請失敗:', error)
      toast.error('無法發起通話，請稍後再試')
      setShowVoiceCall(false)
    }
  }

  const handleCloseVoiceCall = () => {
    setShowVoiceCall(false)
  }

  // 發送語音通話通知
  const sendVoiceCallNotification = async (recipientId, notificationData) => {
    try {
      const notificationRef = ref(database, `notifications/${recipientId}`)
      
      const notification = {
        ...notificationData,
        id: `call_${Date.now()}`,
        read: false,
        createdAt: Date.now()
      }

      await push(notificationRef, notification)
      console.log('📢 通知已發送:', notification)
      
      // 同時發送系統訊息到私聊
      await sendPrivateMessage({
        text: `📞 ${user.nickname || '用戶'} 向您發起了語音通話`,
        type: 'system',
        callData: notificationData
      })
      
    } catch (error) {
      console.error('發送通知失敗:', error)
      throw error
    }
  }

  // 如果有選擇特定私聊，顯示聊天界面
  if (currentPrivateChat) {
    return (
      <div className="flex flex-col h-screen pt-16 md:pt-0">
        {/* 私聊標題欄 */}
        <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBackToList}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="返回私聊列表"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <img 
                src={currentPrivateChat.avatar || `https://ui-avatars.com/api/?name=${currentPrivateChat.nickname}&background=56c596&color=fff`}
                alt={currentPrivateChat.nickname}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-800 dark:text-dark-text">
                  {currentPrivateChat.nickname}
                </h2>
                <p className="text-sm text-gray-500">私人對話</p>
              </div>
            </div>
            
            {/* 語音通話按鈕 */}
            <button
              onClick={handleVoiceCall}
              className="p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
              title="語音通話"
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 訊息區域 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>還沒有私訊記錄</p>
              <p className="text-sm">開始和 {currentPrivateChat.nickname} 聊天吧！</p>
            </div>
          ) : (
            messages.map((message) => (
              <MessageBubble 
                key={message.id}
                message={message} 
                isOwn={message.sender?.uid === user?.uid || message.from === user?.uid}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 圖片預覽 */}
        {imagePreview && (
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="relative inline-block">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="max-w-32 md:max-w-xs rounded-lg"
              />
              <button
                onClick={() => {
                  setImagePreview(null)
                  if (fileInputRef.current) {
                    fileInputRef.current.value = ''
                  }
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">點擊 X 移除圖片</p>
          </div>
        )}

        {/* 輸入區域 */}
        <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-end gap-2">
            {/* 功能按鈕組 */}
            <div className="flex gap-1">
              {/* 圖片上傳按鈕 */}
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingImage}
                className="p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors disabled:opacity-50"
                title="上傳圖片"
              >
                <Image className="w-5 h-5" />
              </button>
            </div>
            
            {/* 文字輸入 */}
            <div className="flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`傳訊息給 ${currentPrivateChat.nickname}...`}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-dark-card dark:text-dark-text outline-none"
              />
            </div>
            
            {/* 發送按鈕 */}
            <button 
              onClick={handleSendMessage}
              disabled={(!inputMessage.trim() && !imagePreview) || uploadingImage}
              className="px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title={uploadingImage ? '上傳中...' : '發送'}
            >
              {uploadingImage ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>

            {/* 隱藏的文件輸入 */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>
        </div>

        {/* 語音通話組件 */}
        <VoiceCall
          isVisible={showVoiceCall}
          onClose={handleCloseVoiceCall}
          recipientName={currentPrivateChat.nickname}
          recipientId={currentPrivateChat.recipientId}
          isIncoming={false}
        />
      </div>
    )
  }

  // 顯示私訊列表
  return (
    <div className="flex flex-col h-screen pt-16 md:pt-0">
      {/* 標題 */}
      <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-1">
              私人訊息 ({privateChatsList.length})
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              點選對話開始私訊
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                console.log('🔄 重新載入私聊列表...')
                refreshList()
              }}
              className="px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors"
            >
              🔄 重新載入
            </button>
          </div>
        </div>
      </div>

      {/* 私訊列表 */}
      <div className="flex-1 overflow-y-auto">
        {chatsLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"></div>
            <span className="ml-2 text-gray-500">載入私聊列表中...</span>
          </div>
        ) : privateChatsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <MessageCircle className="w-16 h-16 mb-4 text-gray-300" />
            <p className="text-lg mb-2">還沒有私訊</p>
            <p className="text-sm text-center px-4 mb-4">
              在聊天室中點擊其他用戶的頭像<br />
              就可以開始私人對話
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {privateChatsList.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  console.log(`🔄 切換到私聊: ${chat.nickname} (ID: ${chat.recipientId})`)
                  setCurrentPrivateChat(chat)
                  setCurrentRoom('private') // 重要：設定當前房間為私聊
                  // 標記為已讀 - 使用 recipientId 而非 chat.id
                  markAsRead(chat.recipientId)
                }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors relative"
              >
                <div className="relative">
                  <img 
                    src={chat.avatar || `https://ui-avatars.com/api/?name=${chat.nickname}&background=56c596&color=fff`}
                    alt={chat.nickname}
                    className="w-12 h-12 rounded-full"
                  />
                  <UnreadBadge count={getUnreadCount(chat.recipientId)} className="absolute -top-1 -right-1" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {chat.nickname}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage || '開始對話...'}
                  </p>
                </div>
                <div className="text-xs text-gray-400">
                  {chat.lastMessageTime && new Date(chat.lastMessageTime).toLocaleTimeString('zh-TW', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PrivateChat