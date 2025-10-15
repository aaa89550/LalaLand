/**
 * Android PWA 拖曳修復腳本
 * 防止 Android 設備上 PWA 拖曳導致啟動器崩潰
 */

(function() {
  'use strict';
  
  // 檢測環境
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isPWA = isStandalone || (window.navigator.standalone === true);
  
  console.log('🔍 環境檢測:', {
    isAndroid,
    isStandalone,
    isPWA,
    userAgent: navigator.userAgent
  });
  
  // 只在 Android PWA 環境中啟用修復
  if (isAndroid && isPWA) {
    console.log('🛡️ 啟用 Android PWA 拖曳保護');
    
    // 防止拖曳事件
    const preventDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    // 防止選取事件（除了輸入框）
    const preventSelect = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      const inputTags = ['input', 'textarea', 'select'];
      
      if (!inputTags.includes(tagName)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    
    // 添加拖曳保護事件監聽器
    document.addEventListener('dragstart', preventDrag, { passive: false, capture: true });
    document.addEventListener('drag', preventDrag, { passive: false, capture: true });
    document.addEventListener('dragend', preventDrag, { passive: false, capture: true });
    document.addEventListener('dragenter', preventDrag, { passive: false, capture: true });
    document.addEventListener('dragover', preventDrag, { passive: false, capture: true });
    document.addEventListener('dragleave', preventDrag, { passive: false, capture: true });
    document.addEventListener('drop', preventDrag, { passive: false, capture: true });
    
    // 防止文字選取（保留輸入框功能）
    document.addEventListener('selectstart', preventSelect, { passive: false, capture: true });
    
    // 觸摸事件優化
    let lastTouchTime = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
      const now = Date.now();
      lastTouchTime = now;
      touchStartY = e.touches[0].clientY;
      
      // 防止多點觸控導致的問題
      if (e.touches.length > 1) {
        e.preventDefault();
        return false;
      }
    }, { passive: false });
    
    document.addEventListener('touchmove', (e) => {
      const currentY = e.touches[0].clientY;
      const diff = touchStartY - currentY;
      
      // 防止下拉刷新和上拉關閉手勢
      if (Math.abs(diff) > 50) {
        // 在頁面頂部時防止下拉
        if (diff < 0 && window.scrollY <= 5) {
          e.preventDefault();
          return false;
        }
        
        // 在頁面底部時防止上拉
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10);
        if (diff > 0 && isAtBottom) {
          e.preventDefault();
          return false;
        }
      }
    }, { passive: false });
    
    // 防止長按選單
    document.addEventListener('contextmenu', (e) => {
      // 允許在輸入框中使用右鍵選單
      const tagName = e.target.tagName.toLowerCase();
      const inputTags = ['input', 'textarea'];
      
      if (!inputTags.includes(tagName)) {
        e.preventDefault();
        return false;
      }
    }, { passive: false });
    
    // 防止意外的手勢識別
    let gestureStartTime = 0;
    let gestureStartX = 0;
    let gestureStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        gestureStartTime = Date.now();
        gestureStartX = e.touches[0].clientX;
        gestureStartY = e.touches[0].clientY;
      }
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      const duration = Date.now() - gestureStartTime;
      const touch = e.changedTouches[0];
      const deltaX = Math.abs(touch.clientX - gestureStartX);
      const deltaY = Math.abs(touch.clientY - gestureStartY);
      
      // 檢測快速滑動手勢並阻止
      if (duration < 300 && (deltaX > 100 || deltaY > 100)) {
        e.preventDefault();
        return false;
      }
    }, { passive: false });
    
    // 添加 CSS 樣式來強化防拖曳
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-app-region: no-drag !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
      }
      
      input, textarea, select, [contenteditable] {
        -webkit-user-select: text !important;
        user-select: text !important;
      }
      
      body {
        -webkit-text-size-adjust: none !important;
        touch-action: manipulation !important;
        overscroll-behavior: none !important;
        -webkit-overflow-scrolling: touch !important;
      }
      
      /* 防止圖片被拖曳 */
      img {
        -webkit-user-drag: none !important;
        pointer-events: none !important;
      }
      
      /* 允許按鈕點擊 */
      button, a, [role="button"] {
        pointer-events: auto !important;
      }
      
      /* 允許輸入框交互 */
      input, textarea, select {
        pointer-events: auto !important;
      }
    `;
    
    document.head.appendChild(style);
    
    console.log('✅ Android PWA 拖曳保護已啟用');
    
    // 監聽頁面可見性變化
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('📱 應用程式進入背景');
      } else {
        console.log('📱 應用程式返回前景');
      }
    });
    
    // 監聽視窗大小變化（可能的旋轉）
    window.addEventListener('orientationchange', () => {
      console.log('🔄 螢幕方向改變');
      // 短暫延遲後重新檢查環境
      setTimeout(() => {
        console.log('📐 新的視窗尺寸:', window.innerWidth, 'x', window.innerHeight);
      }, 500);
    });
    
  } else {
    console.log('ℹ️ 非 Android PWA 環境，跳過拖曳保護');
  }
  
  // 提供全域除錯方法
  window.pwaDebug = {
    checkEnvironment: () => ({
      isAndroid,
      isStandalone,
      isPWA,
      userAgent: navigator.userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      orientation: screen.orientation?.type || 'unknown'
    }),
    
    testTouch: () => {
      console.log('🧪 觸摸測試 - 請嘗試拖曳螢幕');
      let testCount = 0;
      
      const testHandler = (e) => {
        testCount++;
        console.log(`觸摸事件 ${testCount}:`, e.type, {
          touches: e.touches?.length || 0,
          prevented: e.defaultPrevented
        });
        
        if (testCount >= 10) {
          document.removeEventListener('touchstart', testHandler);
          document.removeEventListener('touchmove', testHandler);
          document.removeEventListener('touchend', testHandler);
          console.log('✅ 觸摸測試完成');
        }
      };
      
      document.addEventListener('touchstart', testHandler);
      document.addEventListener('touchmove', testHandler);
      document.addEventListener('touchend', testHandler);
    }
  };
  
})();