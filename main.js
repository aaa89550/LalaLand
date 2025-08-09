// 🚨 最基本的載入測試 - 放在文件最頂部
console.log('🚀 MAIN.JS LOADED - JavaScript is working!');
console.log('📅 Current time:', new Date().toLocaleString());
console.log('📱 User agent:', navigator.userAgent);
console.log('🌐 Window size:', window.innerWidth, 'x', window.innerHeight);

// 添加全域錯誤處理
window.addEventListener('error', (e) => {
  console.error('🚨 JavaScript Error:', e.error, e.message, e.filename, e.lineno);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('🚨 Unhandled Promise Rejection:', e.reason);
});

// 嘗試修正 CORB 問題 - 使用動態 import
let firebaseLoaded = false;
let db, auth, storage;

async function loadFirebase() {
  try {
    console.log('🔄 開始載入 Firebase...');
    
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const firebaseDb = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js");
    const firebaseStorage = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
    const firebaseAuth = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
    
    console.log('✅ Firebase 模組載入成功');
    
    // Firebase configuration - 使用正確的配置
    firebaseConfig = {
      apiKey: "AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",
      authDomain: "lalaland-24931.firebaseapp.com",
      databaseURL: "https://lalaland-24931-default-rtdb.firebaseio.com",
      projectId: "lalaland-24931",
      storageBucket: "lalaland-24931.firebasestorage.app",
      messagingSenderId: "45134876312",
      appId: "1:45134876312:web:9e33e46c54cb7c9bfc8aed",
      measurementId: "G-M04NRCY9FQ"
    };
    
    app = initializeApp(firebaseConfig);
    db = firebaseDb.getDatabase(app);
    auth = firebaseAuth.getAuth(app);
    storage = firebaseStorage.getStorage(app);
    
    // 匯出所有需要的函數到全域範圍
    window.firebaseDb = firebaseDb;
    window.firebaseStorage = firebaseStorage;
    window.firebaseAuth = firebaseAuth;
    window.db = db;
    window.auth = auth;
    window.storage = storage;
    
    // 匯出 Firebase Auth 函數到全域範圍
    window.signInWithEmailAndPassword = firebaseAuth.signInWithEmailAndPassword;
    window.createUserWithEmailAndPassword = firebaseAuth.createUserWithEmailAndPassword;
    window.sendPasswordResetEmail = firebaseAuth.sendPasswordResetEmail;
    window.signOut = firebaseAuth.signOut;
    window.onAuthStateChanged = firebaseAuth.onAuthStateChanged;
    
    // 匯出 Firebase Database 函數到全域範圍
    window.ref = firebaseDb.ref;
    window.get = firebaseDb.get;
    window.set = firebaseDb.set;
    window.push = firebaseDb.push;
    window.onValue = firebaseDb.onValue;
    window.update = firebaseDb.update;
    window.child = firebaseDb.child;
    window.onChildAdded = firebaseDb.onChildAdded;
    window.onChildChanged = firebaseDb.onChildChanged;
    window.onDisconnect = firebaseDb.onDisconnect;
    window.query = firebaseDb.query;
    window.limitToLast = firebaseDb.limitToLast;
    window.orderByKey = firebaseDb.orderByKey;
    window.runTransaction = firebaseDb.runTransaction;
    window.off = firebaseDb.off;
    
    // 匯出 Firebase Storage 函數到全域範圍
    window.uploadBytes = firebaseStorage.uploadBytes;
    window.getDownloadURL = firebaseStorage.getDownloadURL;
    window.storageRef = firebaseStorage.ref;
    
    firebaseLoaded = true;
    console.log('🎉 Firebase 初始化完成，所有函數已匯出到全域範圍');
    
    // 繼續執行應用程式初始化
    initializeApp();
    
  } catch (error) {
    console.error('❌ Firebase 載入失敗:', error);
    alert('Firebase 載入失敗，請重新整理頁面');
  }
}

// 主應用程式初始化函數
function initializeApp() {
  console.log('🚀 應用程式初始化中...');
  
  // 等待 DOM 完全載入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApplication);
  } else {
    setupApplication();
  }
}

// 設置應用程式功能
function setupApplication() {
  console.log('📱 設置應用程式功能...');
  
  // 檢查是否在登入頁面
  const isLoginPage = document.getElementById('login-form') && document.getElementById('register-form');
  console.log('🔍 登入頁面檢測:', isLoginPage);
  
  if (isLoginPage) {
    setupLoginPage();
  }
  
  // 只有在 Firebase 完全載入後才設置認證監聽器
  if (firebaseLoaded && typeof window.onAuthStateChanged !== 'undefined' && auth) {
    console.log('🔐 設置認證狀態監聽器...');
    window.onAuthStateChanged(auth, (user) => {
      console.log('🔐 認證狀態變更:', user ? '已登入' : '未登入');
      if (user) {
        console.log('👤 用戶ID:', user.uid);
        console.log('📧 用戶Email:', user.email);
        
        // 如果在登入頁面且有 sessionStorage 標記，則跳轉
        if (window.location.pathname.includes('login.html') && 
            sessionStorage.getItem('isLoginRedirect') === 'true') {
          sessionStorage.removeItem('isLoginRedirect');
          window.location.href = "announce.html";
        }
      }
    });
  } else {
    console.log('⏳ Firebase 尚未載入完成，稍後再設置認證監聽器');
    // 稍後再嘗試設置認證監聽器
    setTimeout(() => {
      if (firebaseLoaded && typeof window.onAuthStateChanged !== 'undefined' && auth) {
        console.log('🔐 延遲設置認證狀態監聽器...');
        window.onAuthStateChanged(auth, (user) => {
          console.log('🔐 認證狀態變更:', user ? '已登入' : '未登入');
          if (user) {
            console.log('👤 用戶ID:', user.uid);
            console.log('📧 用戶Email:', user.email);
            
            // 如果在登入頁面且有 sessionStorage 標記，則跳轉
            if (window.location.pathname.includes('login.html') && 
                sessionStorage.getItem('isLoginRedirect') === 'true') {
              sessionStorage.removeItem('isLoginRedirect');
              window.location.href = "announce.html";
            }
          }
        });
      }
    }, 1000);
  }
  
  console.log('✅ 應用程式初始化完成');
  
  // 確保全域函數可用
  if (typeof window.switchChatRoom === 'function') {
    console.log('✅ switchChatRoom 函數已準備就緒');
  } else {
    console.error('❌ switchChatRoom 函數未正確載入');
  }
}

// 設置登入頁面功能
function setupLoginPage() {
  console.log('🔐 設置登入頁面功能...');
  
  // Tab 切換邏輯
  const loginTabBtn = document.getElementById('login-tab-btn');
  const registerTabBtn = document.getElementById('register-tab-btn');
  const loginPage = document.getElementById('login-page');
  const registerPage = document.getElementById('register-page');
  
  if (loginTabBtn) loginTabBtn.onclick = () => switchTab('login');
  if (registerTabBtn) registerTabBtn.onclick = () => switchTab('register');
  
  function switchTab(tab) {
    if (!loginTabBtn || !registerTabBtn || !loginPage || !registerPage) {
      console.error('⚠️ 找不到必要的登入頁面元素');
      return;
    }
    loginTabBtn.classList.remove('active');
    registerTabBtn.classList.remove('active');
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    
    if(tab==='login'){
      loginTabBtn.classList.add('active');
      loginPage.style.display = 'block';
    } else if(tab==='register'){
      registerTabBtn.classList.add('active');
      registerPage.style.display = 'block';
    }
  }
  
  // 🔐 登入邏輯  
  const loginForm = document.getElementById('login-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('🔐 登入表單提交');
      
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      
      if (!email || !password) {
        alert('請輸入帳號與密碼');
        return;
      }
      
      console.log('📧 嘗試登入:', email);
      
      // 檢查 Firebase 是否已載入
      if (!firebaseLoaded || !auth || typeof window.signInWithEmailAndPassword === 'undefined') {
        console.log('⏳ Firebase 尚未載入完成，等待...');
        alert('系統初始化中，請稍後再試');
        return;
      }
      
      try {
        console.log('🔐 開始驗證用戶...');
        const userCredential = await window.signInWithEmailAndPassword(auth, email, password);
        console.log('✅ 登入成功:', userCredential.user.uid);
        
        // 設置跳轉標記
        sessionStorage.setItem('isLoginRedirect', 'true');
        window.location.href = "announce.html";
        
      } catch (error) {
        console.error('❌ 登入失敗:', error);
        let errorMessage = '登入失敗';
        
        switch(error.code) {
          case 'auth/user-not-found':
            errorMessage = '找不到此帳號';
            break;
          case 'auth/wrong-password':
            errorMessage = '密碼錯誤';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Email 格式不正確';
            break;
          case 'auth/too-many-requests':
            errorMessage = '登入嘗試次數過多，請稍後再試';
            break;
          default:
            errorMessage = `登入失敗: ${error.message}`;
        }
        
        alert(errorMessage);
      }
    });
    
    console.log('✅ 登入表單事件監聽器已設置');
  } else {
    console.warn('⚠️ 找不到登入表單');
  }
  
  console.log('✅ 登入頁面設置完成');
}

// Firebase 變數將在動態載入後設置
let firebaseConfig, app;

// 狀態
let currentUser = null;
let currentChat = null;
let currentPrivateUid = null;
let currentGroupRoom = 'chat';  // 預設聊天室
let privateChatRef = null;
let privateChatListener = null;
let privateChatTarget = null;
let groupChatRef = null;
let groupChatListener = null;
let chatListener = null;
let chatRef = null;
let currentReplyMsgId = null;
let currentPrivateRoomId = null; // 當前私訊房間ID
let currentChatRoom = null; // 當前聊天室
let privateChatNotificationRefs = {};
let privateChatNotificationStates = {};
let usersSnapshot = {};
let friendsSnapshot = {};
let messageMap = {};
let renderedMessageIds = new Set();
let voteUpdateListener = null;
let voteUpdateRef = null;
// 私訊通知相關變數
let globalPrivateMessageListeners = new Map(); // 存儲所有私訊監聽器
let activeNotifications = new Map(); // 存儲活動的通知
let lastNotificationTime = 0; // 防止通知過於頻繁


function clearChat() {
  document.getElementById('chat').innerHTML = '';
  renderedMessageIds.clear(); // 每次清空聊天室時，也清空已渲染的訊息ID追蹤
}

// 移除 initializeGroupChatsIfAuthed 相關內容，避免重複 onAuthStateChanged

function switchChat(newChatId) {
  // 停用所有監聽器
  stopAllListeners();

  // 清空畫面和已渲染訊息ID
  clearChat();

  currentChat = newChatId;

  // 設定新的路徑
  if (currentChat.startsWith("group_")) {
    const room = currentGroupRoom || "chat";
    chatRef = ref(db, `groupChats/${room}/messages`);
  } else {
    const ids = [currentUser.uid, currentChat].sort();
    chatRef = ref(db, `privateChats/${ids[0]}_${ids[1]}/messages`);
  }

  // 設定新的監聽器
  chatListener = onChildAdded(chatRef, (snap) => {
    const msg = snap.val();
    const msgId = snap.key;
    if (!renderedMessageIds.has(msgId)) {
      renderedMessageIds.add(msgId);
      appendMessage(msg, msgId);
    }
  });
}

// 展開 / 收合桌機群組聊天室選單
const desktopGroupToggleBtn = document.getElementById('group-chat-list-btn');
const desktopGroupArea = document.getElementById('group-chat-area');

if (desktopGroupToggleBtn && desktopGroupArea) {
  desktopGroupToggleBtn.addEventListener('click', () => {
    desktopGroupArea.style.display =
      desktopGroupArea.style.display === 'none' ? 'block' : 'none';
  });
}

const mobileGroupToggleBtn = document.getElementById('group-chat-list-btn-mobile');
const mobileGroupArea = document.getElementById('group-chat-area-mobile');

if (mobileGroupToggleBtn && mobileGroupArea) {
  mobileGroupToggleBtn.addEventListener('click', () => {
    mobileGroupArea.style.display =
      mobileGroupArea.style.display === 'none' ? 'block' : 'none';
  });
}

