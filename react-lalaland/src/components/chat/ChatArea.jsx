import React from 'react'
import { useChatStore } from '../../store/chatStore'
import GroupChat from './GroupChat'
import PrivateChat from './PrivateChat'
import FriendsList from './FriendsList'

const ChatArea = () => {
  const { currentRoom, currentPrivateChat } = useChatStore()

  const renderChatContent = () => {
    if (currentRoom === 'friends') {
      return <FriendsList />
    }
    
    if (currentRoom === 'private') {
      if (currentPrivateChat) {
        return <PrivateChat />
      } else {
        return <PrivateChat />
      }
    }

    // 群組聊天室
    return <GroupChat roomId={currentRoom} />
  }

  return (
    <div className="flex-1 flex flex-col">
      {renderChatContent()}
    </div>
  )
}

export default ChatArea