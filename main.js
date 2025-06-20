import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, push, get, onChildAdded, onValue, set, child, update, onDisconnect, query, limitToLast, off
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
let privateChatNotificationRefs = {};
let privateChatNotificationStates = {};
let usersSnapshot = {};
let friendsSnapshot = {};
let messageMap = {};


function clearChat() {
  document.getElementById('chat').innerHTML = '';
}

function initializeGroupChatsIfAuthed() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      console.warn("🚫 尚未登入，跳過初始化聊天室");
      return;
    }

    const defaultRooms = ['chat', 'love', 'sex']; // 可新增其他分區
    for (const room of defaultRooms) {
      const roomRef = ref(db, `groupChats/${room}/messages`);
      try {
        const snap = await get(roomRef);
        if (!snap.exists()) {
          await set(roomRef, {});
          console.log(`✅ 已建立 ${room}/messages 分區`);
        } else {
          console.log(`⚠️ ${room}/messages 已存在，略過建立`);
        }
      } catch (err) {
        console.error(`🚨 初始化 ${room} 時出錯：`, err);
      }
    }
  });
}

// 在初始化階段呼叫它
initializeGroupChatsIfAuthed();

function switchChat(newChatId) {
  // 停用之前的監聽器
  if (chatRef && chatListener) {
    off(chatRef, 'child_added', chatListener);
  }

  // 清空畫面
  document.getElementById('chat').innerHTML = '';

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
    appendMessage(msg, msgId); // 渲染訊息

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

// 點擊每個選項切換聊天室
// ✅ 綁定所有群組聊天室按鈕（桌機 + 手機）
document.querySelectorAll('.group-chat-item, .group-chat-option').forEach(el => {
  el.addEventListener('click', () => {
    const room = el.dataset.room;
    if (room) loadGroupChat(room);

    // 若為手機，額外收起 UI
    document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
    document.getElementById('group-chat-area-mobile')?.style.setProperty('display', 'none');
  });
});

async function migrateOldGroupChatToCasual() {
  const oldRef = ref(db, 'groupChat/messages');
  const newRef = ref(db, 'groupChats/chat/messages');

  const newSnap = await get(newRef);
  if (newSnap.exists()) {
    console.log("⚠️ groupChats/chat/messages 已存在，跳過搬移");
    return;
  }

  const oldSnap = await get(oldRef);
  if (oldSnap.exists()) {
    await set(newRef, oldSnap.val());
    console.log("✅ 已搬移原本大群組訊息到 groupChats/chat/messages");
  } else {
    console.log("⚠️ 原本 groupChat/messages 無資料");
  }
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
  if (groupChatListener) {
    off(groupChatRef, 'child_added', groupChatListener);
    groupChatListener = null;
  }
  if (privateChatListener) {
    off(privateChatRef, 'child_added', privateChatListener);
    privateChatListener = null;
  }
}

const renderedMessageIds = new Set();

function loadGroupChat(room) {
  stopAllListeners();
  currentChat = "group_" + room;
  currentGroupRoom = room;

  const titleMap = {
    chat: "閒聊區",
    love: "找伴區",
    sex: "約炮區"
  };

  const tipMap = {
    chat: "歡迎隨意聊聊、發問、抒發生活大小事。",
    love: "你正在找伴專區，請多用心互動，彼此尊重。",
    sex: "匿名聊性、約炮自由，但請勿冒犯他人。"
  };

  document.getElementById('chat-title').textContent = titleMap[room] || "大群組聊天室";
  const tipEl = document.getElementById('chat-tip');
  tipEl.style.display = 'block';
  tipEl.textContent = tipMap[room] || '';

  clearChat?.();
  highlightUserList?.();

  const groupPath = `groupChats/${room}/messages`;
  groupChatRef = query(ref(db, groupPath), limitToLast(50));

  const isMobile = window.innerWidth <= 768;
  const needsFilter = isMobile && (room === 'love' || room === 'sex');

  if (needsFilter) {
    renderedMessageIds.clear(); // 清空已渲染列表

    // 先載入舊訊息
    get(groupChatRef).then(snapshot => {
      snapshot.forEach(childSnap => {
        const msgId = childSnap.key;
        if (!renderedMessageIds.has(msgId)) {
          renderedMessageIds.add(msgId);
          appendMessage?.(childSnap.val(), msgId);
        }
      });

      // 再設即時監聽器
      groupChatListener = onChildAdded(groupChatRef, snap => {
        const msgId = snap.key;
        if (!renderedMessageIds.has(msgId)) {
          renderedMessageIds.add(msgId);
          appendMessage?.(snap.val(), msgId);
        }
      });
    });
  } else {
    // 不需要特別處理，直接監聽
    groupChatListener = onChildAdded(groupChatRef, snap => {
      appendMessage?.(snap.val(), snap.key);
    });
  }

  // 收起 UI 元素
  document.getElementById('group-chat-options')?.style.setProperty('display', 'none');
  document.getElementById('group-chat-options-mobile')?.style.setProperty('display', 'none');
  document.getElementById('mobile-sidebar-drawer')?.classList.remove('open');
  document.getElementById('group-chat-area-mobile')?.style.setProperty('display', 'none');
}

// ✅ 預設進入閒聊區
window.addEventListener('load', () => {
  loadGroupChat('chat');
});

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
switchTab('login');

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

// 🔐 登入邏輯
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    return alert('請輸入帳號與密碼');
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // 登入成功後，不需額外導向，onAuthStateChanged 會自動處理 UI
    // 這裡可以記錄登入時要預設切換到哪個聊天室
    sessionStorage.setItem('lastChatRoom', 'group_chat');
  } catch (err) {
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

// 監聽登入狀態
onAuthStateChanged(auth, async (user) => {
    if (user) {
    const uid = user.uid;
    const userRef = ref(db, 'users/' + uid);
    const snap = await get(userRef);
    const data = snap.val();

    // 如果缺 nickname 或 avatar，就補上
    if (!data?.nickname || !data?.avatar) {
      const defaultNick = user.email?.split('@')[0] || '匿名用戶';
      const defaultAvatar = 'https://yourdomain.com/default.png';

      await update(userRef, {
        nickname: data?.nickname || defaultNick,
        avatar: data?.avatar || defaultAvatar
      });
    }

    currentUser = {
      uid,
      nickname: data?.nickname || defaultNick,
      avatar: data?.avatar || defaultAvatar
    };
  }
  if (user) {
    // 顯示 loading（建議放在進聊天室前，UI 更穩定）
    if (typeof showLoading === 'function') showLoading();

    let userDb = null;
    let tryCount = 0;
    const maxTries = 10;   // 視正式環境延遲可調大
    const delay = 300;     // 200~300ms

    while (tryCount < maxTries) {
      userDb = await onValuePromise(ref(db, 'users/' + user.uid));
      if (userDb && userDb.nickname && userDb.avatar) break;
      await new Promise(r => setTimeout(r, delay));
      tryCount++;
    }

    // fallback
    const nickname = (userDb && userDb.nickname) ? userDb.nickname : '新用戶';
    const avatar = (userDb && userDb.avatar) ? userDb.avatar : 'default-avatar.png';

    currentUser = {
      uid: user.uid,
      nickname,
      avatar
    };

    // 寫入/同步 online 狀態
    await update(ref(db, 'users/' + user.uid), {
      ...(userDb || {}), // 保留原有欄位
      uid: user.uid,
      nickname,
      avatar,
      online: true,
      lastActive: Date.now()
    });
    onDisconnect(ref(db, 'users/' + user.uid + '/online')).set(false);

    // UI 切換
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('auth-tabs').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    document.getElementById('mobile-sidebar-btn').style.display = 'block'; // 顯示三槓

    // 側邊欄顯示
    if (document.getElementById('sidebar-my-nickname')) {
      document.getElementById('sidebar-my-nickname').textContent = currentUser.nickname;
    }
    if (document.getElementById('sidebar-my-avatar')) {
      document.getElementById('sidebar-my-avatar').src = currentUser.avatar;
    }

    // 其他初始化
    loadUserList();
    setupPrivateChatNotifications();

    // 關閉 loading
    if (typeof hideLoading === 'function') hideLoading();

    // 若超時還是沒有資料可 alert（建議可以選擇性顯示）
    if (!userDb || !userDb.nickname || !userDb.avatar) {
      alert('載入個人資料超時，請重新整理或聯絡管理員。');
    }
  } else {
    // 未登入
    document.getElementById('main').style.display = 'none';
    document.getElementById('auth-tabs').style.display = 'flex';
    switchTab('login');
    if (typeof hideLoading === 'function') hideLoading();
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
     console.log(user.uid, user.nickname, user.online);
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
  sendBtn.addEventListener('click', sendMessage);
  msgInput.addEventListener('keydown', e => { if (e.key === "Enter") sendMessage(); });
  window.sendListenersAttached = true;
}
sendBtn.addEventListener('click', sendMessage);
msgInput.addEventListener('keydown', e => { if (e.key === "Enter") sendMessage(); });

// 訊息發送
function sendMessage() {
  if (!currentUser) return alert('請先登入');
  const text = msgInput.value.trim();
  if (!text) return;
  const msg = {
    user: currentUser.nickname,
    avatar: currentUser.avatar,
    from: currentUser.uid,
    text,
    time: Date.now(),
    replyTo: currentReplyMsgId || null
  };
  // ------ 修正這裡 -------------------
  if (currentChat && currentChat.startsWith("group_")) {
    // 取得目前群組房名
    const room = currentGroupRoom || "chat";
    push(ref(db, `groupChats/${room}/messages`), msg);
  } else {
    const ids = [currentUser.uid, currentChat].sort();
    push(ref(db, `privateChats/${ids[0]}_${ids[1]}/messages`), msg);
  }
  msgInput.value = '';
  currentReplyMsgId = null;
  clearReplyUI();
}


// 訊息渲染
function appendMessage(msg, msgId) {
  if (msgId) messageMap[msgId] = msg;

  const chatDiv = document.getElementById('chat');
  const dt = new Date(msg.time || Date.now());
  const timeStr = dt.toLocaleTimeString();

  const div = document.createElement('div');
  const isMe = msg.from === currentUser.uid;
  div.className = 'msg' + (isMe ? ' me' : '');
  div.setAttribute('data-msgid', msgId);
  
  // 回覆摘要區，永遠在最上方
  let replyHtml = '';
  if (msg.replyTo && messageMap[msg.replyTo]) {
    const original = messageMap[msg.replyTo];
    const preview = original.text.length > 5 ? original.text.slice(0, 30) + '...' : original.text;
    replyHtml = `
      <div class="reply-block">
        <span class="reply-nick">@${original.user}</span>
        <span class="reply-text">${preview}</span>
      </div>
    `;
  }

  div.innerHTML = `
    <img src="${msg.avatar || ''}" class="userpic" data-uid="${msg.from}" alt="點我私訊" title="點我私訊">
    <div>
      <span class="user">${msg.user}</span>
      <span class="timestamp">${timeStr}</span><br>
      <span class="bubble">
        ${replyHtml}
        ${msg.text}
      </span>
      <button class="reply-btn" data-id="${msgId}" title="回覆">↩</button>
    </div>
  `;

  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;

  const btn = div.querySelector('.reply-btn');
  if (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      setReplyTarget(msgId, msg);
    };
  }

  // ✅ 綁定私訊點擊事件
  const avatar = div.querySelector('.userpic');
  if (avatar && msg.from !== currentUser.uid) {
    avatar.style.cursor = 'pointer';
    avatar.onclick = (e) => {
      e.stopPropagation();
      openPrivateChat(msg.from); // 自帶切換聊天室功能
      document.getElementById('mobile-sidebar-drawer')?.classList.remove('open'); // 手機收合 sidebar
    };
  }
}


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

  currentChat = uid;
  currentPrivateUid = uid;

  const chatTitle = document.getElementById('chat-title');
  const chatTip = document.getElementById('chat-tip');
get(ref(db, `users/${uid}/nickname`)).then((snapshot) => {
  if (snapshot.exists()) {
    const nickname = snapshot.val();
    if (chatTitle) chatTitle.textContent = `${nickname} `;
    if (chatTip) chatTip.textContent = `你正在私訊中`;
  }
});

  clearChat?.();
  highlightUserList?.();

  const ids = [currentUser.uid, uid].sort();
  const privatePath = `privateChats/${ids[0]}_${ids[1]}/messages`;
  privateChatRef = query(ref(db, privatePath), limitToLast(50));

  privateChatListener = onChildAdded(privateChatRef, (snap) => {
    appendMessage?.(snap.val(), snap.key);
  });

  // 清除通知紅點（如果有）
  const li = document.getElementById('user-li-' + uid);
  if (li) {
    const dot = li.querySelector('.notify-dot');
    if(dot) dot.style.display = 'none';
  }
  privateChatNotificationStates[uid] = false;
}

// ========= Firebase Auth 狀態監聽 & 用戶同步/好友機制重寫版 =========


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

    // ✅ 顯示主畫面，隱藏登入註冊
    document.getElementById('main').style.display = 'flex';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';

    // ✅ 若登入後有預設聊天室需求（例如剛登入後）
    const lastRoom = sessionStorage.getItem('lastChatRoom');
    if (lastRoom) {
      switchChat(lastRoom);
      sessionStorage.removeItem('lastRoom');
    }

  } else {
    // ❌ 尚未登入
    currentUser = null;

    // ✅ 顯示登入頁，隱藏主畫面
    document.getElementById('main').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('register-page').style.display = 'none';
  }
});



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
  document.getElementById('chat-title').textContent = '大群組聊天室';
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

document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.onclick = logoutHandler;

  const logoutBtnMobile = document.getElementById('logout-btn-mobile');
  if (logoutBtnMobile) logoutBtnMobile.onclick = logoutHandler;
});

async function logoutHandler() {
  try {
    if (!auth.currentUser) return;
    await update(ref(db, 'users/' + auth.currentUser.uid), {
      online: false,
      lastActive: Date.now()
    });
    await signOut(auth);
    location.reload();
  } catch (e) {
    console.error("登出失敗：", e);
  }
}

// 假設你 main.js 前面已經有 import 與 firebase 初始化

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



if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}


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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // 防止自動跳出
  deferredPrompt = e;

  // 顯示你自己的按鈕或彈窗提示
  const installBtn = document.getElementById('install-btn');
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('使用者接受安裝');
      } else {
        console.log('使用者拒絕安裝');
      }
      deferredPrompt = null;
    });
  });
});
