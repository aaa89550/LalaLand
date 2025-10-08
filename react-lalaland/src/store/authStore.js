import { create } from 'zustand'

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,
  
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  
  logout: () => set({ user: null }),
  
  // 創建匿名用戶
  createAnonymousUser: () => {
    const anonymousUser = {
      uid: `anonymous_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      displayName: '匿名訪客',
      isAnonymous: true,
      isFirstLogin: false,
      avatar: null,
      email: null
    }
    set({ user: anonymousUser })
    return anonymousUser
  },
  
  // 檢查是否為匿名用戶
  isAnonymousUser: () => {
    const { user } = get()
    return user?.isAnonymous === true
  }
}))