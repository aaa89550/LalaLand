import React from 'react'
import { MessageCircle, UserPlus, Users, Loader } from 'lucide-react'
import { useChatStore } from '../../store/chatStore'
import { useAuthStore } from '../../store/authStore'
import { useFriends } from '../../hooks/useFriends'
import { usePrivateChatsList } from '../../hooks/usePrivateChatsList'
import toast from 'react-hot-toast'

const FriendsList = () => {
  const { setCurrentRoom, setCurrentPrivateChat } = useChatStore()
  const { user } = useAuthStore()
  const { friends, loading } = useFriends()
  const { refreshList } = usePrivateChatsList()
  
  // 調試日誌
  console.log('👥 FriendsList 狀態:', {
    friendsCount: friends.length,
    loading,
    friends: friends
  })



  const startPrivateChat = (friend) => {
    console.log('🚀 開始私聊:', friend)
    setCurrentPrivateChat({
      roomId: `private_${friend.uid}`,
      recipientId: friend.uid, // 添加接收者ID
      nickname: friend.nickname,
      avatar: friend.avatar,
      isOnline: friend.isOnline
    })
    setCurrentRoom('private')
  }

  return (
    <div className="flex flex-col h-screen pt-16 md:pt-0">
      {/* 標題 */}
      <div className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-sea-blue" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text">
            我的好友
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          點選好友開始私人對話
        </p>

      </div>

      {/* 好友列表 */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Loader className="w-8 h-8 animate-spin mb-4" />
            <p>載入好友列表中...</p>
          </div>
        ) : friends.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <UserPlus className="w-16 h-16 mb-4 text-gray-300" />
            <p className="text-lg mb-2">還沒有好友</p>
            <p className="text-sm text-center px-4">
              在聊天室中點擊其他用戶頭像<br />
              可以加為好友
            </p>
          </div>
        ) : (
          <div className="p-4">
            <div className="space-y-3">
              {friends.map((friend) => (
                <div
                  key={friend.uid}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-xl shadow-soft hover:shadow-medium transition-all cursor-pointer group"
                  onClick={() => startPrivateChat(friend)}
                >
                  {/* 頭像與在線狀態 */}
                  <div className="relative">
                    <img 
                      src={friend.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.nickname || '用戶')}&background=56c596&color=fff`}
                      alt={friend.nickname || '用戶'}
                      className="w-14 h-14 rounded-full border-3 border-accent-green shadow-medium"
                    />
                    {/* 在線狀態指示器 */}
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      friend.isOnline ? 'bg-accent-green' : 'bg-gray-400'
                    }`} />
                  </div>

                  {/* 好友資訊 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                        {friend.nickname}
                      </h3>
                      {friend.isOnline && (
                        <span className="text-xs px-2 py-1 bg-accent-green/20 text-accent-green rounded-full">
                          在線
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span className={`w-2 h-2 rounded-full ${
                        friend.isOnline ? 'bg-accent-green' : 'bg-gray-400'
                      }`} />
                      <span>
                        {friend.isOnline 
                          ? '在線中' 
                          : `最後上線: ${new Date(friend.lastSeen).toLocaleString('zh-TW')}`
                        }
                      </span>
                    </div>
                  </div>

                  {/* 聊天按鈕 */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        startPrivateChat(friend)
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg transition-colors font-medium shadow-soft"
                    >
                      <MessageCircle className="w-4 h-4" />
                      聊天
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 新增好友提示 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-sea-light to-accent-green/20 rounded-xl border border-sea-light">
              <div className="text-center">
                <UserPlus className="w-12 h-12 text-sea-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">想要更多好友？</h4>
                <p className="text-sm text-gray-600 mb-4">
                  前往聊天室與其他用戶互動，點擊他們的頭像即可加為好友
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => setCurrentRoom('chat')}
                    className="btn-primary w-full"
                  >
                    前往聊天室
                  </button>
                  <button
                    onClick={handleAddSampleFriends}
                    className="btn-secondary w-full text-sm"
                  >
                    📝 添加範例好友
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendsList