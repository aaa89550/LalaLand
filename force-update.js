// 強制清除快取並重新載入
(function() {
  console.log('🔄 開始強制更新流程...');
  
  // 1. 清除 Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister().then(function(success) {
          console.log('✅ Service Worker 已移除:', success);
        });
      }
    });
  }
  
  // 2. 清除所有快取
  if ('caches' in window) {
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name).then(function(success) {
          console.log('✅ 快取已清除:', name, success);
        });
      }
    });
  }
  
  // 3. 清除 localStorage
  try {
    localStorage.clear();
    console.log('✅ localStorage 已清除');
  } catch (e) {
    console.log('⚠️ 無法清除 localStorage:', e);
  }
  
  // 4. 清除 sessionStorage  
  try {
    sessionStorage.clear();
    console.log('✅ sessionStorage 已清除');
  } catch (e) {
    console.log('⚠️ 無法清除 sessionStorage:', e);
  }
  
  console.log('✅ 快取清除完成，3秒後重新載入...');
  
  // 5. 強制重新載入（帶時間戳避免快取）
  setTimeout(function() {
    window.location.href = window.location.origin + '/?_t=' + Date.now();
  }, 3000);
})();