// 初始化聊天標籤事件處理器
function initChatTabsEventHandlers() {
  console.log('🔧 初始化聊天標籤事件處理器');
  
  // 移除舊的事件監聽器
  document.querySelectorAll('.chat-tab').forEach(tab => {
    const newTab = tab.cloneNode(true);
    tab.parentNode.replaceChild(newTab, tab);
  });
  
  // 重新綁定事件
  document.querySelectorAll('.chat-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const room = tab.dataset.room;
      console.log('🏷️ 點擊聊天標籤:', room);
      
      if (!room) {
        console.error('❌ 標籤沒有room屬性');
        return;
      }
      
      // 移除所有標籤的active狀態
      document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active'));
      
      if (room === 'private') {
        // 顯示私訊列表
        console.log('📱 載入私訊列表');
        loadPrivateMessages();
        tab.classList.add('active');
        tab.classList.remove('has-unread');
      } else {
        // 載入群組聊天
        console.log('🗨️ 載入群組聊天:', room);
        loadGroupChat(room);
        tab.classList.add('active');
      }
      
      // 收起手機版UI
      document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
      document.getElementById('group-chat-area-mobile')?.style.setProperty('display', 'none');
    });
  });
  
  console.log('✅ 聊天標籤事件處理器綁定完成');
}

// 初始化其他聊天室按鈕（側邊欄和手機版）
function initOtherChatButtons() {
  console.log('🔧 初始化其他聊天室按鈕');
  
  document.querySelectorAll('.group-chat-item, .group-chat-option').forEach(el => {
    if (!el.dataset.listenerAdded) {
      el.addEventListener('click', () => {
        const room = el.dataset.room;
        console.log('🏠 點擊側邊欄聊天按鈕:', room);
        if (room && room !== 'private') {
          loadGroupChat(room);
          // 同步更新標籤狀態
          document.querySelectorAll('.chat-tab').forEach(tab => tab.classList.remove('active'));
          document.querySelector(`.chat-tab[data-room="${room}"]`)?.classList.add('active');
        }
        
        // 收起手機版UI
        document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
        document.getElementById('group-chat-area-mobile')?.style.setProperty('display', 'none');
      });
      el.dataset.listenerAdded = 'true';
    }
  });
}

const groupToggle = document.getElementById('group-chat-toggle');
const groupList = document.getElementById('group-chat-list');

groupToggle?.addEventListener('click', () => {
  if (groupList.style.display === 'none') {
    groupList.style.display = 'block';
    groupToggle.innerText = '群組聊天室 ▴';
  } else {
    groupList.style.display = 'none';
    groupToggle.innerText = '群組聊天室 ▾';
  }
});

// ✅ 停用所有監聽器（群組／私聊）
function stopAllListeners() {
  // 清理群組聊天監聽器
  if (groupChatRef && groupChatListener) {
    off(groupChatRef, 'child_added', groupChatListener);
    groupChatListener = null;
    groupChatRef = null;
  }

  // 清理私聊監聽器
  if (privateChatRef && privateChatListener) {
    off(privateChatRef, 'child_added', privateChatListener);
    privateChatListener = null;
    privateChatRef = null;
  }

  // 清理通用聊天監聽器
  if (chatRef && chatListener) {
    off(chatRef, 'child_added', chatListener);
    chatListener = null;
    chatRef = null;
  }

  // 清理投票更新監聽器
  if (voteUpdateRef && voteUpdateListener) {
    off(voteUpdateRef, 'child_changed', voteUpdateListener);
    voteUpdateListener = null;
    voteUpdateRef = null;
  }

  // 清理全域私訊監聽器
  stopGlobalPrivateMessageMonitoring();
}

// 初始化已載入聊天室的 Set
const loadedRooms = new Set();


function loadGroupChat(room) {
    console.log('🗨️ loadGroupChat被調用:', room);
    localStorage.setItem('lastGroupRoom', room);

    stopAllListeners();
    clearChat(); // 先清空聊天室，並清除已渲染的訊息ID

    currentChat = "group_" + room;
    currentGroupRoom = room;

    const titleMap = {
        chat: "", // 閒聊區不顯示標題
        love: "找伴區",
        sex: "約炮區"
    };

    const tipMap = {
        chat: "歡迎隨意聊聊、發問、抒發生活大小事。",
        love: "你正在找伴專區，請多用心互動，彼此尊重。",
        sex: "匿名聊性、約炮自由，但請勿冒犯他人。"
    };

    // 移除對 chat-title 的引用，因為該元素已被移除
    // 只設置提示文字
    const tipEl = document.getElementById('chat-tip');
    if (tipEl) {
        tipEl.style.display = 'block';
        tipEl.textContent = tipMap[room] || '';
    }

    highlightUserList?.(); // 確保使用者列表高亮功能正常
    listenToVoteUpdates(room);
    
    const groupPath = `groupChats/${room}/messages`;
    // 針對群組聊天室，我們通常會載入最後 N 條訊息
    groupChatRef = query(ref(db, groupPath), limitToLast(200));

    // 先載入歷史訊息
    get(groupChatRef).then(snapshot => {
        snapshot.forEach(childSnap => {
            const msgId = childSnap.key;
            // 由於 renderedMessageIds 已經在 clearChat() 中清空，這裡可以直接添加
            // 但為保險起見，可以加一個檢查，防止極端情況下的重複渲染
            if (!renderedMessageIds.has(msgId)) {
                renderedMessageIds.add(msgId);
                appendMessage?.(childSnap.val(), msgId);
            }
        });

        // 載入完歷史訊息後，再設定即時監聽器，只監聽之後新增的訊息
        // 這樣可以避免 onChildAdded 再次觸發已讀取的歷史訊息
        groupChatListener = onChildAdded(groupChatRef, snap => {
            const msgId = snap.key;
            // 由於 get() 已經處理過歷史訊息，這裡只處理新增的訊息
            // 但 Firebase 的 onChildAdded 在第一次連接時可能會觸發所有現有子節點
            // 所以保留這個檢查仍是好的實踐
            if (!renderedMessageIds.has(msgId)) {
                renderedMessageIds.add(msgId);
                appendMessage?.(snap.val(), msgId);
            }
        });
    }).catch(error => {
        console.error(`Error loading group chat history for ${room}:`, error);
        // 如果載入歷史訊息失敗，仍然設置監聽器以接收新訊息
        groupChatListener = onChildAdded(groupChatRef, snap => {
            const msgId = snap.key;
            if (!renderedMessageIds.has(msgId)) {
                renderedMessageIds.add(msgId);
                appendMessage?.(snap.val(), msgId);
            }
        });
    });


    // 收起 UI 元素 (保持不變)
    document.getElementById('group-chat-options')?.style.setProperty('display', 'none');
    document.getElementById('group-chat-options-mobile')?.style.setProperty('display', 'none');
    document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
    document.getElementById('group-chat-area-mobile')?.style.setProperty('display', 'none');
}

// 加載好友列表功能
function loadFriendsList() {
    stopAllListeners();
    clearChat();
    
    currentChat = "friends";
    
    // 設置提示
    const tipEl = document.getElementById('chat-tip');
    tipEl.style.display = 'block';
    tipEl.textContent = '點選好友開始私人對話';
    
    // 顯示好友列表在聊天區域
    displayFriendsInChat();
    
    // 添加窗口大小變化監聽器，重新載入好友列表以隱藏/顯示聊天按鈕
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (currentChat === "friends") {
                displayFriendsInChat();
            }
        }, 250);
    };
    
    // 移除舊的監聽器並添加新的
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);
}

// 在聊天區域顯示好友列表
function displayFriendsInChat() {
    const user = auth.currentUser;
    if (!user) return;
    
    const chatContainer = document.getElementById('chat');
    chatContainer.innerHTML = '<div style="text-align: center; color: #999; padding: 20px;">載入好友列表中...</div>';
    
    // 從Firebase獲取好友列表 - 修正路徑與addFriend函數一致
    const friendsRef = ref(db, `users/${user.uid}/friends`);
    onValue(friendsRef, (snapshot) => {
        const friends = snapshot.val() || {};
        displayFriends(Object.keys(friends));
    });
}

// 顯示好友列表
function displayFriends(friendIds) {
    const chatContainer = document.getElementById('chat');
    console.log('💫 displayFriends called with', friendIds.length, 'friends:', friendIds);
    
    if (friendIds.length === 0) {
        chatContainer.innerHTML = `
            <div style="text-align: center; color: #999; padding: 40px;">
                <p>還沒有好友</p>
                <p style="font-size: 12px;">在聊天室中點擊其他用戶頭像可以加為好友</p>
            </div>
        `;
        return;
    }
    
    chatContainer.innerHTML = '<div style="padding: 10px;"><h4 style="margin: 0 0 15px 0; color: var(--sea-blue); background: linear-gradient(135deg, var(--sea-light), var(--accent-green)); padding: 8px; border-radius: 6px; text-align: center;">👥 我的好友</h4></div>';
    
    friendIds.forEach(friendId => {
        console.log('🔍 Loading friend data for:', friendId);
        // 使用 get 而不是 onValue 避免重複監聽器
        const userRef = ref(db, `users/${friendId}`);
        get(userRef).then((snapshot) => {
            const friendData = snapshot.val();
            console.log('📥 Friend data received for', friendId, ':', friendData);
            if (friendData) {
                addFriendToList(friendId, friendData);
            } else {
                console.warn('⚠️ No data found for friend:', friendId);
            }
        }).catch(error => {
            console.error('❌ Error loading friend data for', friendId, ':', error);
        });
    });
    
    // 檢查容器內容
    setTimeout(() => {
        console.log('🔍 Final chat container content:', chatContainer.innerHTML);
        const friendItems = chatContainer.querySelectorAll('[data-friend-click]');
        console.log('🔍 Found', friendItems.length, 'friend items with data-friend-click');
        friendItems.forEach((item, index) => {
            console.log(`🔍 Friend item ${index}:`, item, 'data-friend-click:', item.getAttribute('data-friend-click'));
        });
    }, 2000);
}

// 添加好友到列表
function addFriendToList(friendId, friendData) {
    const chatContainer = document.getElementById('chat');
    const existingFriend = chatContainer.querySelector(`[data-friend-id="${friendId}"]`);
    
    console.log('➕ Adding friend to list:', friendId, friendData);
    
    if (existingFriend) {
        console.log('⚠️ Friend already exists in list:', friendId);
        return; // 避免重複添加
    }
    
    const friendDiv = document.createElement('div');
    friendDiv.className = 'friend-item';
    friendDiv.setAttribute('data-friend-id', friendId);
    
    // 檢查是否為手機版
    const isMobile = window.innerWidth <= 600;
    console.log('📱 Mobile check for friend', friendId, '- isMobile:', isMobile, 'width:', window.innerWidth);
    const chatButtonHtml = isMobile ? '' : `<button onclick="event.stopPropagation(); window.startPrivateChat('${friendId}')" class="desktop-only" style="background: linear-gradient(135deg, var(--sea-blue), var(--accent-green)); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: transform 0.2s ease;">💬 聊天</button>`;
    
    friendDiv.innerHTML = `
        <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #f8f9fa, #e3f2fd); border: 2px solid var(--accent-green); border-radius: 12px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.1);" data-friend-click="${friendId}">
            <img src="${friendData.avatar || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E'}" 
                 style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px; object-fit: cover; border: 3px solid var(--accent-green); box-shadow: 0 2px 4px rgba(0,0,0,0.2);" data-friend-click="${friendId}">
            <div style="flex: 1;" data-friend-click="${friendId}">
                <div style="font-weight: 700; color: var(--sea-dark); margin-bottom: 4px; font-size: 16px;" data-friend-click="${friendId}">👥 ${friendData.nickname || '匿名用戶'}</div>
                <div style="font-size: 12px; color: #666; display: flex; align-items: center;" data-friend-click="${friendId}">
                    <span style="color: var(--accent-green); margin-right: 4px;" data-friend-click="${friendId}">●</span>好友
                </div>
            </div>
            ${chatButtonHtml}
        </div>
    `;
    
    // 添加直接的 onclick 屬性作為備用
    friendDiv.setAttribute('onclick', `console.log('🎯 ONCLICK BACKUP triggered for ${friendId}'); startPrivateChat('${friendId}');`);
    
    // 使用更強大的事件處理 - 移除 preventDefault 以避免與全域事件衝突
    friendDiv.addEventListener('click', (e) => {
        console.log('👆 Friend clicked (direct):', friendId, 'target:', e.target);
        // 讓全域事件處理器來處理，不要在這裡阻止事件
        // e.preventDefault();
        // e.stopPropagation();
        // startPrivateChat(friendId);
    });
    
    // 移除直接的觸摸事件，讓全域處理器統一處理
    // friendDiv.addEventListener('touchend', (e) => {
    //     console.log('📱 Friend touched (direct):', friendId);
    //     e.preventDefault();
    //     e.stopPropagation();
    //     startPrivateChat(friendId);
    // });
    
    chatContainer.appendChild(friendDiv);
    console.log('✅ Friend added to DOM:', friendId);
    
    // 確認元素已正確添加並有正確的屬性
    setTimeout(() => {
        const addedElement = chatContainer.querySelector(`[data-friend-id="${friendId}"]`);
        if (addedElement) {
            console.log('✅ Element verification - found in DOM with data-friend-click:', addedElement.querySelector('[data-friend-click]'));
        } else {
            console.error('❌ Element verification - NOT found in DOM');
        }
    }, 100);
}

// 開始私人對話
window.startPrivateChat = function(friendId) {
    console.log('🚀 startPrivateChat called with friendId:', friendId);
    console.log('👤 currentUser:', currentUser);
    
    if (!friendId || !currentUser) {
        console.error('❌ startPrivateChat failed - missing friendId or currentUser');
        return;
    }
    
    console.log('🔄 開始與好友聊天:', friendId);
    
    // 生成聊天室ID（使用較小的uid在前）
    const roomId = currentUser.uid < friendId 
        ? `${currentUser.uid}_${friendId}` 
        : `${friendId}_${currentUser.uid}`;
    
    console.log('🏠 Generated roomId:', roomId);
    
    // 獲取好友暱稱並進入聊天室
    get(ref(db, `users/${friendId}/nickname`)).then((snapshot) => {
        const friendNickname = snapshot.val() || '好友';
        console.log('👋 Friend nickname:', friendNickname);
        enterRoom(roomId, `與${friendNickname}的對話`);
    }).catch((error) => {
        console.error('⚠️ Error getting friend nickname:', error);
        enterRoom(roomId, '私人對話');
    });
};

// 進入私人聊天室函數
window.enterRoom = function(roomId, title) {
    console.log('🔄 進入聊天室:', roomId, title);
    
    // 退出手機版好友模式，顯示聊天相關元素
    document.body.classList.remove('mobile-friends-mode');
    
    // 切換到私訊標籤
    const privateTab = document.querySelector('.chat-tab[data-room="private"]');
    if (privateTab) {
        document.querySelectorAll('.chat-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        privateTab.classList.add('active');
    }
    
    // 設置當前聊天室
    currentChatRoom = 'private';
    currentPrivateRoomId = roomId;
    
    // 更新聊天區域標題
    const chatTitleEl = document.getElementById('chat-title');
    if (chatTitleEl) {
        chatTitleEl.textContent = title;
    }
    
    // 載入該聊天室的訊息
    loadPrivateMessages(roomId);
    
    // 關閉手機版側邊欄
    if (typeof closeMobileSidebar === 'function') {
        closeMobileSidebar();
    }
};

// 加載私訊列表功能
function loadPrivateMessages(specificRoomId = null) {
    stopAllListeners();
    clearChat();
    
    currentChat = "private";
    
    if (specificRoomId) {
        // 加載特定聊天室的訊息
        currentPrivateRoomId = specificRoomId;
        loadSpecificPrivateChat(specificRoomId);
    } else {
        // 顯示私訊列表
        // 設置提示
        const tipEl = document.getElementById('chat-tip');
        tipEl.style.display = 'block';
        tipEl.textContent = '點選對話開始私訊';
        
        // 顯示私訊列表在聊天區域
        displayPrivateMessagesInChat();
    }
}

// 加載特定私訊聊天室的訊息
function loadSpecificPrivateChat(roomId) {
    console.log('🔄 載入私訊聊天室:', roomId);
    
    // 停止所有監聽器
    stopAllListeners();
    
    // 隱藏提示
    const tipEl = document.getElementById('chat-tip');
    if (tipEl) tipEl.style.display = 'none';
    
    // 設置當前聊天狀態
    currentChat = 'private';
    currentPrivateRoomId = roomId;
    
    // 監聽該聊天室的訊息
    const messagesRef = ref(db, `privateChats/${roomId}/messages`);
    privateChatRef = messagesRef;
    privateChatListener = onValue(messagesRef, (snapshot) => {
        const messages = snapshot.val() || {};
        clearChat();
        
        // 按時間排序訊息
        const sortedMessages = Object.entries(messages)
            .map(([id, msg]) => ({ id, ...msg }))
            .sort((a, b) => a.time - b.time);
        
        // 顯示訊息
        sortedMessages.forEach(msg => {
            appendMessage(msg, msg.id);
        });
        
        // 滾動到底部
        const chatDiv = document.getElementById('chat');
        if (chatDiv) {
            chatDiv.scrollTop = chatDiv.scrollHeight;
        }
    });
    
    console.log('✅ 私訊聊天室監聽器已設置');
}

// 在聊天區域顯示私訊列表
function displayPrivateMessagesInChat() {
    const user = auth.currentUser;
    if (!user) return;
    
    const chatContainer = document.getElementById('chat');
    chatContainer.innerHTML = '<div style="text-align: center; color: #999; padding: 20px;">載入私訊列表中...</div>';
    
    console.log('📝 Loading private messages list for user:', user.uid);
    
    // 獲取所有私人聊天室
    const privateChatsRef = ref(db, 'privateChats');
    onValue(privateChatsRef, (snapshot) => {
        const privateChats = snapshot.val() || {};
        const userPrivateChats = [];
        
        console.log('💬 All private chats:', privateChats);
        
        // 篩選出包含當前用戶的聊天室並獲取真實的最新訊息時間
        const roomPromises = Object.keys(privateChats).map(roomId => {
            if (roomId.includes(user.uid)) {
                const otherUserId = roomId.replace(user.uid, '').replace('_', '');
                if (otherUserId && otherUserId !== user.uid) {
                    // 獲取該聊天室的最新訊息
                    return get(ref(db, `privateChats/${roomId}/messages`)).then(messagesSnapshot => {
                        const messages = messagesSnapshot.val() || {};
                        const messageValues = Object.values(messages);
                        
                        // 找出最新的訊息時間
                        let latestTime = 0;
                        let latestMessage = '';
                        
                        messageValues.forEach(msg => {
                            if (msg.time && msg.time > latestTime) {
                                latestTime = msg.time;
                                latestMessage = msg.text || '';
                            }
                        });
                        
                        console.log(`🕒 Room ${roomId} latest time:`, latestTime, 'message:', latestMessage);
                        
                        return {
                            roomId,
                            otherUserId,
                            lastMessage: latestMessage,
                            lastTime: latestTime,
                            messageCount: messageValues.length
                        };
                    }).catch(error => {
                        console.error(`❌ Error loading messages for room ${roomId}:`, error);
                        return {
                            roomId,
                            otherUserId,
                            lastMessage: '',
                            lastTime: 0,
                            messageCount: 0
                        };
                    });
                }
            }
            return Promise.resolve(null);
        }).filter(promise => promise !== null);
        
        // 等待所有聊天室資料載入完成
        Promise.all(roomPromises).then(chatDataArray => {
            const validChats = chatDataArray.filter(chat => chat !== null);
            
            // 按最新訊息時間排序（最新的在前）
            validChats.sort((a, b) => {
                const timeA = a.lastTime || 0;
                const timeB = b.lastTime || 0;
                return timeB - timeA;
            });
            
            console.log('📋 Sorted private chats by actual message time:', validChats);
            
            displayPrivateChats(validChats);
        });
    });
}

// 顯示私訊對話列表
function displayPrivateChats(privateChats) {
    const chatContainer = document.getElementById('chat');
    
    if (privateChats.length === 0) {
        chatContainer.innerHTML = `
            <div style="text-align: center; color: #999; padding: 40px;">
                <p>還沒有私訊對話</p>
                <p style="font-size: 12px;">點擊其他用戶開始私人對話</p>
            </div>
        `;
        return;
    }
    
    chatContainer.innerHTML = '<div style="padding: 10px;"><h4 style="margin: 0 0 15px 0; color: var(--sea-blue);">私訊對話</h4></div>';
    
    privateChats.forEach(chat => {
        // 獲取對方用戶資料
        const userRef = ref(db, `users/${chat.otherUserId}`);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                addPrivateChatToList(chat, userData);
            }
        }, { once: true });
    });
}

// 添加私訊對話到列表
function addPrivateChatToList(chat, userData) {
    const chatContainer = document.getElementById('chat');
    const existingChat = chatContainer.querySelector(`[data-room-id="${chat.roomId}"]`);
    
    if (existingChat) return; // 避免重複添加
    
    const lastMessageText = chat.lastMessage ? 
        (chat.lastMessage.length > 30 ? chat.lastMessage.substring(0, 30) + '...' : chat.lastMessage) : 
        '開始對話';
    
    const timeStr = chat.lastTime ? new Date(chat.lastTime).toLocaleString('zh-TW', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) : '';
    
    const chatDiv = document.createElement('div');
    chatDiv.className = 'private-chat-item';
    chatDiv.setAttribute('data-room-id', chat.roomId);
    chatDiv.innerHTML = `
        <div class="private-chat-content" style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-bottom: 8px; cursor: pointer; transition: background 0.2s ease;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
            <img src="${userData.avatar || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E'}" 
                 class="private-chat-avatar" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 12px; object-fit: cover; border: 2px solid var(--accent-green);" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
            <div style="flex: 1;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
                <div style="font-weight: 600; color: var(--sea-dark); margin-bottom: 2px;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${userData.nickname || '匿名用戶'}</div>
                <div style="font-size: 12px; color: #666; margin-bottom: 2px;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${lastMessageText}</div>
                <div style="font-size: 10px; color: #999;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${timeStr}</div>
            </div>
        </div>
    `;
    
    // 使用更強大的事件處理 - 移除 preventDefault 以避免與全域事件衝突
    chatDiv.addEventListener('click', (e) => {
        console.log('💬 Private chat clicked (direct):', chat.roomId);
        // 讓全域事件處理器來處理，不要在這裡阻止事件
        // e.preventDefault();
        // e.stopPropagation();
        // enterRoom(chat.roomId, `與${userData.nickname}的對話`);
    });
    
    // 移除直接的觸摸事件，讓全域處理器統一處理
    // chatDiv.addEventListener('touchend', (e) => {
    //     console.log('📱 Private chat touched (direct):', chat.roomId);
    //     e.preventDefault();
    //     e.stopPropagation();
    //     enterRoom(chat.roomId, `與${userData.nickname}的對話`);
    // });
    
    chatContainer.appendChild(chatDiv);
}


// 訊息渲染函式 appendMessage（含 vote 顯示與互動）
function escapeHTML(str) {
  return (str ?? '').replace(/[&<>"]/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

function appendMessage(msg, msgId) {
  if (msgId) messageMap[msgId] = msg;

  const chatDiv = document.getElementById('chat');
  const dt = new Date(msg.time || Date.now());
  const timeStr = dt.toLocaleTimeString();

  const div = document.createElement('div');
  const isMe = msg.from === currentUser.uid;
  div.className = 'msg' + (isMe ? ' me' : '');
  div.setAttribute('data-msgid', msgId);

  // 回覆摘要處理
  let replyHtml = '';
  if (msg.replyTo && messageMap[msg.replyTo]) {
    const original = messageMap[msg.replyTo];
    const preview = original.text.length > 5 ? original.text.slice(0, 30) + '...' : original.text;
    replyHtml = `
      <div class="reply-block">
        <span class="reply-nick">@${escapeHTML(original.user)}</span>
        <span class="reply-text">${escapeHTML(preview)}</span>
      </div>
    `;
  }

  // 主氣泡內容組裝
  let bubbleContent = replyHtml;
  let hasVoted = false;
  let votedIndex = -1;

  if (msg.type === 'vote') {
    bubbleContent += `<div class="vote-block"><strong>${escapeHTML(msg.question)}</strong><br>`;
    const hasVoted = msg.voters?.[currentUser.uid] !== undefined;
    const votedIndex = msg.voters?.[currentUser.uid];

    if (Array.isArray(msg.options)) {
      msg.options.forEach((opt, i) => {
        const label = escapeHTML(opt);
        if (hasVoted) {
          const isMyVote = i === votedIndex;
          bubbleContent += `<div class="vote-result ${isMyVote ? 'voted' : ''}">
            ${label} - ${msg.votes?.[i] ?? 0} 票
          </div>`;
        } else {
          bubbleContent += `<button class="vote-option" data-id="${msgId}" data-idx="${i}">${label}</button>`;
        }
      });
    } else {
      bubbleContent += `<div class="vote-error">⚠️ 投票資料缺失</div>`;
    }

    bubbleContent += `</div>`;
  } else {
    bubbleContent += linkify(msg.text);
  }

  if (msg.image) {
  bubbleContent += `<br><img src="${msg.image}" class="chat-image" style="max-width: 100%; border-radius: 6px; margin-top: 6px;" />`;
}

  // 主體 HTML 組裝
  div.innerHTML = `
    <img src="${msg.avatar || ''}" class="userpic" data-uid="${msg.from}" alt="點我私訊" title="點我私訊">
    <div>
      <span class="user">${escapeHTML(msg.user)}</span>
      <span class="timestamp">${timeStr}</span><br>
      <span class="bubble"></span>
      <button class="reply-btn" data-id="${msgId}" title="回覆">↩</button>
    </div>
  `;

  div.querySelector('.bubble').innerHTML = bubbleContent;
  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;

  // 綁定回覆按鈕
  const btn = div.querySelector('.reply-btn');
  if (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      setReplyTarget(msgId, msg);
    };
  }

  // 綁定頭像點擊事件（跳轉私訊）
  const avatar = div.querySelector('.userpic');
  if (avatar && msg.from !== currentUser.uid) {
    avatar.style.cursor = 'pointer';
    avatar.onclick = (e) => {
      e.stopPropagation();
      openPrivateChat(msg.from);
      document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
    };
  }

  if (msg.imageUrl) {
  bubbleContent += `<img src="${escapeHTML(msg.imageUrl)}" class="chat-image">`;
}

  // 綁定投票按鈕事件（僅尚未投票者）
  if (!hasVoted && msg.type === 'vote') {
    div.querySelectorAll('.vote-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const voteIndex = parseInt(btn.getAttribute('data-idx'));
        const id = btn.getAttribute('data-id');
        const votePath = `groupChats/chat/messages/${id}`;

        // 更新 Firebase 資料庫的 votes 和 voters 欄位
        update(ref(db, votePath), {
          [`votes/${voteIndex}`]: (msg.votes?.[voteIndex] || 0) + 1,
          [`voters/${currentUser.uid}`]: voteIndex
        });
      });
    });
  }
}


function listenToVoteUpdates(room = 'chat') {
  // 清除之前的投票更新監聽器
  if (voteUpdateRef && voteUpdateListener) {
    off(voteUpdateRef, 'child_changed', voteUpdateListener);
  }

  voteUpdateRef = ref(db, `groupChats/${room}/messages`);
  voteUpdateListener = onChildChanged(voteUpdateRef, (snap) => {
    const msg = snap.val();
    const msgId = snap.key;

    // 只有在當前聊天室才更新投票
    if (currentChat !== `group_${room}`) return;

    const msgDiv = document.querySelector(`[data-msgid="${msgId}"]`);
    if (!msgDiv) return;

    // 重新呼叫 appendMessage 前先移除舊的
    msgDiv.remove();
    // 從已渲染列表中移除，以便重新渲染
    renderedMessageIds.delete(msgId);

    // 重新渲染訊息（會自動顯示投票結果）
    appendMessage(msg, msgId);
  });
}

// ✅ 移除重複的預設進入聊天室邏輯（已在 onAuthStateChanged 中處理）

document.getElementById('group-chat-list-btn-mobile')?.addEventListener('click', () => {
  const area = document.getElementById('group-chat-area-mobile');
  area.style.display = (area.style.display === 'none') ? 'block' : 'none';
});


// 展開/收合手機版群組聊天室列表
document.getElementById('group-chat-list-btn-mobile')?.addEventListener('click', () => {
  const area = document.getElementById('group-chat-area-mobile');
  area.style.display = (area.style.display === 'none') ? 'block' : 'none';
});

// 點擊聊天室項目切換
document.querySelectorAll('#group-chat-list-mobile .group-chat-item').forEach(el => {
  el.addEventListener('click', () => {
    const room = el.dataset.room;
    loadGroupChat(room);
    // 收起手機 sidebar
    document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
  });
});

function listenAllUsers() {
  onValue(ref(db, 'users'), (snapshot) => {
    usersSnapshot = snapshot.val() || {};
    renderFriendList();
  });
}

function listenFriends() {
  onValue(ref(db, `users/${currentUser.uid}/friends`), (snapshot) => {
    friendsSnapshot = snapshot.val() || {};
    renderFriendList();
  });
}

function renderFriendList() {
  const friendList = document.getElementById('friend-list');           // 桌機
  const friendListMobile = document.getElementById('friend-list-mobile'); // 手機

  // 清空內容
  if (friendList) friendList.innerHTML = '';
  if (friendListMobile) friendListMobile.innerHTML = '';

  const friendUids = friendsSnapshot ? Object.keys(friendsSnapshot) : [];
  if (friendUids.length === 0) {
    if (friendList) friendList.innerHTML = '<li>你還沒有好友</li>';
    if (friendListMobile) friendListMobile.innerHTML = '<li>你還沒有好友</li>';
    return;
  }

  friendUids.forEach(friendUid => {
    const fuser = usersSnapshot[friendUid];
    if (!fuser) return;

    // 狀態小圓點
    const onlineDot = fuser.online
      ? `<span style="color:green;font-size:1.2em;">●</span>`
      : `<span style="color:gray;font-size:1.2em;">●</span>`;

    // 桌機版
    if (friendList) {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${fuser.avatar}" width="32" style="vertical-align:middle;">
        <span>${fuser.nickname}</span>
        ${onlineDot}
        <button class="remove-friend-btn" data-id="${friendUid}" title="解除好友">❌</button>
      `;
      li.style.cursor = "pointer";
      li.onclick = (e) => {
        if (e.target.classList.contains('remove-friend-btn')) return;
        openPrivateChat(friendUid);
      };
      friendList.appendChild(li);
    }

    // 手機版
    if (friendListMobile) {
      const liMobile = document.createElement('li');
      liMobile.innerHTML = `
      <img src="${fuser.avatar}">
      <span class="nickname">${fuser.nickname}</span>
      <span class="status-dot">${onlineDot}</span>
      <button class="remove-friend-btn" data-id="${friendUid}" title="解除好友">❌</button>
      `;
      liMobile.style.cursor = "pointer";
      liMobile.onclick = (e) => {
        if (e.target.classList.contains('remove-friend-btn')) return;
        openPrivateChat(friendUid);
        const drawer = document.getElementById('mobile-sidebar-drawer');
        if (drawer) drawer.classList.remove('open');
        document.body.style.overflow = '';
      };
      friendListMobile.appendChild(liMobile);
    }
  });

  
  // 綁定所有「解除好友」按鈕事件（桌機＋手機）
  document.querySelectorAll('.remove-friend-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation(); // 不觸發 li 的 onclick
      const friendUid = btn.dataset.id;
      if (confirm("確定要解除這位好友嗎？")) {
        removeFriend(friendUid);
      }
    };
  });
}

function removeFriend(friendUid) {
  if (!currentUser || !friendUid) return;
  set(ref(db, `users/${currentUser.uid}/friends/${friendUid}`), null)
    .then(() => set(ref(db, `users/${friendUid}/friends/${currentUser.uid}`), null))
    .then(() => alert('已解除好友'))
    .catch(err => alert('解除好友失敗：' + err.message));
}

// 只在 login.html 才執行登入/註冊/忘記密碼邏輯
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('login-form') && document.getElementById('register-form')) {
    // tab 切換
    const loginTabBtn = document.getElementById('login-tab-btn');
    const registerTabBtn = document.getElementById('register-tab-btn');
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
  if (loginTabBtn) loginTabBtn.onclick = () => switchTab('login');
  if (registerTabBtn) registerTabBtn.onclick = () => switchTab('register');
  const toRegisterBtn = document.getElementById('to-register-btn');
  if (toRegisterBtn) toRegisterBtn.onclick = () => switchTab('register');
  const toLoginBtn = document.getElementById('to-login-btn');
  if (toLoginBtn) toLoginBtn.onclick = () => switchTab('login');
  function switchTab(tab) {
    if (!loginTabBtn || !registerTabBtn || !loginPage || !registerPage) {
      console.warn('switchTab: 缺少必要的 DOM 元素');
      return;
    }
    loginTabBtn.classList.remove('active');
    registerTabBtn.classList.remove('active');
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    if(tab==='login'){
      loginTabBtn.classList.add('active');
      loginPage.style.display = 'block';
    }else if(tab==='register'){
      registerTabBtn.classList.add('active');
      registerPage.style.display = 'block';
    }
  }
  if (loginPage && registerPage) {
    switchTab('login');
  }

  // 註冊預覽頭貼
  const registerAvatar = document.getElementById('register-avatar');
  const registerAvatarPreview = document.getElementById('register-avatar-preview');
  registerAvatar.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = ev => {
        registerAvatarPreview.src = ev.target.result;
        registerAvatarPreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  // 註冊表單
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const nickname = document.getElementById('register-nickname').value.trim();
    const file = registerAvatar.files[0];
    if(!email||!password||!nickname||!file) return alert('請輸入完整資料');
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      // 上傳頭貼
      const filename = 'avatars/' + Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const imgRef = sRef(storage, filename);
      await uploadBytes(imgRef, file);
      const avatarURL = await getDownloadURL(imgRef);
      // 更新profile
      await updateProfile(user, { displayName: nickname, photoURL: avatarURL });
      // 寫入users
      await update(ref(db, 'users/' + user.uid), {
        uid: user.uid,
        nickname: nickname || '新用戶',
        avatar: avatarURL || 'default-avatar.png',
        friends: {},
        online: true,
        lastActive: Date.now()
      });
      await onDisconnect(ref(db, 'users/' + user.uid + '/online')).set(false);
      location.reload();
      switchChat("group_chat");
    }catch(err){
      alert(err.message);
    }
  });

  // 打開 modal
  document.getElementById('forgot-password-link').onclick = function(e) {
    e.preventDefault();
    document.getElementById('forgot-modal').style.display = 'flex';
    document.getElementById('forgot-email').value = document.getElementById('login-email').value.trim();
    document.getElementById('forgot-message').textContent = '';
  };
  // 關閉 modal
  document.getElementById('close-forgot-modal').onclick = function() {
    document.getElementById('forgot-modal').style.display = 'none';
  };
  document.getElementById('forgot-modal').onclick = function(e) {
    if(e.target === this) this.style.display = 'none';
  };
  // 寄送重設信
  document.getElementById('forgot-submit-btn').onclick = async function() {
    const email = document.getElementById('forgot-email').value.trim();
    const msg = document.getElementById('forgot-message');
    if(!email) {
      msg.textContent = '請輸入Email';
      msg.style.color = 'var(--accent-coral)';
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      msg.textContent = '已寄送重設信，請至信箱查收。';
      msg.style.color = 'var(--accent-green)';
    } catch(err) {
      msg.textContent = '寄送失敗：' + (err.code === 'auth/user-not-found' ? '查無此帳號' : err.message);
      msg.style.color = 'var(--accent-coral)';
    }
  };
  }

  // 私訊通知欄關閉按鈕事件
  const notificationClose = document.getElementById('notification-close');
  if (notificationClose) {
    notificationClose.onclick = (e) => {
      e.stopPropagation(); // 防止觸發通知欄的點擊事件
      hidePrivateMessageNotification();
    };
  }
});

// 監聽登入狀態
onAuthStateChanged(auth, async (user) => {
  console.log('🔄 Auth state changed:', user ? `用戶已登入: ${user.uid}` : '用戶未登入');
  
  if (user) {
    try {
      console.log('🔐 處理已登入用戶:', user.uid);
      
      // 檢查當前頁面類型
      const isLoginPage = window.location.pathname.includes('login.html') || 
                         document.getElementById('login-form') !== null;
      const isChatPage = window.location.pathname.includes('chat.html') || 
                        document.getElementById('main') !== null;
      const isAnnouncePage = window.location.pathname.includes('announce.html');
      
      console.log('📄 頁面類型:', { isLoginPage, isChatPage, isAnnouncePage });
      
      // 如果在登入頁面且用戶已登入，直接跳轉到聊天室
      if (isLoginPage && !sessionStorage.getItem('isLoginRedirect')) {
        console.log('🔀 用戶已登入但在登入頁面，跳轉到聊天室');
        window.location.href = 'chat.html';
        return;
      }
      
      // 檢查是否是從登入表單觸發的登入
      const isLoginRedirect = sessionStorage.getItem('isLoginRedirect') === 'true';
      if (isLoginRedirect) {
        console.log('⏭️ 登入跳轉模式，跳過UI處理');
        sessionStorage.removeItem('isLoginRedirect');
        // 仍然初始化用戶資料，但不處理 UI 切換
      }
      
      // 顯示 loading（建議放在進聊天室前，UI 更穩定）
      if (typeof showLoading === 'function') showLoading();

      let userDb = null;
      let tryCount = 0;
      const maxTries = 3;   // 進一步減少重試次數
      const delay = 1000;   // 增加延遲時間

      // 使用 try-catch 包裝獲取用戶資料的邏輯
      try {
        while (tryCount < maxTries) {
          console.log(`📡 嘗試獲取用戶資料 (${tryCount + 1}/${maxTries})`);
          
          // 添加超時機制
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('獲取用戶資料超時')), 3000); // 減少超時時間
          });
          
          const userDataPromise = onValuePromise(ref(db, 'users/' + user.uid));
          
          userDb = await Promise.race([userDataPromise, timeoutPromise]);
          
          if (userDb && userDb.nickname && userDb.avatar) {
            console.log('✅ 成功獲取用戶資料');
            break;
          }
          
          tryCount++;
          if (tryCount < maxTries) {
            console.log(`⏳ 等待 ${delay}ms 後重試...`);
            await new Promise(r => setTimeout(r, delay));
          }
        }
      } catch (error) {
        console.error('❌ 獲取用戶資料失敗:', error);
        userDb = null; // 確保使用 fallback
      }

      // fallback - 使用 Firebase Auth 的資料或預設值
      const nickname = (userDb && userDb.nickname) 
        ? userDb.nickname 
        : (user.displayName || user.email?.split('@')[0] || '新用戶');
      const avatar = (userDb && userDb.avatar) 
        ? userDb.avatar 
        : (user.photoURL || 'default-avatar.png');

      currentUser = {
        uid: user.uid,
        nickname,
        avatar
      };

      console.log('👤 設置當前用戶:', currentUser);
      
      // 更新用戶顯示
      updateUserProfileDisplay();
      
      // 初始化桌面通知系統
      if (typeof initDesktopNotifications === 'function') {
        initDesktopNotifications();
      }
      
      // 重新初始化事件處理器（登入後確保所有功能正常）
      setTimeout(() => {
        initChatTabsEventHandlers();
        initOtherChatButtons();
        initUserDropdownMenu();
      }, 500);

      // 寫入/同步 online 狀態
      try {
        await update(ref(db, 'users/' + user.uid), {
          ...(userDb || {}), // 保留原有欄位
          uid: user.uid,
          nickname,
          avatar,
          online: true,
          lastActive: Date.now()
        });
        onDisconnect(ref(db, 'users/' + user.uid + '/online')).set(false);
      } catch (error) {
        console.error('❌ 更新用戶狀態失敗:', error);
      }

    // 如果是登入跳轉，跳過 UI 處理，讓頁面跳轉邏輯執行
    if (isLoginRedirect) {
      return;
    }

    // UI 切換 - 只在相關元素存在時執行
    const loginPageEl = document.getElementById('login-page');
    const registerPageEl = document.getElementById('register-page');
    const authTabsEl = document.getElementById('auth-tabs');
    const mainEl = document.getElementById('main');
    const mobileSidebarBtn = document.getElementById('mobile-sidebar-btn');
    
    if (loginPageEl) loginPageEl.style.display = 'none';
    if (registerPageEl) registerPageEl.style.display = 'none';
    if (authTabsEl) authTabsEl.style.display = 'none';
    if (mainEl) mainEl.style.display = 'flex';
    if (mobileSidebarBtn) mobileSidebarBtn.style.display = 'block'; // 顯示三槓

    // 側邊欄顯示
    if (document.getElementById('sidebar-my-nickname')) {
      document.getElementById('sidebar-my-nickname').textContent = currentUser.nickname;
    }
    if (document.getElementById('sidebar-my-avatar')) {
      document.getElementById('sidebar-my-avatar').src = currentUser.avatar;
    }

    // 其他初始化 - 只在相關元素存在時執行
    if (typeof loadUserList === 'function') {
      loadUserList();
    }

    // 啟動好友和用戶監聽（只在 chat.html 頁面）
    if (document.getElementById('main') && document.getElementById('chat')) {
      listenAllUsers();
      listenFriends();
      listenFriendRequestsPopup();
    }

    // 啟動私訊通知監聽（只在 chat.html 頁面）
    if (document.getElementById('main') && document.getElementById('chat')) {
      startGlobalPrivateMessageMonitoring();
    }

    // ✅ 自動進入上次的聊天室（只在 chat.html 頁面）
    if (document.getElementById('main') && document.getElementById('chat')) {
      const lastRoom = localStorage.getItem('lastGroupRoom') || 'chat';
      loadGroupChat(lastRoom);
    }

    // 關閉 loading
    if (typeof hideLoading === 'function') hideLoading();

    // 若超時還是沒有資料可 alert（建議可以選擇性顯示）
    if (!userDb || !userDb.nickname || !userDb.avatar) {
      console.warn('載入個人資料超時');
    }
    
    } catch (error) {
      console.error('❌ onAuthStateChanged 處理用戶登入時發生錯誤:', error);
      if (typeof hideLoading === 'function') hideLoading();
    }
  
  } else {
    // 未登入 - 只在相關元素存在時執行
    const mainEl = document.getElementById('main');
    const authTabsEl = document.getElementById('auth-tabs');
    
    if (mainEl) mainEl.style.display = 'none';
    if (authTabsEl) authTabsEl.style.display = 'flex';
    
    // 如果 switchTab 函數存在且在登入頁面，則切換到登入tab
    if (typeof switchTab === 'function' && document.getElementById('login-page')) {
      switchTab('login');
    }
    if (typeof hideLoading === 'function') hideLoading();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('vote-option')) {
    const msgId = e.target.dataset.id;
    const idx = parseInt(e.target.dataset.idx, 10);

    // Firebase 更新指定投票的 votes 與 voters
    const voteRef = ref(db, `groupChats/${currentGroupRoom}/messages/${msgId}`);
    runTransaction(voteRef, (msg) => {
      if (!msg || msg.type !== 'vote') return msg;
      if (!msg.voters) msg.voters = {};
      if (msg.voters[currentUser.uid] !== undefined) return msg; // 已投票

      msg.votes[idx] = (msg.votes[idx] || 0) + 1;
      msg.voters[currentUser.uid] = idx;
      return msg;
    });
  }
});


// 取得users資料的promise
function onValuePromise(refObj) {
  return new Promise(res=>{
    onValue(refObj, snap=>{
      res(snap.val());
    }, {onlyOnce:true});
  });
}

// 取得所有在線成員（左側欄），含加好友按鈕
function loadUserList() {
  const list = document.getElementById('user-list');           // 桌機 sidebar
  const listMobile = document.getElementById('user-list-mobile'); // 手機 sidebar drawer

  onValue(ref(db, 'users'), (snapshot) => {
    usersSnapshot = snapshot.val() || {};
    console.log("👥 全部使用者資料已載入", usersSnapshot);
    list.innerHTML = '';
    listMobile.innerHTML = '';

    const myFriends = usersSnapshot[currentUser.uid]?.friends || {};

    Object.values(usersSnapshot).forEach(user => {
      if (user.uid !== currentUser.uid && user.online) {
        // 桌機 sidebar
        const li = document.createElement('li');
        li.innerHTML = `
  <img src="${user.avatar}" class="side-avatar" title="點我與${user.nickname}私訊">
  <span>${user.nickname}</span>
  <span class="notify-dot" ...>●</span>
  ${
    myFriends[user.uid]
      ? `<span class="friend-tag">已加好友</span>`
      : `<button class="add-friend-btn" data-uid="${user.uid}">加好友</button>`
  }
`;
        li.onclick = (e) => {
          if (e.target.classList.contains('add-friend-btn')) return;
          openPrivateChat(user.uid);
        };
        li.id = `user-li-${user.uid}`;
        list.appendChild(li);

        // 手機 sidebar drawer
        const liMobile = li.cloneNode(true);
        liMobile.id = `user-li-mobile-${user.uid}`;
        // 重新綁定事件（cloneNode 不會複製事件）
        liMobile.onclick = (e) => {
          if (e.target.classList.contains('add-friend-btn')) return;
          openPrivateChat(user.uid);
          // 關掉手機 sidebar drawer
          const drawer = document.getElementById('mobile-sidebar-drawer');
          if(drawer) drawer.classList.remove('open');
          document.body.style.overflow = '';
        };
        listMobile.appendChild(liMobile);
      }
    });

    // 桌機和手機都要加事件代理（因為有加好友按鈕）
  document.querySelectorAll('.add-friend-btn').forEach(btn => {
  btn.onclick = (e) => {
    e.stopPropagation();
    const uid = btn.getAttribute('data-uid'); // <--- 一定要這樣拿
    if (!uid) {
      console.error('addFriend 觸發但 data-uid 沒有值', btn);
      return;
    }
    addFriend(uid); // <--- 不要直接 addFriend(user.uid)！因為 forEach 外面取不到 user
  }
});
    listMobile.querySelectorAll('.add-friend-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const uid = btn.getAttribute('data-uid');
        addFriend(uid);
      };
    });

    // 高亮目前聊天對象
    highlightUserList();
    highlightUserListMobile();
  });
}

// 高亮目前聊天對象（桌機）
function highlightUserList() {
  for (const user of Object.values(usersSnapshot)) {
    const li = document.getElementById('user-li-' + user.uid);
    if (li) {
      if (currentChat === user.uid) li.classList.add('active');
      else li.classList.remove('active');
    }
  }
}
// 高亮目前聊天對象（手機）
function highlightUserListMobile() {
  for (const user of Object.values(usersSnapshot)) {
    const li = document.getElementById('user-li-mobile-' + user.uid);
    if (li) {
      if (currentChat === user.uid) li.classList.add('active');
      else li.classList.remove('active');
    }
  }
}

// 發送訊息
const sendBtn = document.getElementById('send');
const msgInput = document.getElementById('msg');

if (!window.sendListenersAttached) {
  sendBtn?.addEventListener('click', sendMessage);
  msgInput?.addEventListener('keydown', e => {
    if (e.key === "Enter") sendMessage();
  });
  window.sendListenersAttached = true;
}

import { clearImagePreview } from './upload.js';

// 發送訊息
function sendMessage() {
  if (!currentUser) {
    console.error('Error: User not logged in.');
    return alert('請先登入');
  }

  const text = msgInput.value.trim();
  const image = window.currentImageUrl;

  console.log('Text input:', text);
  console.log('Current Image URL:', image);

  if (!text && !image) {
    console.warn('Warning: Message text and image are both empty. Not sending.');
    return;
  }

  const msg = {
    user: currentUser.nickname,
    avatar: currentUser.avatar,
    from: currentUser.uid,
    text,
    image: image || null,
    time: Date.now(),
    replyTo: currentReplyMsgId || null
  };
  console.log('📤 Message object to send:', msg);

  if (currentChat && currentChat.startsWith("group_")) {
    const room = currentGroupRoom || "chat";
    console.log('📨 Sending to group chat:', room);
    push(ref(db, `groupChats/${room}/messages`), msg)
      .then(() => console.log('✅ Group message sent successfully!'))
      .catch(error => console.error('❌ Error sending group message:', error));
  } else {
    // 處理私訊發送
    let privateChatPath;
    
    if (currentPrivateRoomId) {
      // 如果在特定私訊房間中
      privateChatPath = `privateChats/${currentPrivateRoomId}/messages`;
      console.log('📨 Sending to private chat room:', currentPrivateRoomId);
    } else {
      // 傳統私訊方式
      const ids = [currentUser.uid, currentChat].sort();
      privateChatPath = `privateChats/${ids[0]}_${ids[1]}/messages`;
      console.log('📨 Sending to private chat:', privateChatPath);
    }
    
    push(ref(db, privateChatPath), msg)
      .then(() => {
        console.log('✅ Private message sent successfully!');
        
        // 更新私訊聊天室的最後訊息時間
        const roomId = currentPrivateRoomId || privateChatPath.split('/')[1];
        const chatUpdateData = {
          lastMessage: text,
          lastTime: msg.time
        };
        
        update(ref(db, `privateChats/${roomId}`), chatUpdateData)
          .then(() => console.log('✅ Private chat metadata updated'))
          .catch(error => console.error('❌ Error updating chat metadata:', error));
      })
      .catch(error => console.error('❌ Error sending private message:', error));
  }

  // ✅ 清空輸入欄位與狀態
  msgInput.value = '';
  window.currentImageUrl = null;
  clearImagePreview(); // 若尚未定義這個函式，請見下方
  currentReplyMsgId = null;
  clearReplyUI();
  console.log('✨ Message sending process completed (UI cleared).');
}


// 長按回覆設定
const chatDiv = document.getElementById('chat');
let holdTimer = null;
let holdStartX = 0, holdStartY = 0;

chatDiv.addEventListener('touchstart', function(e) {
  const bubble = e.target.closest('.bubble');
  if (!bubble || window.innerWidth > 600) return;

  const touch = e.touches[0];
  holdStartX = touch.clientX;
  holdStartY = touch.clientY;

  holdTimer = setTimeout(() => {
    const msgDiv = bubble.closest('.msg');
    const msgId = msgDiv?.getAttribute('data-msgid');
    const msgObj = messageMap[msgId];
    if (msgId && msgObj) {
      console.log('✅ 手機長按觸發 reply');
      setReplyTarget(msgId, msgObj);
    }
  }, 500);
});

chatDiv.addEventListener('touchmove', function(e) {
  const touch = e.touches[0];
  const dx = Math.abs(touch.clientX - holdStartX);
  const dy = Math.abs(touch.clientY - holdStartY);
  if (dx > 10 || dy > 10) {
    clearTimeout(holdTimer);
  }
});

chatDiv.addEventListener('touchend', function() {
  clearTimeout(holdTimer);
});

chatDiv.addEventListener('contextmenu', function(e) {
  const bubble = e.target.closest('.bubble');
  if (!bubble || window.innerWidth <= 600) return;

  e.preventDefault();
  const msgDiv = bubble.closest('.msg');
  const msgId = msgDiv?.getAttribute('data-msgid');
  const msgObj = messageMap[msgId];
  if (msgId && msgObj) {
    console.log('🖱️ 桌機右鍵觸發 reply');
    setReplyTarget(msgId, msgObj);
  }
});


// 回覆邏輯
function setReplyTarget(msgId, msgObj) {
  currentReplyMsgId = msgId;
  // 顯示 reply bar，只有一個符號，低調小字
  let replyBar = document.getElementById('reply-bar');
  if (!replyBar) {
    replyBar = document.createElement('div');
    replyBar.id = 'reply-bar';
    replyBar.style = 'background:#eef;padding:2px 8px 2px 8px;border-left:2px solid #6af;margin-bottom:3px;font-size:12px;opacity:0.9;display:flex;align-items:center;';
    msgInput.parentElement.insertBefore(replyBar, msgInput);
  }
  replyBar.innerHTML = `↩ <b style="margin:0 3px">@${msgObj.user}</b>: <span style="color:#666;">${msgObj.text}</span> <button id="cancel-reply-btn" style="margin-left:6px;font-size:12px;background:none;border:none;cursor:pointer;opacity:0.5;" title="取消回覆">╳</button>`;
  document.getElementById('cancel-reply-btn').onclick = clearReplyUI;
}
function clearReplyUI() {
  currentReplyMsgId = null;
  let bar = document.getElementById('reply-bar');
  if (bar) bar.remove();
}


function openPrivateChat(uid) {
  console.log("✅ 開啟與使用者私訊：", uid);

  stopAllListeners();  // 清除原本監聽器
  clearChat(); // 清空聊天室並重置已渲染訊息ID

  currentChat = uid;
  currentPrivateUid = uid;

  // 移除對 chat-title 的引用，因為該元素已被移除
  const chatTip = document.getElementById('chat-tip');
  
  get(ref(db, `users/${uid}/nickname`)).then((snapshot) => {
    if (snapshot.exists()) {
      const nickname = snapshot.val();
      // 只設置提示文字，不設置標題
      if (chatTip) chatTip.textContent = `你正在私訊中`;
    }
  });

  highlightUserList?.();

  const ids = [currentUser.uid, uid].sort();
  const privatePath = `privateChats/${ids[0]}_${ids[1]}/messages`;
  privateChatRef = query(ref(db, privatePath), limitToLast(200));

  privateChatListener = onChildAdded(privateChatRef, (snap) => {
    const msgId = snap.key;
    if (!renderedMessageIds.has(msgId)) {
      renderedMessageIds.add(msgId);
      appendMessage?.(snap.val(), msgId);
    }
  });

  // 清除通知紅點（如果有）
  const li = document.getElementById('user-li-' + uid);
  if (li) {
    const dot = li.querySelector('.notify-dot');
    if(dot) dot.style.display = 'none';
  }
  privateChatNotificationStates[uid] = false;
}

// ========= 私訊通知功能 =========
function showPrivateMessageNotification(fromUid, message, nickname) {
  console.log('🔔 嘗試顯示私訊通知:', { fromUid, message, nickname, currentPrivateUid });
  
  // 避免在當前私訊對話中顯示通知
  if (currentPrivateUid === fromUid) {
    console.log('⏭️ 跳過通知：正在與此用戶私訊中');
    return;
  }

  // 防止通知過於頻繁（1秒內只顯示一次）
  const now = Date.now();
  if (now - lastNotificationTime < 1000) {
    console.log('⏭️ 跳過通知：太頻繁');
    return;
  }
  lastNotificationTime = now;

  const notificationBar = document.getElementById('notification-bar');
  const notificationText = document.getElementById('notification-text');
  
  if (!notificationBar || !notificationText) {
    console.error('❌ 找不到通知欄元素');
    return;
  }

  console.log('✅ 顯示私訊通知');

  // 設置通知內容
  const shortMessage = message.length > 30 ? message.substring(0, 30) + '...' : message;
  notificationText.textContent = `${nickname || '匿名用戶'}: ${shortMessage}`;
  
  // 設置點擊事件
  notificationBar.onclick = () => {
    openPrivateChat(fromUid);
    hidePrivateMessageNotification();
  };
  
  // 顯示通知
  notificationBar.style.display = 'block';
  
  // 存儲通知信息
  activeNotifications.set(fromUid, {
    message,
    nickname,
    timestamp: now
  });
  
  // 3秒後自動隱藏通知
  setTimeout(() => {
    if (activeNotifications.has(fromUid)) {
      hidePrivateMessageNotification();
    }
  }, 3000);
}

function hidePrivateMessageNotification() {
  const notificationBar = document.getElementById('notification-bar');
  if (notificationBar) {
    notificationBar.style.display = 'none';
    notificationBar.onclick = null;
  }
  activeNotifications.clear();
}

function startGlobalPrivateMessageMonitoring() {
  if (!currentUser?.uid) {
    console.warn('無法啟動私訊監聽：用戶未登入');
    return;
  }
  
  console.log('📢 啟動全域私訊監聽，用戶 UID:', currentUser.uid);
  
  // 監聽所有與當前用戶相關的私訊路徑
  const privateChatsRef = ref(db, 'privateChats');
  
  // 先獲取所有現有的私訊對話
  get(privateChatsRef).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('🔍 檢查現有私訊對話...');
      snapshot.forEach((chatSnapshot) => {
        const chatId = chatSnapshot.key;
        setupPrivateChatListener(chatId);
      });
    } else {
      console.log('📭 目前沒有私訊對話');
    }
  });
  
  // 監聽新的私訊對話
  onChildAdded(privateChatsRef, (chatSnapshot) => {
    const chatId = chatSnapshot.key;
    setupPrivateChatListener(chatId);
  });
}

function setupPrivateChatListener(chatId) {
  // 檢查這個聊天是否與當前用戶相關
  const [uid1, uid2] = chatId.split('_');
  if (uid1 !== currentUser.uid && uid2 !== currentUser.uid) {
    return; // 不是當前用戶的私訊
  }
  
  // 如果已經在監聽這個對話，跳過
  if (globalPrivateMessageListeners.has(chatId)) {
    return;
  }
  
  console.log('🎧 設置私訊監聽器:', chatId);
  
  // 監聽這個私訊對話的新訊息
  const messagesRef = ref(db, `privateChats/${chatId}/messages`);
  
  const listener = onChildAdded(messagesRef, (messageSnapshot) => {
    const messageData = messageSnapshot.val();
    const messageId = messageSnapshot.key;
    
    console.log('💬 收到私訊:', {
      chatId,
      messageId,
      from: messageData.from,
      to: messageData.to,
      currentUser: currentUser.uid,
      currentPrivateUid
    });
    
    // 只處理別人發送給我的訊息，且不是當前正在查看的私訊
    if (messageData.from !== currentUser.uid && 
        messageData.to === currentUser.uid && 
        messageData.from !== currentPrivateUid) {
      
      console.log('🔔 顯示私訊通知:', messageData.from);
      
      // 獲取發送者昵稱
      get(ref(db, `users/${messageData.from}/nickname`)).then((snapshot) => {
        const senderNickname = snapshot.val() || '匿名用戶';
        showPrivateMessageNotification(messageData.from, messageData.msg, senderNickname);
      }).catch((error) => {
        console.error('獲取發送者昵稱失敗:', error);
        showPrivateMessageNotification(messageData.from, messageData.msg, '匿名用戶');
      });
    }
  });
  
  globalPrivateMessageListeners.set(chatId, listener);
}

function stopGlobalPrivateMessageMonitoring() {
  console.log('🔇 停止全域私訊監聽');
  
  globalPrivateMessageListeners.forEach((listener, chatId) => {
    const [uid1, uid2] = chatId.split('_');
    const messagesRef = ref(db, `privateChats/${chatId}/messages`);
    off(messagesRef, 'child_added', listener);
  });
  
  globalPrivateMessageListeners.clear();
  hidePrivateMessageNotification();
}

// 測試私訊通知功能
window.testPrivateNotification = function() {
  console.log('🧪 測試私訊通知功能');
  showPrivateMessageNotification('test-uid', '這是一個測試私訊通知', '測試用戶');
};

// ========= Firebase Auth 狀態監聽 & 用戶同步/好友機制 =========
// 只在 login.html 才執行登入頁 UI 切換
if (document.getElementById('login-page') && document.getElementById('register-page') && document.getElementById('auth-tabs')) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ✅ 設定使用者資料
      currentUser = {
        uid: user.uid,
        nickname: user.displayName ?? '',
        avatar: user.photoURL ?? ''
      };

      // ✅ 初始化聊天室與監聽
      listenAllUsers();
      listenFriends();
      listenFriendRequestsPopup();

      // ✅ 顯示登入頁，隱藏主畫面
      document.getElementById('main').style.display = 'none';
      document.getElementById('login-page').style.display = 'block';
      document.getElementById('register-page').style.display = 'none';
    }
  });
}



// ======= UI 切換：好友區、在線成員區 =======
document.addEventListener('DOMContentLoaded', function() {
  // 桌機
  const showFriendsBtn = document.getElementById('show-friends');
  const userList = document.getElementById('user-list');
  const friendArea = document.getElementById('friend-area');
  let showingFriends = false;

  showFriendsBtn.onclick = function() {
    showingFriends = !showingFriends;
    userList.style.display = showingFriends ? 'none' : '';
    friendArea.style.display = showingFriends ? '' : 'none';
    showFriendsBtn.textContent = showingFriends ? '返回在線成員' : '我的好友';
 if (showingFriends) {
    renderFriendList(); // <--- 這行很重要！
  }
};

  // 手機
  const showFriendsBtnMobile = document.getElementById('show-friends-mobile');
  const userListMobile = document.getElementById('user-list-mobile');
  const friendAreaMobile = document.getElementById('friend-area-mobile');
  const friendListMobile = document.getElementById('friend-list-mobile');
  let showingFriendsMobile = false;

// 切換顯示
showFriendsBtnMobile.onclick = function() {
  showingFriendsMobile = !showingFriendsMobile;
  userListMobile.style.display = showingFriendsMobile ? 'none' : '';
  friendAreaMobile.style.display = showingFriendsMobile ? '' : 'none';
  showFriendsBtnMobile.textContent = showingFriendsMobile ? '返回在線成員' : '我的好友';
  if (showingFriendsMobile) {
    renderFriendList(); // 讓手機好友同步刷新
  }
};

  showFriendsBtnMobile.onclick = function() {
    showingFriendsMobile = !showingFriendsMobile;
    userListMobile.style.display = showingFriendsMobile ? 'none' : '';
    friendAreaMobile.style.display = showingFriendsMobile ? '' : 'none';
    showFriendsBtnMobile.textContent = showingFriendsMobile ? '返回在線成員' : '我的好友';
  };
});

// ====== 新增好友請求 ======
window.addFriend = function(friendUid) {
  if (!currentUser || !friendUid) return;
  console.log('addFriend', currentUser.uid, '->', friendUid);
  set(ref(db, `users/${friendUid}/friendRequests/${currentUser.uid}`), true)
    .then(() => alert('好友申請已送出，請等待對方確認！'))
    .catch(err => alert('加好友失敗：' + err.message));
};

// ====== 同意好友 ======
window.acceptFriend = async function(friendUid) {
  console.log("acceptFriend 被呼叫，friendUid:", friendUid);
  console.log('呼叫 acceptFriend');
  if (!currentUser) {
    console.log('currentUser is null');
    return;
  }
  if (!friendUid) {
    console.log('friendUid is null');
    return;
  }
  console.log('currentUser.uid:', currentUser.uid, 'friendUid:', friendUid);

  try {
    await set(ref(db, `users/${currentUser.uid}/friends/${friendUid}`), true);
    console.log(`自己好友寫入成功: users/${currentUser.uid}/friends/${friendUid}`);
    await set(ref(db, `users/${friendUid}/friends/${currentUser.uid}`), true);
    console.log(`對方好友寫入成功: users/${friendUid}/friends/${currentUser.uid}`);
    await set(ref(db, `users/${currentUser.uid}/friendRequests/${friendUid}`), null);
    await set(ref(db, `users/${friendUid}/friendRequests/${currentUser.uid}`), null);
    alert('已成為好友！');
  } catch (err) {
    console.error('acceptFriend 發生錯誤', err);
    alert('寫入好友失敗：' + err.message);
  }
};

// ====== 拒絕好友 ======
window.rejectFriend = async function(friendUid) {
  if (!currentUser || !friendUid) return;
  await set(ref(db, `users/${currentUser.uid}/friendRequests/${friendUid}`), null);
  await set(ref(db, `users/${friendUid}/friendRequests/${currentUser.uid}`), null);
  alert('已拒絕好友申請');
};

// ====== 好友申請清單渲染 ======
function renderFriendRequests() {
  if (!currentUser) return;
  const requestList = document.getElementById('friend-request-list');
  if (!requestList) return;
  onValue(ref(db, `users/${currentUser.uid}/friendRequests`), (snapshot) => {
    const requests = snapshot.val() || {};
    requestList.innerHTML = '';
    Object.keys(requests).forEach(requestUid => {
      const requester = usersSnapshot[requestUid];
      if (!requester) return;
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${requester.avatar}" width="32">
        <span>${requester.nickname}</span>
        <button onclick="acceptFriend('${requestUid}')">接受</button>
        <button onclick="rejectFriend('${requestUid}')">拒絕</button>
      `;
      requestList.appendChild(li);
    });
    if (Object.keys(requests).length === 0) {
      requestList.innerHTML = '<li>暫無好友申請</li>';
    }
  });
}


// ====== 即時彈窗通知：收到好友申請時詢問是否同意 ======
function listenFriendRequestsPopup() {
  if (!currentUser) return;
  const reqRef = ref(db, `users/${currentUser.uid}/friendRequests`);
  onChildAdded(reqRef, (snapshot) => {
    const fromUid = snapshot.key;
    if (!fromUid) return;
    const requester = usersSnapshot[fromUid];
    if (!requester) return;
    // 彈窗詢問
    const msg = `「${requester.nickname}」想加你為好友，是否同意？`;
    if (window.confirm(msg)) {
      window.acceptFriend(fromUid);
    } else {
      window.rejectFriend(fromUid);
    }
  });
}



// ====== UI 狀態切換範例 ======
function showMainUI() {
  document.getElementById('main').style.display = 'flex';
  document.getElementById('auth-tabs').style.display = 'none';
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('register-page').style.display = 'none';
}
function showAuthUI() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('auth-tabs').style.display = 'flex';
  // 根據需求切 login 或 register
}

// 桌機版
document.getElementById('edit-profile-btn').onclick = function() {
  if (!currentUser) return alert("尚未登入！");
  document.getElementById('edit-nickname').value = currentUser.nickname || "";
  document.getElementById('edit-avatar').value = "";
  document.getElementById('edit-avatar-preview').style.display = 'none';
  document.getElementById('edit-profile-modal').style.display = 'block';
};
// 彈窗關閉
document.getElementById('close-profile-modal').onclick = function() {
  document.getElementById('edit-profile-modal').style.display = 'none';
};
document.getElementById('edit-profile-modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};
// 頭貼預覽
document.getElementById('edit-avatar').onchange = function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('edit-avatar-preview').src = evt.target.result;
    document.getElementById('edit-avatar-preview').style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
};
// 資料送出（你可依你的 Firebase 寫法補上真實更新程式）
document.getElementById('edit-profile-form').onsubmit = async function(e) {
  e.preventDefault();
  // 補充: 實作更新Firebase邏輯
  document.getElementById('edit-profile-modal').style.display = 'none';
  alert('已儲存！（這裡可加上真實的資料更新程式）');
};
// 手機 drawer 版
const editProfileBtnMobile = document.getElementById('edit-profile-btn-mobile');
if (editProfileBtnMobile) {
  editProfileBtnMobile.onclick = function() {
    if (!currentUser) return alert("尚未登入！");
    document.getElementById('edit-nickname').value = currentUser.nickname || "";
    document.getElementById('edit-avatar').value = "";
    document.getElementById('edit-avatar-preview').style.display = 'none';
    document.getElementById('edit-profile-modal').style.display = 'block';
    // 關掉手機 drawer
    document.getElementById('mobile-sidebar-drawer').classList.remove('open');
    document.body.style.overflow = '';
  };
}



