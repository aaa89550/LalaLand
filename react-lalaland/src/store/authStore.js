import { create } from 'zustand'

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,
  loadingStartTime: Date.now(), // 記錄載入開始時間
  
  setUser: (user) => set({ user }),
  setLoading: (loading) => {
    if (!loading) {
      // 確保最少載入 2 秒鐘，讓用戶看到 SplashScreen
      const minLoadingTime = 2000 // 2秒
      const elapsedTime = Date.now() - get().loadingStartTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
      
      if (remainingTime > 0) {
        setTimeout(() => {
          set({ loading: false })
        }, remainingTime)
      } else {
        set({ loading: false })
      }
    } else {
      set({ loading, loadingStartTime: Date.now() })
    }
  },
  
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