import { create } from 'zustand'

export const useChatStore = create((set, get) => ({
  // 聊天狀態
  currentRoom: 'chat', // 'chat', 'love', 'sex', 'private', 'friends'
  currentPrivateChat: null, // { roomId, nickname }
  messages: [],
  onlineUsers: {},
  friends: [],
  privateChatsList: [],
  
  // UI 狀態
  sidebarOpen: false,
  darkMode: localStorage.getItem('darkMode') === 'yes',
  
  // Actions
  setCurrentRoom: (room) => set({ currentRoom: room }),
  setCurrentPrivateChat: (chat) => set({ currentPrivateChat: chat }),
  setMessages: (messages) => set({ messages }),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  setOnlineUsers: (users) => set({ onlineUsers: users }),
  setFriends: (friends) => set({ friends }),
  setPrivateChatsList: (chats) => set({ privateChatsList: chats }),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleDarkMode: () => {
    const newMode = !get().darkMode
    localStorage.setItem('darkMode', newMode ? 'yes' : 'no')
    set({ darkMode: newMode })
    
    // 更新 DOM 類別
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  
  clearMessages: () => set({ messages: [] })
}))