// 綁定大群組聊天室按鈕（手機）
document.getElementById('group-chat-btn-mobile')?.addEventListener('click', function () {
  // 移除對 chat-title 的引用，因為該元素已被移除
  document.getElementById('chat').innerHTML = '';
  const drawer = document.getElementById('mobile-sidebar-drawer');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
});

//編輯個人資料
async function updateProfileInfo(newNickname, newAvatarFile) {
  let avatarURL = currentUser.avatar;
  if(newAvatarFile){
    const filename = 'avatars/' + Date.now() + '_' + newAvatarFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const imgRef = sRef(storage, filename);
    await uploadBytes(imgRef, newAvatarFile);
    avatarURL = await getDownloadURL(imgRef);
  }
  await updateProfile(auth.currentUser, {displayName: newNickname, photoURL: avatarURL});
  await update(ref(db, 'users/' + currentUser.uid), {
    nickname: newNickname,
    avatar: avatarURL
  });
  alert('更新成功！');
}

async function logoutHandler() {
  try {
    if (!auth.currentUser) return;
    await update(ref(db, 'users/' + auth.currentUser.uid), {
      online: false,
      lastActive: Date.now()
    });
    await signOut(auth);
    console.log("登出成功，回到首頁");
    window.location.href = 'https://aaa89550.github.io/LalaLand/';
  } catch (e) {
    console.error("登出失敗：", e);
  }
}


document.getElementById('edit-profile-form').onsubmit = async function(e) {
  e.preventDefault();
  if (!currentUser) return alert('尚未登入');

  const nickname = document.getElementById('edit-nickname').value.trim();
  const file = document.getElementById('edit-avatar').files[0];

  let avatarURL = currentUser.avatar;
  if (file) {
    const filename = 'avatars/' + Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const imgRef = sRef(storage, filename);
    await uploadBytes(imgRef, file);
    avatarURL = await getDownloadURL(imgRef);
  }

  await updateProfile(auth.currentUser, { displayName: nickname, photoURL: avatarURL });
  await update(ref(db, 'users/' + currentUser.uid), {
    nickname,
    avatar: avatarURL,
    lastActive: Date.now()
  });

  currentUser.nickname = nickname;
  currentUser.avatar = avatarURL;

  // 立即更新聊天室頁面的暱稱/頭像（如果有需要）
  // document.getElementById('sidebar-my-nickname').textContent = nickname;
  // document.getElementById('sidebar-my-avatar').src = avatarURL;
  loadUserList(); // 重新載入左側成員

  alert('個人資料已更新！');
  document.getElementById('edit-profile-modal').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', function () {
  const mobileSidebarBtn = document.getElementById('mobile-sidebar-btn');
  const mobileSidebarDrawer = document.getElementById('mobile-sidebar-drawer');
  const closeSidebarBtn = document.getElementById('close-mobile-sidebar');

  // ✅ 手機三槓按鈕顯示與否
  function updateMobileSidebarBtn() {
    if (!mobileSidebarBtn) return;
    mobileSidebarBtn.style.display = window.innerWidth < 768 ? 'block' : 'none';
  }
  window.addEventListener('resize', updateMobileSidebarBtn);
  updateMobileSidebarBtn();

  // ✅ 三槓打開側欄
  if (mobileSidebarBtn && mobileSidebarDrawer) {
    mobileSidebarBtn.addEventListener('click', () => {
      mobileSidebarDrawer.classList.add('open');
      document.body.style.overflow = 'hidden'; // 防止背景捲動
    });
  }

  // ✅ 點 × 關閉
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
      mobileSidebarDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // ✅ 點 sidebar 背景區域也能關閉（點 drawer 本體）
  if (mobileSidebarDrawer) {
    mobileSidebarDrawer.addEventListener('click', function (e) {
      if (e.target === mobileSidebarDrawer) {
        mobileSidebarDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});


// 點擊按鈕切換深色(夜間)模式
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  document.body.classList.toggle('dark-mode', isDark);
  updateNightModeIcons(isDark);
}

function toggleNightMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateNightModeIcons(isDark);
}

function updateNightModeIcons(isDark) {
  const iconText = isDark ? '☀️' : '🌙';
  const desktopBtn = document.getElementById("toggle-night-mode");
  const mobileBtn = document.getElementById("toggle-night-mode-mobile");
  if (desktopBtn) desktopBtn.textContent = iconText;
  if (mobileBtn) mobileBtn.textContent = iconText;
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();

  document.getElementById("toggle-night-mode")?.addEventListener("click", toggleNightMode);
  document.getElementById("toggle-night-mode-mobile")?.addEventListener("click", toggleNightMode);
});

// 桌面通知系統
function initDesktopNotifications() {
    // 檢查瀏覽器是否支援通知
    if (!("Notification" in window)) {
        console.log("此瀏覽器不支援桌面通知");
        return;
    }
    
    // 請求通知權限
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("桌面通知權限已授予");
                // 初始化私訊監聽
                checkForNewPrivateMessages();
            } else {
                console.log("桌面通知權限被拒絕");
            }
        });
    } else if (Notification.permission === "granted") {
        // 如果已經有權限，直接初始化
        checkForNewPrivateMessages();
    }
}

// 顯示桌面通知
function showDesktopNotification(title, body, icon = null) {
    if (Notification.permission !== "granted") {
        console.log("無桌面通知權限");
        return;
    }
    
    const options = {
        body: body,
        icon: icon || '/icon-512.png',
        badge: '/icon-512.png',
        tag: 'lalaland-chat',
        requireInteraction: false,
        silent: false
    };
    
    const notification = new Notification(title, options);
    
    // 點擊通知時聚焦到視窗
    notification.onclick = function() {
        window.focus();
        notification.close();
    };
    
    // 自動關閉通知
    setTimeout(() => {
        notification.close();
    }, 5000);
}

// 檢查是否有新私訊並顯示通知
function checkForNewPrivateMessages() {
    const user = auth.currentUser;
    if (!user) return;
    
    // 監聽所有私人聊天室的新訊息
    const privateChatsRef = ref(db, 'privateChats');
    onValue(privateChatsRef, (snapshot) => {
        const privateChats = snapshot.val() || {};
        
        Object.keys(privateChats).forEach(roomId => {
            if (roomId.includes(user.uid)) {
                const messagesRef = ref(db, `privateChats/${roomId}/messages`);
                
                // 監聽新訊息
                onChildAdded(messagesRef, (messageSnapshot) => {
                    const message = messageSnapshot.val();
                    
                    // 如果不是自己發送的訊息且在最近5秒內發送
                    if (message && message.from !== user.uid && 
                        message.time && 
                        (Date.now() - message.time) < 5000) {
                        
                        // 標記私訊標籤有未讀
                        const privateTab = document.querySelector('.chat-tab[data-room="private"]');
                        if (privateTab) {
                            privateTab.classList.add('has-unread');
                        }
                        
                        // 顯示桌面通知
                        showDesktopNotification(
                            '新私訊',
                            `${message.user || '匿名'}: ${message.message || '傳送了一則訊息'}`,
                            message.avatar
                        );
                    }
                });
            }
        });
    });
}

