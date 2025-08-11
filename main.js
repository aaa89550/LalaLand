import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, push, get, onChildAdded, onValue, set, child, update, onDisconnect, query, limitToLast, off, onChildChanged, runTransaction, orderByKey
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  getStorage, ref as sRef, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",
  authDomain: "lalaland-24931.firebaseapp.com",
  databaseURL: "https://lalaland-24931-default-rtdb.firebaseio.com",
  projectId: "lalaland-24931",
  storageBucket: "lalaland-24931.firebasestorage.app", // <<<< 修正這裡
  messagingSenderId: "45134876312",
  appId: "1:45134876312:web:9e33e46c54cb7c9bfc8aed",
  measurementId: "G-M04NRCY9FQ"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

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
let lastReadMessages = {}; // 記錄每個用戶的最後已讀訊息時間
let privateChatsListRef = null; // 私訊列表監聽器引用
let privateChatsListListener = null; // 私訊列表監聽器
let lastNotificationTime = 0; // 防止通知過於頻繁


function clearChat() {
  document.getElementById('chat').innerHTML = '';
  renderedMessageIds.clear(); // 每次清空聊天室時，也清空已渲染的訊息ID追蹤
  messageMap = {}; // 也清空訊息映射
  console.log('🧹 聊天內容已清空，已渲染訊息ID已重置');
}// 移除 initializeGroupChatsIfAuthed 相關內容，避免重複 onAuthStateChanged

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
      // 根據頻道型態帶入 sourceChannel
      let sourceChannel = null;
      if (currentChat.startsWith("group_")) {
        sourceChannel = currentChat;
      } else if (currentChat) {
        // 私訊模式
        const ids = [currentUser.uid, currentChat].sort();
        sourceChannel = `private_${ids[0]}_${ids[1]}`;
      }
      appendMessage(msg, msgId, sourceChannel);
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

  // 清理私訊列表監聽器
  if (privateChatsListRef && privateChatsListListener) {
    off(privateChatsListRef, 'value', privateChatsListListener);
    privateChatsListListener = null;
    privateChatsListRef = null;
  }

  // 清理全域私訊監聽器
  stopGlobalPrivateMessageMonitoring();
  
  // 重置私訊房間狀態
  currentPrivateRoomId = null;
  currentPrivateUid = null; // 也重置這個變數
  
  console.log('🧹 所有監聽器已清理完成');
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
                // 加入頻道標識以防止錯頻道顯示
                appendMessage?.(childSnap.val(), msgId, `group_${room}`);
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
                // 加入頻道標識以防止錯頻道顯示
                appendMessage?.(snap.val(), msgId, `group_${room}`);
            }
        });
    }).catch(error => {
        console.error(`Error loading group chat history for ${room}:`, error);
        // 如果載入歷史訊息失敗，仍然設置監聽器以接收新訊息
        groupChatListener = onChildAdded(groupChatRef, snap => {
            const msgId = snap.key;
            if (!renderedMessageIds.has(msgId)) {
                renderedMessageIds.add(msgId);
                // 加入頻道標識以防止錯頻道顯示
                appendMessage?.(snap.val(), msgId, `group_${room}`);
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
  friendDiv.setAttribute('data-friend-click', friendId); // 外層也可點
  friendDiv.style.position = 'relative';
  friendDiv.style.pointerEvents = 'auto';
    
    // 檢查是否為手機版
    const isMobile = window.innerWidth <= 600;
    console.log('📱 Mobile check for friend', friendId, '- isMobile:', isMobile, 'width:', window.innerWidth);
    const chatButtonHtml = isMobile ? '' : `<button onclick="event.stopPropagation(); window.startPrivateChat('${friendId}')" class="desktop-only" style="background: linear-gradient(135deg, var(--sea-blue), var(--accent-green)); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: transform 0.2s ease;">💬 聊天</button>`;
    
  friendDiv.innerHTML = `
    <div class="friend-item-inner" style="display: flex; align-items: center; padding: 15px; background: linear-gradient(135deg, #f8f9fa, #e3f2fd); border: 2px solid var(--accent-green); border-radius: 12px; margin-bottom: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.1);" data-friend-click="${friendId}">
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
        currentPrivateRoomId = null; // 重置房間ID，因為我們在列表模式
        currentPrivateUid = null; // 同時重置 UID，保持一致性
        console.log('🔧 重置私訊狀態為列表模式:', { currentChat, currentPrivateRoomId, currentPrivateUid });
        
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
    
    // 從 roomId 中提取對方的 UID，設置 currentPrivateUid 保持一致性
    const [uid1, uid2] = roomId.split('_');
    currentPrivateUid = (uid1 === currentUser.uid) ? uid2 : uid1;
    
    console.log('🔧 設置私訊狀態:', { currentChat, currentPrivateRoomId, currentPrivateUid });
    
    // 監聽該聊天室的訊息
    const messagesRef = ref(db, `privateChats/${roomId}/messages`);
    privateChatRef = query(messagesRef, limitToLast(200)); // 限制最新200條訊息
    
    // 使用onChildAdded監聽新訊息，避免重複渲染
    privateChatListener = onChildAdded(privateChatRef, (snapshot) => {
        const msgId = snapshot.key;
        const msg = snapshot.val();
        
        if (!renderedMessageIds.has(msgId)) {
            renderedMessageIds.add(msgId);
            // 加入頻道標識以防止錯頻道顯示
            appendMessage(msg, msgId, `private_${roomId}`);
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
    privateChatsListRef = ref(db, 'privateChats');
    privateChatsListListener = onValue(privateChatsListRef, (snapshot) => {
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
            
            // 只有在真正顯示私訊列表頁面時才更新列表，避免干擾當前私訊對話
            // 檢查是否在私訊列表模式：currentChat為"private"且沒有具體的對話對象
            const isInPrivateList = (currentChat === "private" && !currentPrivateRoomId);
            console.log('🔍 檢查是否在私訊列表:', {
                currentChat,
                currentPrivateRoomId, 
                currentChatRoom,
                isInPrivateList,
                reason: currentChat === "private" ? 
                    (!currentPrivateRoomId ? "在私訊列表中" : "在具體私訊對話中") : 
                    "不在私訊模式"
            });
            
            if (isInPrivateList) {
                console.log('📝 更新私訊列表顯示');
                displayPrivateChats(validChats);
            } else {
                console.log('⏭️ 跳過私訊列表更新 - 當前在私訊對話中或其他模式');
            }
        }).catch(error => {
            console.error('❌ 載入私訊列表時發生錯誤:', error);
            // 顯示錯誤訊息並提供重試選項
            const chatContainer = document.getElementById('chat');
            if (chatContainer && currentChat === "private" && !currentPrivateRoomId) {
                chatContainer.innerHTML = `
                    <div style="text-align: center; color: #999; padding: 40px;">
                        <p>載入私訊列表失敗</p>
                        <button onclick="loadPrivateMessages()" style="background: var(--sea-blue); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">重試</button>
                    </div>
                `;
            }
        });
    });
}

// 顯示私訊對話列表
function displayPrivateChats(privateChats) {
  const chatContainer = document.getElementById('chat');
  if (!chatContainer) {
    console.error('❌ 找不到聊天容器 #chat');
    return;
  }
    
    if (privateChats.length === 0) {
        chatContainer.innerHTML = `
            <div style="text-align: center; color: #999; padding: 40px;">
                <p>還沒有私訊對話</p>
                <p style="font-size: 12px;">點擊其他用戶開始私人對話</p>
            </div>
        `;
        console.log('📱 顯示空私訊列表');
        return;
    }
    
  console.log('📱 顯示私訊列表，數量:', privateChats.length);
  
  // 手機版優化樣式
  const isMobile = window.innerWidth <= 600;
  const wrapperStyle = isMobile ? 
    'padding: 8px; background: #fff; min-height: 200px;' : 
    'padding: 10px;';
    
  chatContainer.innerHTML = `<div class="private-chat-list-wrapper" style="${wrapperStyle}"><h4 style="margin: 0 0 15px 0; color: var(--sea-blue); font-size: ${isMobile ? '16px' : '18px'};">私訊對話</h4><div class="private-chat-list" id="private-chat-list" style="display:flex;flex-direction:column;gap:${isMobile ? '8px' : '6px'};"></div></div>`;
    
  const listEl = chatContainer.querySelector('#private-chat-list');
  privateChats.forEach(chat => {
        // 獲取對方用戶資料
        const userRef = ref(db, `users/${chat.otherUserId}`);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
        addPrivateChatToList(chat, userData, listEl);
            }
        }, { once: true });
    });
}

// 添加私訊對話到列表
function addPrivateChatToList(chat, userData, containerOverride) {
  const container = containerOverride || document.getElementById('chat');
  if (!container) return;
  const existingChat = container.querySelector(`[data-room-id="${chat.roomId}"]`);
    
    if (existingChat) return; // 避免重複添加
    
    const lastMessageText = chat.lastMessage ? 
        (chat.lastMessage.length > 30 ? chat.lastMessage.substring(0, 30) + '...' : chat.lastMessage) : 
        '開始對話';
    
    const timeStr = chat.lastTime ? new Date(chat.lastTime).toLocaleString('zh-TW', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) : '';
    
    // 檢查是否有未讀訊息
    const hasUnread = chat.lastTime && !isMessageRead(chat.otherUserId, chat.lastTime);
    const unreadIndicator = hasUnread ? '<div class="unread-indicator" style="width: 10px; height: 10px; background: var(--accent-coral); border-radius: 50%; margin-left: 8px;"></div>' : '';
    
  const chatDiv = document.createElement('div');
  chatDiv.className = 'private-chat-item';
  chatDiv.setAttribute('data-room-id', chat.roomId);
  chatDiv.setAttribute('data-private-click', chat.roomId);
  chatDiv.setAttribute('data-private-title', `與${userData.nickname}的對話`);
  chatDiv.style.pointerEvents = 'auto';
  
  // 手機版優化樣式
  const isMobile = window.innerWidth <= 600;
  const itemStyle = isMobile ? 
    'touch-action: manipulation; -webkit-tap-highlight-color: rgba(0,0,0,0.1);' : '';
  
  chatDiv.innerHTML = `
    <div class="private-chat-content" style="display: flex; align-items: center; padding: ${isMobile ? '16px 12px' : '12px'}; background: ${hasUnread ? '#fff5f5' : '#f8f9fa'}; border-radius: 8px; margin-bottom: 8px; cursor: pointer; transition: background 0.2s ease; border-left: ${hasUnread ? '4px solid var(--accent-coral)' : 'none'}; ${itemStyle}" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
            <img src="${userData.avatar || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E'}" 
                 class="private-chat-avatar" style="width: ${isMobile ? '56px' : '50px'}; height: ${isMobile ? '56px' : '50px'}; border-radius: 50%; margin-right: 12px; object-fit: cover; border: 2px solid ${hasUnread ? 'var(--accent-coral)' : 'var(--accent-green)'};" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
            <div style="flex: 1;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">
                <div style="font-weight: ${hasUnread ? '700' : '600'}; color: var(--sea-dark); margin-bottom: 2px; font-size: ${isMobile ? '16px' : '14px'};" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${userData.nickname || '匿名用戶'}</div>
                <div style="font-size: ${isMobile ? '14px' : '12px'}; color: ${hasUnread ? '#333' : '#666'}; margin-bottom: 2px; font-weight: ${hasUnread ? '600' : 'normal'};" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${lastMessageText}</div>
                <div style="font-size: ${isMobile ? '12px' : '10px'}; color: #999;" data-private-click="${chat.roomId}" data-private-title="與${userData.nickname}的對話">${timeStr}</div>
            </div>
            ${unreadIndicator}
        </div>
    `;
    
    // 使用更強大的事件處理
    chatDiv.addEventListener('click', (e) => {
        console.log('💬 Private chat clicked (direct):', chat.roomId);
        e.preventDefault();
        e.stopPropagation();
        enterRoom(chat.roomId, `與${userData.nickname}的對話`);
    });
    
    // 手機版觸摸事件
    chatDiv.addEventListener('touchend', (e) => {
        console.log('📱 Private chat touched (direct):', chat.roomId);
        e.preventDefault();
        e.stopPropagation();
        enterRoom(chat.roomId, `與${userData.nickname}的對話`);
    });
    
    // 調試資訊
    console.log('📱 私訊項目已添加:', {
        roomId: chat.roomId,
        nickname: userData.nickname,
        isMobile: window.innerWidth <= 600,
        containerExists: !!container
    });
    
    container.appendChild(chatDiv);
}


// 訊息渲染函式 appendMessage（含 vote 顯示與互動）
function escapeHTML(str) {
  return (str ?? '').replace(/[&<>"]/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

function appendMessage(msg, msgId, sourceChannel = null) {
  // 驗證訊息是否屬於當前頻道，防止錯頻道顯示
  if (sourceChannel) {
    console.log('🔍 頻道驗證:', { sourceChannel, currentChat, msgId });
    
    // 精確匹配：sourceChannel 必須與 currentChat 完全一致
    if (sourceChannel !== currentChat) {
      console.log('⚠️ 跳過不匹配的訊息:', { 
        sourceChannel, 
        currentChat, 
        msgId,
        reason: `${sourceChannel} !== ${currentChat}` 
      });
      return;
    }
  }

  console.log('✅ 渲染訊息:', { msgId, sourceChannel, currentChat });
  if (msgId) messageMap[msgId] = msg;

  const chatDiv = document.getElementById('chat');
  const dt = new Date(msg.time || Date.now());
  const timeStr = dt.toLocaleString('zh-TW', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

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
    if (currentChat !== `group_${room}`) {
      console.log('⚠️ 跳過投票更新：不在對應群組聊天室中', { currentChat, targetRoom: `group_${room}` });
      return;
    }

    const msgDiv = document.querySelector(`[data-msgid="${msgId}"]`);
    if (!msgDiv) return;

    // 重新呼叫 appendMessage 前先移除舊的
    msgDiv.remove();
    // 從已渲染列表中移除，以便重新渲染
    renderedMessageIds.delete(msgId);

    // 重新渲染訊息（會自動顯示投票結果）
    appendMessage(msg, msgId, `group_${room}`);
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

  // 添加即時密碼確認驗證
  const registerPasswordInput = document.getElementById('register-password');
  const registerPasswordConfirmInput = document.getElementById('register-password-confirm');
  
  if (registerPasswordInput && registerPasswordConfirmInput) {
    registerPasswordConfirmInput.addEventListener('input', function() {
      const password = registerPasswordInput.value;
      const confirmPassword = this.value;
      
      // 如果確認密碼欄位有內容且與原密碼不符，改變邊框顏色
      if (confirmPassword && password !== confirmPassword) {
        this.style.borderColor = '#ff6b6b';
        this.style.borderWidth = '2px';
      } else {
        this.style.borderColor = '';
        this.style.borderWidth = '';
      }
    });
    
    // 當密碼欄位改變時，也檢查確認密碼
    registerPasswordInput.addEventListener('input', function() {
      const password = this.value;
      const confirmPassword = registerPasswordConfirmInput.value;
      
      if (confirmPassword && password !== confirmPassword) {
        registerPasswordConfirmInput.style.borderColor = '#ff6b6b';
        registerPasswordConfirmInput.style.borderWidth = '2px';
      } else {
        registerPasswordConfirmInput.style.borderColor = '';
        registerPasswordConfirmInput.style.borderWidth = '';
      }
    });
  }

  // 註冊表單
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;
    
    // 驗證輸入
    if(!email || !password || !passwordConfirm) {
      return alert('請輸入完整資料');
    }
    
    if(password !== passwordConfirm) {
      return alert('請確認兩次密碼輸入相同');
    }
    
    if(password.length < 6) {
      return alert('密碼至少需要6個字元');
    }
    
    try{
      console.log('🔄 開始註冊流程...');
      // 註冊流程
      await createUserWithEmailAndPassword(auth, email, password);
      
      // 設置預設暱稱和頭像
      const defaultNickname = '新用戶';
      const defaultAvatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E';
      
      console.log('💾 寫入 Realtime Database...');
      await set(ref(db, 'users/' + auth.currentUser.uid), {
        nickname: defaultNickname,
        avatar: defaultAvatar,
        createdAt: Date.now(),
        uid: auth.currentUser.uid,
        friends: {},
        online: true,
        lastActive: Date.now()
      });
      
      console.log('✅ 註冊完成，即將跳轉...');
      // 等資料寫入完成後再導向
      sessionStorage.setItem('isLoginRedirect', 'true');
      window.location.href = 'announce.html';
      
    }catch(err){
      console.error('❌ 註冊失敗:', err);
      alert(err.message);
    }
  });

  // 🔐 登入邏輯
  const loginForm = document.getElementById('login-form');
  let isUserTriggeredSubmit = false; // 添加標記確保是用戶主動觸發
  
  // 監聽登入按鈕點擊
  const loginBtn = loginForm.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      isUserTriggeredSubmit = true;
    });
  }
  
  // 監聽 Enter 鍵按下（但要求更明確的確認）
  const loginEmailInput = document.getElementById('login-email');
  const loginPasswordInput = document.getElementById('login-password');
  
  [loginEmailInput, loginPasswordInput].forEach(input => {
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          // 只有在密碼框中按 Enter 且兩個欄位都有值時才允許
          if (e.target === loginPasswordInput && 
              loginEmailInput.value.trim() && 
              loginPasswordInput.value.trim()) {
            isUserTriggeredSubmit = true;
          } else {
            e.preventDefault(); // 阻止其他情況下的 Enter 提交
          }
        }
      });
    }
  });
  
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // 檢查是否為用戶主動觸發
    if (!isUserTriggeredSubmit) {
      console.log('⚠️ 阻止非用戶觸發的登入嘗試');
      return;
    }
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) {
      isUserTriggeredSubmit = false; // 重置標記
      return alert('請輸入帳號與密碼');
    }
    
    console.log('🔐 用戶主動觸發登入');
    
    try {
      // 設置一個標記，表示這是從登入表單觸發的登入
      sessionStorage.setItem('isLoginRedirect', 'true');
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "announce.html";
    } catch (err) {
      // 登入失敗時清除標記
      sessionStorage.removeItem('isLoginRedirect');
      isUserTriggeredSubmit = false; // 重置標記
      alert('登入失敗：' + err.message);
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
});

// Debug 函數：檢查當前用戶資料
window.debugUserData = async function() {
  if (!auth.currentUser) {
    console.log('❌ 沒有登入用戶');
    return;
  }
  
  const user = auth.currentUser;
  console.log('🔍 Debug 用戶資料：');
  console.log('Firebase Auth 資料:', {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  });
  
  try {
    const dbSnapshot = await get(ref(db, 'users/' + user.uid));
    const dbData = dbSnapshot.val();
    console.log('Realtime Database 資料:', dbData);
    
    console.log('當前 currentUser (應該使用 Realtime DB 資料):', currentUser);
    
    // 顯示資料來源分析
    console.log('📊 資料來源分析:');
    console.log('- Nickname 來源:', dbData?.nickname ? '✅ Realtime DB' : '⚠️ Firebase Auth');
    console.log('- Avatar 來源:', dbData?.avatar ? '✅ Realtime DB' : '⚠️ Firebase Auth');
    
    if (!dbData?.nickname || !dbData?.avatar) {
      console.warn('⚠️ 建議確保 Realtime Database 中有完整的 nickname 和 avatar 資料');
    }
  } catch (error) {
    console.error('❌ 獲取資料庫資料失敗:', error);
  }
};

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
        window.location.href = 'announce.html';
        return;
      }
      
    // 檢查是否是從登入表單觸發的登入
    const isLoginRedirect = sessionStorage.getItem('isLoginRedirect') === 'true';
    if (isLoginRedirect) {
      console.log('⏭️ 登入跳轉模式，清除標記');
      sessionStorage.removeItem('isLoginRedirect');
      // 繼續正常的 UI 處理邏輯，不跳過
    }      // 顯示 loading（建議放在進聊天室前，UI 更穩定）
      if (typeof showLoading === 'function') showLoading();

      let userDb = null;
      
      // 使用 try-catch 包裝獲取用戶資料的邏輯
      try {
        console.log(`📡 嘗試獲取 Realtime Database 用戶資料 for UID: ${user.uid}`);
        
        // 直接獲取，不使用超時機制
        const userSnapshot = await get(ref(db, 'users/' + user.uid));
        userDb = userSnapshot.val();
        
        console.log(`📊 獲取的 Realtime Database 資料:`, userDb);
        
        // 如果沒有資料，等待一下再試一次
        if (!userDb) {
          console.log('⏳ 未獲取到資料，等待3秒後重試...');
          await new Promise(r => setTimeout(r, 3000));
          
          const retrySnapshot = await get(ref(db, 'users/' + user.uid));
          userDb = retrySnapshot.val();
          console.log(`📊 重試獲取的資料:`, userDb);
        }
        
      } catch (error) {
        console.error('❌ 獲取 Realtime Database 用戶資料失敗:', error);
        userDb = null; // 確保使用 fallback
      }

      // fallback - 優先採用 Realtime Database 的資料
      let nickname, avatar;
      const defaultAvatar = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'20\' fill=\'%23ddd\'/%3E%3Ctext x=\'20\' y=\'26\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3E👤%3C/text%3E%3C/svg%3E';
      
      if (userDb && userDb.nickname) {
        // 有 Realtime Database 資料，優先使用
        nickname = userDb.nickname;
        avatar = userDb.avatar || user.photoURL || defaultAvatar;
        console.log('✅ 使用 Realtime Database 資料', { 
          nickname: userDb.nickname, 
          avatar: userDb.avatar ? '有頭像' : '無頭像，使用 fallback' 
        });
      } else if (userDb) {
        // 有 userDb 但沒有 nickname，檢查其他欄位
        console.log('⚠️ Realtime Database 資料不完整:', userDb);
        nickname = user.displayName || '新用戶';
        avatar = userDb.avatar || user.photoURL || defaultAvatar;
        console.log('✅ 使用混合資料 (Firebase Auth + DB avatar)');
      } else {
        // 完全沒有 Realtime Database 資料
        console.log('❌ 沒有 Realtime Database 資料，使用 Firebase Auth');
        nickname = user.displayName || '新用戶';
        avatar = user.photoURL || defaultAvatar;
        console.log('⚠️ 使用 Firebase Auth fallback 資料');
      }

      console.log('🔍 用戶資料來源:', {
        nickname: {
          from: userDb?.nickname ? 'realtime-database' : (user.displayName ? 'firebase-auth' : 'default-new-user'),
          value: nickname
        },
        avatar: {
          from: userDb?.avatar ? 'realtime-database' : (user.photoURL ? 'firebase-auth' : 'default'),
          value: avatar
        },
        databaseData: userDb
      });

      currentUser = {
        uid: user.uid,
        nickname,
        avatar
      };

      console.log('👤 設置當前用戶:', currentUser);
      
      // 更新用戶顯示
      updateUserProfileDisplay();
      
      // 初始化通知系統（手機版和電腦版分別處理）
      if (typeof initNotificationSystem === 'function') {
        initNotificationSystem();
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
      // 載入已讀狀態
      loadReadStates();
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
  
  // 如果是私訊，添加to字段和msg字段
  if (!currentChat.startsWith("group_")) {
    msg.to = currentChat; // currentChat包含對方的uid
    msg.msg = text; // 添加msg字段用於通知顯示
  }
  
  console.log('📤 Message object to send:', msg);
  console.log('📊 Current state:', {
    currentChat,
    currentPrivateUid,
    currentChatRoom,
    isGroup: currentChat && currentChat.startsWith("group_")
  });

  if (currentChat && currentChat.startsWith("group_")) {
    // 從currentChat中提取room名稱，而不是依賴currentGroupRoom
    const room = currentChat.replace("group_", "");
    console.log('📨 Sending to group chat:', room);
    console.log('📊 Chat routing details:', {
      currentChat,
      extractedRoom: room,
      currentGroupRoom,
      finalRoom: room
    });
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
        // ✅ 移除metadata更新，避免觸發其他監聽器導致跳轉
        // 讓onChildAdded監聽器自動處理新訊息顯示
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
  currentChatRoom = 'private'; // 確保設置為私訊模式

  // 設置當前私訊房間ID
  const ids = [currentUser.uid, uid].sort();
  currentPrivateRoomId = `${ids[0]}_${ids[1]}`;

  // 確保私訊標籤是活躍的
  document.querySelectorAll('.chat-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const privateTab = document.querySelector('.chat-tab[data-room="private"]');
  if (privateTab) {
    privateTab.classList.add('active');
  }

  // 移除對 chat-title 的引用，因為該元素已被移除
  const chatTip = document.getElementById('chat-tip');
  
  get(ref(db, `users/${uid}/nickname`)).then((snapshot) => {
    if (snapshot.exists()) {
      const nickname = snapshot.val();
      // 只設置提示文字，不設置標題
      if (chatTip) chatTip.textContent = `你正在與 ${nickname} 私訊中`;
    }
  });

  highlightUserList?.();

  const privatePath = `privateChats/${ids[0]}_${ids[1]}/messages`;
  privateChatRef = query(ref(db, privatePath), limitToLast(200));

  privateChatListener = onChildAdded(privateChatRef, (snap) => {
    const msgId = snap.key;
    if (!renderedMessageIds.has(msgId)) {
      renderedMessageIds.add(msgId);
      // 加入頻道標識以防止錯頻道顯示
      appendMessage?.(snap.val(), msgId, `private_${currentPrivateRoomId}`);
    }
  });

  // 清除通知紅點（如果有）
  const li = document.getElementById('user-li-' + uid);
  if (li) {
    const dot = li.querySelector('.notify-dot');
    if(dot) dot.style.display = 'none';
  }
  privateChatNotificationStates[uid] = false;
  
  // 記錄已讀狀態
  markMessagesAsRead(uid);
}

// ========= 私訊通知功能 =========
// 記錄已讀狀態
function markMessagesAsRead(fromUid) {
  if (!currentUser?.uid || !fromUid) return;
  
  const now = Date.now();
  lastReadMessages[fromUid] = now;
  
  // 儲存到 localStorage 以持久化
  const readStateKey = `lastRead_${currentUser.uid}_${fromUid}`;
  localStorage.setItem(readStateKey, now.toString());
  
  console.log('📖 標記已讀:', { fromUid, timestamp: now });
}

// 檢查訊息是否已讀
function isMessageRead(fromUid, messageTime) {
  if (!currentUser?.uid || !fromUid || !messageTime) return false;
  
  // 先檢查記憶體中的狀態
  if (lastReadMessages[fromUid] && messageTime <= lastReadMessages[fromUid]) {
    return true;
  }
  
  // 檢查 localStorage
  const readStateKey = `lastRead_${currentUser.uid}_${fromUid}`;
  const lastReadTime = localStorage.getItem(readStateKey);
  
  if (lastReadTime) {
    const lastRead = parseInt(lastReadTime, 10);
    lastReadMessages[fromUid] = lastRead; // 同步到記憶體
    return messageTime <= lastRead;
  }
  
  return false;
}

// 載入已讀狀態
function loadReadStates() {
  if (!currentUser?.uid) return;
  
  lastReadMessages = {};
  
  // 從 localStorage 載入所有已讀狀態
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`lastRead_${currentUser.uid}_`)) {
      const fromUid = key.replace(`lastRead_${currentUser.uid}_`, '');
      const timestamp = localStorage.getItem(key);
      if (timestamp) {
        lastReadMessages[fromUid] = parseInt(timestamp, 10);
      }
    }
  }
  
  console.log('📚 載入已讀狀態:', lastReadMessages);
}

function showPrivateMessageNotification(fromUid, message, nickname) {
  console.log('🔔 嘗試顯示私訊通知:', { fromUid, message, nickname, currentPrivateRoomId });
  
  // 使用新的統一通知系統
  showNotification('新私訊', message, fromUid);
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
  
  // 先停止現有的監聽器，避免重複
  stopGlobalPrivateMessageMonitoring();
  
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
    // 檢查是否在當前私訊房間中（支援兩種檢查方式）
    const currentRoomId = currentPrivateRoomId;
    const messageRoomId = `${[messageData.from, messageData.to].sort().join('_')}`;
    const isInCurrentPrivateChat = (currentRoomId === messageRoomId) || (currentPrivateUid === messageData.from);
    
    console.log('🔍 私訊通知檢查:', {
      fromUid: messageData.from,
      currentPrivateUid,
      currentPrivateRoomId,
      messageRoomId,
      isInCurrentPrivateChat
    });
    
    if (messageData.from !== currentUser.uid && 
        messageData.to === currentUser.uid && 
        !isInCurrentPrivateChat &&
        !isMessageRead(messageData.from, messageData.time)) { // 加入已讀檢查
      
      console.log('🔔 顯示私訊通知:', messageData.from);
      
      // 獲取發送者昵稱
      get(ref(db, `users/${messageData.from}/nickname`)).then((snapshot) => {
        const senderNickname = snapshot.val() || '匿名用戶';
        // 只顯示通知，不自動跳轉
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


// ========= Firebase Auth 狀態監聽 & 用戶同步/好友機制 =========
// 注意：主要的 onAuthStateChanged 已在上方處理，這裡不需要重複設定
// 用戶資料由主要的 onAuthStateChanged 統一處理，確保 Realtime Database 優先級



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

  if (showFriendsBtnMobile && userListMobile && friendAreaMobile) {
    showFriendsBtnMobile.addEventListener('click', () => {
      showingFriendsMobile = !showingFriendsMobile;
      userListMobile.style.display = showingFriendsMobile ? 'none' : '';
      friendAreaMobile.style.display = showingFriendsMobile ? '' : 'none';
      showFriendsBtnMobile.textContent = showingFriendsMobile ? '返回在線成員' : '我的好友';
      if (showingFriendsMobile) renderFriendList();
    });
  } else {
    console.warn('📱 手機好友切換相關元素缺失:', { showFriendsBtnMobile, userListMobile, friendAreaMobile });
  }
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
    if (typeof closeMobileSidebar === 'function') {
      closeMobileSidebar();
    } else {
      document.getElementById('mobile-sidebar-drawer').classList.remove('open');
      document.body.style.overflow = '';
    }
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

  // 立即更新 UI 顯示
  updateUserProfileDisplay();
  
  // 重新載入左側成員列表
  if (typeof loadUserList === 'function') {
    loadUserList();
  }

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

// 通知系統初始化 - 針對手機版和電腦版分別處理
function initNotificationSystem() {
    const isMobile = window.innerWidth <= 600;
    
    if (isMobile) {
        console.log("🤳 初始化手機版通知系統");
        initMobileNotifications();
    } else {
        console.log("💻 初始化電腦版通知系統");
        initDesktopNotifications();
    }
    
    // 響應式調整
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 600;
        if (newIsMobile !== isMobile) {
            if (newIsMobile) {
                initMobileNotifications();
            } else {
                initDesktopNotifications();
            }
        }
    });
}

// 手機版通知系統 - 使用頁面內通知
function initMobileNotifications() {
    console.log("📱 手機版通知系統：使用頁面內通知");
    checkForNewPrivateMessages();
}

// 電腦版通知系統 - 使用桌面通知
function initDesktopNotifications() {
    // 檢查瀏覽器是否支援通知
    if (!("Notification" in window)) {
        console.log("此瀏覽器不支援桌面通知，回退到頁面內通知");
        initMobileNotifications();
        return;
    }
    
    // 請求通知權限
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("桌面通知權限已授予");
                checkForNewPrivateMessages();
            } else {
                console.log("桌面通知權限被拒絕，使用頁面內通知");
                initMobileNotifications();
            }
        });
    } else if (Notification.permission === "granted") {
        // 如果已經有權限，直接初始化
        checkForNewPrivateMessages();
    } else {
        console.log("桌面通知權限被拒絕，使用頁面內通知");
        initMobileNotifications();
    }
}

// 顯示通知 - 根據平台選擇通知方式
function showNotification(title, body, fromUid, icon = null) {
    const isMobile = window.innerWidth <= 600;
    
    if (isMobile || Notification.permission !== "granted") {
        // 手機版或無桌面通知權限時使用頁面內通知
        showMobileNotification(fromUid, body, title);
    } else {
        // 電腦版使用桌面通知
        showDesktopNotification(title, body, fromUid, icon);
        // 同時顯示頁面內通知作為備用
        showMobileNotification(fromUid, body, title);
    }
}

// 手機版頁面內通知
function showMobileNotification(fromUid, message, nickname) {
    console.log('📱 顯示手機版通知:', { fromUid, message, nickname });
    console.log('🔍 當前狀態檢查:', { 
        currentChat, 
        currentPrivateRoomId, 
        currentPrivateUid,
        isInPrivateMode: currentChat === 'private',
        hasPrivateRoom: !!currentPrivateRoomId
    });
    
    // 避免在當前私訊對話中顯示通知 - 更嚴格的檢查
    const currentRoomId = currentPrivateRoomId;
    const messageRoomId = `${[fromUid, currentUser.uid].sort().join('_')}`;
    
    // 檢查是否在私訊模式且正在與此用戶對話
    const isInPrivateChat = currentChat === 'private' && currentPrivateRoomId;
    const isSameRoom = currentRoomId === messageRoomId;
    const isSameUser = currentPrivateUid === fromUid;
    const shouldSkipNotification = isInPrivateChat && (isSameRoom || isSameUser);
    
    console.log('🔍 通知檢查詳細:', {
        fromUid,
        currentRoomId,
        messageRoomId,
        isInPrivateChat,
        isSameRoom,
        isSameUser,
        shouldSkipNotification
    });
    
    if (shouldSkipNotification) {
        console.log('⏭️ 跳過通知：正在與此用戶私訊中');
        return;
    }

    // 防止通知過於頻繁
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

    // 設置通知內容
    const shortMessage = message.length > 30 ? message.substring(0, 30) + '...' : message;
    notificationText.textContent = `${nickname || '匿名用戶'}: ${shortMessage}`;
    
    // 手機版特殊樣式
    if (window.innerWidth <= 600) {
        notificationBar.style.position = 'fixed';
        notificationBar.style.top = '10px';
        notificationBar.style.left = '50%';
        notificationBar.style.transform = 'translateX(-50%)';
        notificationBar.style.width = '90%';
        notificationBar.style.maxWidth = '400px';
        notificationBar.style.zIndex = '10000';
        notificationBar.style.margin = '0';
    }
    
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
    
    // 手機版顯示時間較長（5秒），電腦版較短（3秒）
    const hideDelay = window.innerWidth <= 600 ? 5000 : 3000;
    setTimeout(() => {
        if (activeNotifications.has(fromUid)) {
            hidePrivateMessageNotification();
        }
    }, hideDelay);
}

// 顯示桌面通知
function showDesktopNotification(title, body, fromUid = null, icon = null) {
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
    
    // 點擊通知時聚焦到視窗並導航到私訊
    notification.onclick = function() {
        window.focus();
        notification.close();
        
        // 如果有fromUid，導航到該私訊
        if (fromUid) {
            openPrivateChat(fromUid);
        }
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
    
    console.log('🔍 檢查新私訊 - 跳過，使用統一的全域監聽器');
    // 移除重複的監聽邏輯，只使用 startGlobalPrivateMessageMonitoring 的統一監聽器
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
  
  // 先停止所有監聽器，確保乾淨切換
  stopAllListeners();
  
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
  
  // 初始化通知系統
  initNotificationSystem();
  
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
      loadFriendsList();
    });
    
    // 手機版登出按鈕事件
    document.getElementById('logout-btn-mobile')?.addEventListener('click', () => {
      closeMobileSidebar();
      logoutHandler();
    });
    
    document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
      document.querySelector('.user-dropdown-menu').classList.remove('show');
      // 顯示編輯個人資料 modal
      document.getElementById('edit-profile-modal').style.display = 'block';
      
      // 預填目前的用戶資料
      document.getElementById('edit-nickname').value = currentUser.nickname || '';
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
  
  // 基本點擊測試
  document.body.addEventListener('click', (e) => {
    console.log('🖱️ BASIC CLICK TEST - Any click detected:', e.target.tagName, e.target.className, e.target);
  });
  
  // 基本觸摸測試
  document.body.addEventListener('touchstart', (e) => {
    console.log('📱 BASIC TOUCH TEST - Any touch detected:', e.target.tagName, e.target.className, e.target);
  });
  
  // 改寫委派：使用 closest + elementFromPoint fallback
  function resolveRealTarget(evt) {
    // 如果 target = #chat，嘗試用座標再取一次實際元素
    let t = evt.target;
    if (t && t.id === 'chat') {
      const touch = evt.changedTouches ? evt.changedTouches[0] : null;
      const x = touch ? touch.clientX : evt.clientX;
      const y = touch ? touch.clientY : evt.clientY;
      const el = document.elementFromPoint(x, y);
      if (el && el !== t) {
        console.log('🔍 elementFromPoint fallback 命中:', el);
        t = el;
      }
      // 追加：多層掃描，找出第一個含 data-friend-click / data-private-click / data-room-id 的元素
      const stack = document.elementsFromPoint(x, y);
      let candidate = null;
      for (const node of stack) {
        if (node.hasAttribute?.('data-friend-click') || node.hasAttribute?.('data-private-click') || node.hasAttribute?.('data-room-id')) {
          candidate = node;
          break;
        }
      }
      if (candidate && candidate !== t) {
        console.log('🧱 elementsFromPoint 選到候選節點:', candidate);
        t = candidate;
      } else if (!candidate) {
        console.log('🧱 elementsFromPoint 未找到可點擊候選 stack=', stack.slice(0,6));
      }
    }
    return t;
  }

  function handleActivate(evt, source) {
    const target = resolveRealTarget(evt);
    const friendNode = target.closest('[data-friend-click]');
    let privateNode = target.closest('[data-private-click]');
    // 備援：有些節點可能只有 data-room-id
    if (!privateNode) {
      const roomNode = target.closest('[data-room-id]');
      if (roomNode) {
        privateNode = roomNode;
        // 若缺少 data-private-click，補上，方便後續點擊
        if (!roomNode.getAttribute('data-private-click')) {
          const ridTmp = roomNode.getAttribute('data-room-id');
            roomNode.setAttribute('data-private-click', ridTmp);
        }
      }
    }
    if (friendNode) {
      const id = friendNode.getAttribute('data-friend-click');
      console.log(`🎯 ${source} friend activate:`, id, 'raw target:', evt.target, 'resolved:', target);
      startPrivateChat(id);
      return true;
    }
    if (privateNode) {
      const rid = privateNode.getAttribute('data-private-click');
      const title = privateNode.getAttribute('data-private-title') || '私人對話';
      console.log(`💬 ${source} private activate:`, rid, 'raw target:', evt.target, 'resolved:', target);
      enterRoom(rid, title);
      return true;
    }
    return false;
  }

  document.body.addEventListener('click', (e) => {
    handleActivate(e, 'click');
  });
  document.body.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length > 1) return; // 忽略多指
    handleActivate(e, 'touchend');
  }, { passive: true });

  // 動態插入臨時樣式：避免標題區攔截指標事件
  if (!document.getElementById('private-chat-pointer-style')) {
    const style = document.createElement('style');
    style.id = 'private-chat-pointer-style';
    style.textContent = `
      #chat h4, #chat .private-chat-list-wrapper > h4 { pointer-events: none !important; }
      #chat .private-chat-list-wrapper { position: relative; }
    `;
    document.head.appendChild(style);
  }

  // ===== 追加：在捕獲階段做一次命中測試（解決頂部幾個項目無法點擊問題） =====
  const chatEl = document.getElementById('chat');
  if (chatEl) {
    ['click','touchend'].forEach(type => {
      chatEl.addEventListener(type, (evt) => {
        if (type === 'touchend' && evt.changedTouches && evt.changedTouches.length > 1) return;
        const touch = evt.changedTouches ? evt.changedTouches[0] : null;
        const cx = touch ? touch.clientX : evt.clientX;
        const cy = touch ? touch.clientY : evt.clientY;
        const el = document.elementFromPoint(cx, cy);
        if (!el) return;
        const friendNode = el.closest('[data-friend-click]');
        const privateNode = el.closest('[data-private-click],[data-room-id]');
        if (privateNode && !el.closest('.debug-hit-outline')) {
          console.log('🧪 捕獲階段命中 private (fallback):', privateNode.getAttribute('data-private-click') || privateNode.getAttribute('data-room-id'), 'raw elementFromPoint:', el);
          // 若主流程未觸發，手動進入房間
          if (!privateNode.getAttribute('data-private-click')) {
            const rid = privateNode.getAttribute('data-room-id');
            privateNode.setAttribute('data-private-click', rid);
          }
          // 暫不阻止，交由主流程；如主流程仍未觸發，手動呼叫
          setTimeout(() => {
            // 偵測是否已經進入（可加入狀態判斷），此處直接觸發
            const rid = privateNode.getAttribute('data-private-click');
            const title = privateNode.getAttribute('data-private-title') || '私人對話';
            // 加一個旗標避免重複
            if (!privateNode.__activatedOnce) {
              privateNode.__activatedOnce = true;
              enterRoom(rid, title);
            }
          }, 0);
        }
      }, { capture: true, passive: true });
    });

    // Debug: 列出前 6 個私訊項目的位置與尺寸
    setTimeout(() => {
      const firstItems = chatEl.querySelectorAll('.private-chat-item');
      firstItems.forEach((node, idx) => {
        if (idx < 6) {
          const r = node.getBoundingClientRect();
            console.log(`📏 私訊項目[${idx}] box:`, r);
            node.style.zIndex = 5; // 提升層級
            node.style.position = 'relative';
        }
      });
    }, 500);
  }
  
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
      const currentUser = auth.currentUser;
      if (currentUser) {
        console.log('🔀 檢測到已登入用戶，準備跳轉到聊天室');
        // 不設置 sessionStorage，讓 onAuthStateChanged 處理跳轉
      } else {
        console.log('👤 用戶未登入，停留在登入頁面');
      }
    }, 1000);
  }
});
