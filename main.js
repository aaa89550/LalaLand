import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase, ref, push, onChildAdded, onValue, set, update, onDisconnect, query, limitToLast, off
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
let currentChat = "group";
let privateChatTarget = null;
let privateChatRef = null;
let groupChatRef = null;
let privateChatListener = null;
let groupChatListener = null;
let chatListener = null;
let chatRef = null;
let currentReplyMsgId = null;
let privateChatNotificationRefs = {};
let privateChatNotificationStates = {};
let usersSnapshot = {};
let friendsSnapshot = {};
let messageMap = {};

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
        <img src="${fuser.avatar}" width="32" style="vertical-align:middle;">
        <span>${fuser.nickname}</span>
        ${onlineDot}
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
  }catch(err){
    alert(err.message);
  }
});

// 登入
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if(!email||!password) return alert('請輸入帳號密碼');
  try{
    await signInWithEmailAndPassword(auth, email, password);
  }catch(err){
    alert("登入失敗："+err.message);
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

    // 側邊欄顯示
    if (document.getElementById('sidebar-my-nickname')) {
      document.getElementById('sidebar-my-nickname').textContent = currentUser.nickname;
    }
    if (document.getElementById('sidebar-my-avatar')) {
      document.getElementById('sidebar-my-avatar').src = currentUser.avatar;
    }

    // 其他初始化
    loadUserList();
    openGroupChat();
    document.getElementById('chat-title').textContent = "大群組聊天室";
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


// 清除聊天室訊息
function clearChat() {
  document.getElementById('chat').innerHTML = '';
}

// 切換至一對一聊天
function openPrivateChat(targetUid) {
  if (groupChatListener) {
    off(groupChatRef, 'child_added', groupChatListener);
    groupChatListener = null;
  }
  if (privateChatListener) {
    off(privateChatRef, 'child_added', privateChatListener);
    privateChatListener = null;
  }
  currentChat = targetUid;
  privateChatTarget = usersSnapshot[targetUid];
  document.getElementById('chat-title').textContent = `與 ${privateChatTarget.nickname} 聊天`;
  document.getElementById('chat-tip').style.display = 'block';
  document.getElementById('chat-tip').textContent = `現在與「${privateChatTarget.nickname}」一對一私訊`;
  clearChat();
  highlightUserList();
  const ids = [currentUser.uid, targetUid].sort();
  privateChatRef = query(ref(db, `privateChats/${ids[0]}_${ids[1]}/messages`), limitToLast(50));
  privateChatListener = onChildAdded(privateChatRef, (snap) => {
    appendMessage(snap.val(), snap.key);
  });

  // 通知小紅點消失
  const li = document.getElementById('user-li-' + targetUid);
  if(li) {
    const dot = li.querySelector('.notify-dot');
    if(dot) dot.style.display = 'none';
  }
  if(privateChatNotificationStates[targetUid]) {
    privateChatNotificationStates[targetUid] = false;
  }
}

// 切換至大群組
document.getElementById('group-chat-btn').onclick = openGroupChat;
function openGroupChat() {
  if (privateChatListener) {
    off(privateChatRef, 'child_added', privateChatListener);
    privateChatListener = null;
  }
  if (groupChatListener) {
    off(groupChatRef, 'child_added', groupChatListener);
    groupChatListener = null;
  }
  currentChat = "group";
  document.getElementById('chat-title').textContent = "大群組聊天室";
  document.getElementById('chat-tip').style.display = 'block';
  document.getElementById('chat-tip').textContent = "你正在大群組匿名暢聊";
  clearChat();
  highlightUserList();
  groupChatRef = query(ref(db, 'groupChat/messages'), limitToLast(50));
  groupChatListener = onChildAdded(groupChatRef, (snap) => {
    appendMessage(snap.val(), snap.key);
  });
}

// 發送訊息
const sendBtn = document.getElementById('send');
const msgInput = document.getElementById('msg');
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
  if (currentChat === "group") {
    push(ref(db, 'groupChat/messages'), msg);
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
    ${replyHtml}
    <img src="${msg.avatar || ''}" class="userpic" alt="">
    <div>
      <span class="user">${msg.user}</span>
      <span class="timestamp">${timeStr}</span><br>
      <span class="bubble">${msg.text}</span>
      <button class="reply-btn" data-id="${msgId}" title="回覆">↩</button>
    </div>
  `;

  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;

    const btn = div.querySelector('.reply-btn');
  if (btn) {
    btn.onclick = function(e) {
      e.stopPropagation();
      setReplyTarget(msgId, msg);
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


// 一對一私訊通知機制
function setupPrivateChatNotifications() {
  onValue(ref(db, 'users'), (snapshot) => {
    const users = snapshot.val() || {};
    Object.values(users).forEach(user => {
      if (user.uid === currentUser.uid) return;
      const ids = [currentUser.uid, user.uid].sort();
      const chatPath = `privateChats/${ids[0]}_${ids[1]}/messages`;
      if (!privateChatNotificationRefs[chatPath]) {
        privateChatNotificationRefs[chatPath] = onChildAdded(
          query(ref(db, chatPath), limitToLast(1)),
          (snap) => {
            const msg = snap.val();
            if (msg && msg.from === user.uid && currentChat !== user.uid) {
              const li = document.getElementById('user-li-' + user.uid);
              if (li) {
                const dot = li.querySelector('.notify-dot');
                if(dot) dot.style.display = 'inline';
              }
              privateChatNotificationStates[user.uid] = true;
              if (window.Notification && Notification.permission === "granted") {
                new Notification(`新私訊來自 ${user.nickname}`, { body: msg.text, icon: user.avatar });
              }
            }
          }
        );
      }
    });
  });
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
}

// ========= Firebase Auth 狀態監聽 & 用戶同步/好友機制重寫版 =========


onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = {
      uid: user.uid,
      nickname: user.displayName ?? '',
      avatar: user.photoURL ?? ''
    };
    listenAllUsers();   // 監聽 /users
    listenFriends();    // 監聽 /users/{uid}/friends
    listenFriendRequestsPopup();
    showMainUI();
  } else {
    currentUser = null;
    showAuthUI();
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

document.getElementById('group-chat-btn-mobile')?.addEventListener('click', function () {
  openGroupChat();
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

// 桌機登出
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) logoutBtn.onclick = logoutHandler;

// 手機 drawer 登出
const logoutBtnMobile = document.getElementById('logout-btn-mobile');
if (logoutBtnMobile) logoutBtnMobile.onclick = logoutHandler;

// 統一的登出流程
async function logoutHandler() {
  if (!auth.currentUser) return;
  await update(ref(db, 'users/' + auth.currentUser.uid), {
    online: false,
    lastActive: Date.now()
  });
  await signOut(auth);
  location.reload();
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

// 手機 sidebar drawer 控制
const mobileSidebarBtn = document.getElementById('mobile-sidebar-btn');
const mobileSidebarDrawer = document.getElementById('mobile-sidebar-drawer');
const closeMobileSidebar = document.getElementById('close-mobile-sidebar');

function openMobileSidebar() {
  mobileSidebarDrawer.classList.add('open');
  document.body.style.overflow = 'hidden'; // 防止背景滾動
}
function closeMobileSidebarDrawer() {
  mobileSidebarDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

mobileSidebarBtn.addEventListener('click', openMobileSidebar);
closeMobileSidebar.addEventListener('click', closeMobileSidebarDrawer);
mobileSidebarDrawer.addEventListener('click', function(e){
  // 點 drawer 背景也能關閉
  if(e.target === this) closeMobileSidebarDrawer();
});

// 只在手機版顯示漢堡按鈕
document.addEventListener('DOMContentLoaded', function() {
  function updateMobileSidebarBtn() {
    var sidebarBtn = document.getElementById('sidebar-btn');
    if (!sidebarBtn) return; // 如果找不到就不做
    if (window.innerWidth < 768) {
      sidebarBtn.style.display = 'block';
    } else {
      sidebarBtn.style.display = 'none';
    }
  }

  window.addEventListener('resize', updateMobileSidebarBtn);
  updateMobileSidebarBtn();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => { console.log('Service Worker 註冊成功', reg); })
    .catch(err => { console.log('Service Worker 註冊失敗', err); });
}