// 更新用戶個人資料顯示
function updateUserProfileDisplay() {
    if (!currentUser) return;
    
    const userAvatar = document.getElementById('user-avatar');
    const userNickname = document.getElementById('user-nickname');
    const mobileAvatar = document.querySelector('.mobile-avatar');
    const mobileNickname = document.querySelector('.mobile-nickname');
    
    const defaultAvatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E';
    const avatarSrc = currentUser.avatar || defaultAvatar;
    const nicknameText = currentUser.nickname || '用戶';
    
    // 更新桌面版用戶資料
    if (userAvatar) {
        userAvatar.src = avatarSrc;
        userAvatar.alt = currentUser.nickname;
    }
    
    if (userNickname) {
        userNickname.textContent = nicknameText;
    }
    
    // 更新手機版用戶資料
    if (mobileAvatar) {
        mobileAvatar.src = avatarSrc;
        mobileAvatar.alt = currentUser.nickname;
    }
    
    if (mobileNickname) {
        mobileNickname.textContent = nicknameText;
    }
}

// 全域聊天室切換函數 - 移到全域範圍確保HTML onclick可以調用
window.switchChatRoom = function(room) {
  console.log('🔄 切換聊天室:', room);
  
  // 退出手機版好友模式，顯示聊天相關元素
  document.body.classList.remove('mobile-friends-mode');
  
  // 移除所有標籤的active狀態
  document.querySelectorAll('.chat-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // 設置當前標籤為active
  const currentTab = document.querySelector(`.chat-tab[data-room="${room}"]`);
  if (currentTab) {
    currentTab.classList.add('active');
  }
  
  // 切換聊天內容
  currentChatRoom = room;
  
  if (room === 'private') {
    if (typeof loadPrivateMessages === 'function') {
      loadPrivateMessages();
    } else {
      console.error('loadPrivateMessages function not found');
    }
    currentTab?.classList.remove('has-unread');
  } else {
    if (typeof loadGroupChat === 'function') {
      loadGroupChat(room);
    } else {
      console.error('loadGroupChat function not found');
    }
  }
  
  // 關閉手機版側邊欄
  closeMobileSidebar();
};

// 全域關閉手機版側邊欄函數
window.closeMobileSidebar = function() {
  const sidebar = document.querySelector('.mobile-sidebar-drawer');
  if (sidebar) {
    sidebar.classList.remove('active', 'open');
  }
  // 恢復背景滾動
  document.body.style.overflow = '';
};

// 測試函數 - 全域範圍
window.testChatTab = function(room) {
  console.log('🧪 測試聊天標籤:', room);
  if (room === 'private') {
    if (typeof loadPrivateMessages === 'function') {
      loadPrivateMessages();
    }
  } else {
    if (typeof loadGroupChat === 'function') {
      loadGroupChat(room);
    }
  }
};

// 附加功能
import { initExtras } from './extras.js';
import { initImageUpload } from './upload.js';
import { initVoteFeature } from './vote.js';

document.addEventListener('DOMContentLoaded', () => {
  initExtras();

  initImageUpload({
    fileInputId: 'upload-input',
    previewContainerId: 'input-preview',
    storage // 如果你的 initImageUpload 支援 storage 傳入，這行保留
  });

  initVoteFeature((voteData) => {
    const msg = {
      user: currentUser.nickname,
      avatar: currentUser.avatar,
      from: currentUser.uid,
      time: Date.now(),
      ...voteData
    };

    const roomPath = `groupChats/${currentGroupRoom || 'chat'}/messages`;
    push(ref(db, roomPath), msg);
    
  });

  document.getElementById('logout-btn')?.addEventListener('click', logoutHandler);
  
  // 初始化桌面通知權限
  initDesktopNotifications();
  
  // 初始化聊天標籤事件處理器
  initChatTabsEventHandlers();
  
  // 初始化其他聊天室按鈕
  initOtherChatButtons();
  
  // 添加額外的測試函數到全域
  console.log('✅ 聊天功能初始化完成');
  
  // 延遲綁定用戶下拉選單功能，確保DOM完全載入
  setTimeout(() => {
    initUserDropdownMenu();
  }, 100);
});

// 初始化用戶下拉選單功能
function initUserDropdownMenu() {
  const userProfileSection = document.querySelector('.user-profile-section');
  const userDropdownMenu = document.querySelector('.user-dropdown-menu');
  
  console.log('初始化下拉選單:', { userProfileSection, userDropdownMenu });
  
  if (userProfileSection && userDropdownMenu) {
    // 移除可能存在的舊事件監聽器
    userProfileSection.replaceWith(userProfileSection.cloneNode(true));
    const newUserProfileSection = document.querySelector('.user-profile-section');
    
    newUserProfileSection.addEventListener('click', (e) => {
      console.log('點擊用戶資料區域');
      e.stopPropagation();
      const menu = document.querySelector('.user-dropdown-menu');
      menu.classList.toggle('show');
      console.log('選單狀態:', menu.classList.contains('show'));
    });
    
    // 點擊其他地方關閉下拉選單
    document.addEventListener('click', (e) => {
      const menu = document.querySelector('.user-dropdown-menu');
      if (!menu.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
    
    // 下拉選單項目事件
    document.getElementById('view-friends-btn')?.addEventListener('click', () => {
      document.querySelector('.user-dropdown-menu').classList.remove('show');
      loadFriendsList();
    });
    
    // 手機版好友按鈕事件
    document.getElementById('mobile-view-friends-btn')?.addEventListener('click', () => {
      closeMobileSidebar();
      
      // 添加手機版好友模式類別，隱藏聊天相關元素
      document.body.classList.add('mobile-friends-mode');
      
      // 先添加測試好友項目以確保有東西可以點擊
      const chatContainer = document.getElementById('chat');
      chatContainer.innerHTML = `
        <div style="padding: 10px;">
          <h4 style="margin: 0 0 15px 0; color: var(--sea-blue); background: linear-gradient(135deg, var(--sea-light), var(--accent-green)); padding: 8px; border-radius: 6px; text-align: center;">👥 我的好友</h4>
          
          <!-- 測試好友項目 -->
          <div style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #f8f9fa, #e3f2fd); border: 2px solid var(--accent-green); border-radius: 12px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.1);" data-friend-click="test-friend-123">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2374b3ff'/%3E%3Ctext x='20' y='26' text-anchor='middle' fill='white' font-size='16'%3E😊%3C/text%3E%3C/svg%3E" 
                 style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px; object-fit: cover; border: 3px solid var(--accent-green); box-shadow: 0 2px 4px rgba(0,0,0,0.2);" data-friend-click="test-friend-123">
            <div style="flex: 1;" data-friend-click="test-friend-123">
              <div style="font-weight: 700; color: var(--sea-dark); margin-bottom: 4px; font-size: 16px;" data-friend-click="test-friend-123">👥 測試好友</div>
              <div style="font-size: 12px; color: #666; display: flex; align-items: center;" data-friend-click="test-friend-123">
                <span style="color: var(--accent-green); margin-right: 4px;" data-friend-click="test-friend-123">●</span>點擊測試
              </div>
            </div>
          </div>
        </div>
      `;
      
      console.log('🎯 Test friend added to DOM');
      
      // 然後載入真正的好友列表
      loadFriendsList();
    });
    
    document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
      document.querySelector('.user-dropdown-menu').classList.remove('show');
      console.log('編輯個人資料功能待開發');
    });
    
    document.getElementById('toggle-notification-btn')?.addEventListener('click', () => {
      document.querySelector('.user-dropdown-menu').classList.remove('show');
      console.log('通知設定功能待開發');
    });
    
    document.getElementById('logout-btn')?.addEventListener('click', () => {
      document.querySelector('.user-dropdown-menu').classList.remove('show');
      logoutHandler();
    });
  } else {
    console.error('無法找到用戶下拉選單元素');
  }
}

// 頁面載入時的初始化檢查
window.addEventListener('DOMContentLoaded', () => {
  console.log('🔄 頁面載入完成，檢查登入狀態');
  
  // 🚨 超級簡單的測試 - 立即執行
  setTimeout(() => {
    console.log('⏰ 延遲測試 - 1秒後執行');
    alert('JavaScript 測試：如果看到這個彈窗，表示 JS 正常工作！');
  }, 1000);
  
  // 基本點擊測試
  document.body.addEventListener('click', (e) => {
    console.log('🖱️ BASIC CLICK TEST - Any click detected:', e.target.tagName, e.target.className, e.target);
  });
  
  // 基本觸摸測試
  document.body.addEventListener('touchstart', (e) => {
    console.log('📱 BASIC TOUCH TEST - Any touch detected:', e.target.tagName, e.target.className, e.target);
  });
  
  // 添加全域事件委派處理好友點擊
  document.body.addEventListener('click', (e) => {
    console.log('🖱️ Global click event:', e.target, 'data-friend-click:', e.target.getAttribute('data-friend-click'), 'data-private-click:', e.target.getAttribute('data-private-click'));
    
    const friendClickId = e.target.getAttribute('data-friend-click');
    if (friendClickId) {
      console.log('🎯 Global friend click detected:', friendClickId);
      e.preventDefault();
      e.stopPropagation();
      startPrivateChat(friendClickId);
      return;
    }
    
    // 處理私訊點擊
    const privateClickId = e.target.getAttribute('data-private-click');
    const privateTitle = e.target.getAttribute('data-private-title');
    if (privateClickId) {
      console.log('🎯 Global private chat click detected:', privateClickId);
      e.preventDefault();
      e.stopPropagation();
      enterRoom(privateClickId, privateTitle || '私人對話');
      return;
    }
  });
  
  // 使用 touchstart 而不是 touchend 獲得更好的響應
  document.body.addEventListener('touchstart', (e) => {
    console.log('📱 Global touchstart event:', e.target, 'data-friend-click:', e.target.getAttribute('data-friend-click'), 'data-private-click:', e.target.getAttribute('data-private-click'));
    
    const friendClickId = e.target.getAttribute('data-friend-click');
    if (friendClickId) {
      console.log('📱 Global friend touch detected:', friendClickId);
      e.preventDefault();
      e.stopPropagation();
      startPrivateChat(friendClickId);
      return;
    }
    
    // 處理私訊觸摸
    const privateClickId = e.target.getAttribute('data-private-click');
    const privateTitle = e.target.getAttribute('data-private-title');
    if (privateClickId) {
      console.log('📱 Global private chat touch detected:', privateClickId);
      e.preventDefault();
      e.stopPropagation();
      enterRoom(privateClickId, privateTitle || '私人對話');
      return;
    }
  });
  
  // 保留 touchend 作為備用
  document.body.addEventListener('touchend', (e) => {
    const friendClickId = e.target.getAttribute('data-friend-click');
    if (friendClickId) {
      console.log('📱 Global friend touchend detected:', friendClickId);
      // 不使用 preventDefault，避免干擾 touchstart
      startPrivateChat(friendClickId);
      return;
    }
    
    // 處理私訊觸摸結束
    const privateClickId = e.target.getAttribute('data-private-click');
    const privateTitle = e.target.getAttribute('data-private-title');
    if (privateClickId) {
      console.log('📱 Global private chat touchend detected:', privateClickId);
      // 不使用 preventDefault，避免干擾 touchstart
      enterRoom(privateClickId, privateTitle || '私人對話');
      return;
    }
  });
  
  // 隱藏手機版聊天按鈕的函數
  function hideMobileChatButtons() {
    if (window.innerWidth <= 600) {
      const chatButtons = document.querySelectorAll('button');
      chatButtons.forEach(button => {
        if (button.textContent.includes('💬 聊天')) {
          button.style.display = 'none';
        }
      });
    }
  }
  
  // 頁面載入時執行一次
  setTimeout(hideMobileChatButtons, 100);
  
  // 監聽窗口大小變化
  window.addEventListener('resize', hideMobileChatButtons);
  
  // 如果在登入頁面，添加額外的保護
  const isLoginPage = window.location.pathname.includes('login.html') || 
                     document.getElementById('login-form') !== null;
  
  if (isLoginPage) {
    console.log('📄 當前在登入頁面');
    
    // 添加一個短暫的延遲，讓 Firebase Auth 有時間初始化
    setTimeout(() => {
      if (auth && auth.currentUser) {
        console.log('🔀 檢測到已登入用戶，準備跳轉到聊天室');
        // 不設置 sessionStorage，讓 onAuthStateChanged 處理跳轉
      } else {
        console.log('👤 用戶未登入，停留在登入頁面');
      }
    }, 2000); // 增加延遲時間，確保 Firebase 初始化完成
  }
});

// 🚀 啟動 Firebase 載入
console.log('🔥 開始載入 Firebase...');
loadFirebase();
