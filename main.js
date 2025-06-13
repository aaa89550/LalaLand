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
let usersSnapshot = {};
let privateChatNotificationRefs = {};
let privateChatNotificationStates = {};

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


// 註冊
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
    await set(ref(db, 'users/' + user.uid), {
      uid: user.uid,
      nickname,
      avatar: avatarURL,
      online: true,
      lastActive: Date.now()
    });
    onDisconnect(ref(db, 'users/' + user.uid + '/online')).set(false);
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


// 監聽登入狀態
onAuthStateChanged(auth, async (user) => {
  if(user){
    let nickname = user.displayName;
    let avatar = user.photoURL;
    let userDb = (await onValuePromise(ref(db, 'users/' + user.uid)));
    if(userDb){
      nickname = userDb.nickname || nickname;
      avatar = userDb.avatar || avatar;
    }
    currentUser = {
      uid: user.uid,
      nickname,
      avatar
    };
    await set(ref(db, 'users/' + user.uid), {
      uid: user.uid,
      nickname,
      avatar,
      online: true,
      lastActive: Date.now()
    });
    onDisconnect(ref(db, 'users/' + user.uid + '/online')).set(false);

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('auth-tabs').style.display = 'none';
    document.getElementById('main').style.display = 'flex';

    loadUserList();
    openGroupChat();
    document.getElementById('chat-title').textContent = "大群組聊天室";
    setupPrivateChatNotifications();
  }else{
    document.getElementById('main').style.display = 'none';
    document.getElementById('auth-tabs').style.display = 'flex';
    switchTab('login');
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
          <span class="notify-dot" style="display:none;color:#ff3366;font-weight:bold;font-size:18px;line-height:1;vertical-align:middle;">●</span>
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
    list.querySelectorAll('.add-friend-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const uid = btn.getAttribute('data-uid');
        addFriend(uid);
      };
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
    appendMessage(snap.val());
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
    appendMessage(snap.val());
  });
}

// 發送訊息
const sendBtn = document.getElementById('send');
const msgInput = document.getElementById('msg');
sendBtn.addEventListener('click', sendMessage);
msgInput.addEventListener('keydown', e => { if (e.key === "Enter") sendMessage(); });

function sendMessage() {
  if (!currentUser) return alert('請先登入');
  const text = msgInput.value.trim();
  if (!text) return;
  const msg = {
    user: currentUser.nickname,
    avatar: currentUser.avatar,
    from: currentUser.uid,
    text,
    time: Date.now()
  };
  if (currentChat === "group") {
    push(ref(db, 'groupChat/messages'), msg);
  } else {
    const ids = [currentUser.uid, currentChat].sort();
    push(ref(db, `privateChats/${ids[0]}_${ids[1]}/messages`), msg);
  }
  msgInput.value = '';
}

// 訊息渲染
function appendMessage(msg) {
  const chatDiv = document.getElementById('chat');
  const dt = new Date(msg.time || Date.now());
  const timeStr = dt.toLocaleTimeString();
  const div = document.createElement('div');
  div.className = 'msg' + (msg.from === currentUser.uid ? ' me' : '');
  div.innerHTML = `
    <img src="${msg.avatar || ''}" class="userpic" alt="">
    <div>
      <span class="user">${msg.user}</span>
      <span class="timestamp">${timeStr}</span><br>
      <span class="bubble">${msg.text}</span>
    </div>
  `;
  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;
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


// 加好友功能
window.addFriend = function(friendUid) {
  if (!currentUser || !friendUid) return;
  set(ref(db, `users/${currentUser.uid}/friends/${friendUid}`), true)
    .then(() => alert('已加好友！'))
    .catch(err => alert('加好友失敗：' + err.message));
};

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
function updateMobileSidebarBtn() {
  if(window.innerWidth <= 600){
    mobileSidebarBtn.style.display = "block";
  } else {
    mobileSidebarBtn.style.display = "none";
    closeMobileSidebarDrawer();
  }
}
window.addEventListener('resize', updateMobileSidebarBtn);
updateMobileSidebarBtn();

// 桌機版
const showFriendsBtn = document.getElementById('show-friends');
const userList = document.getElementById('user-list');
const friendList = document.getElementById('friend-list');
let showingFriends = false;

showFriendsBtn.onclick = function() {
  if (!showingFriends) {
    userList.style.display = 'none';
    friendList.style.display = '';
    showFriendsBtn.textContent = '返回在線成員';
    showingFriends = true;
  } else {
    userList.style.display = '';
    friendList.style.display = 'none';
    showFriendsBtn.textContent = '我的好友';
    showingFriends = false;
  }
};

// 手機版
const showFriendsBtnMobile = document.getElementById('show-friends-mobile');
const userListMobile = document.getElementById('user-list-mobile');
const friendListMobile = document.getElementById('friend-list-mobile');
let showingFriendsMobile = false;

showFriendsBtnMobile.onclick = function() {
  if (!showingFriendsMobile) {
    userListMobile.style.display = 'none';
    friendListMobile.style.display = '';
    showFriendsBtnMobile.textContent = '返回在線成員';
    showingFriendsMobile = true;
  } else {
    userListMobile.style.display = '';
    friendListMobile.style.display = 'none';
    showFriendsBtnMobile.textContent = '我的好友';
    showingFriendsMobile = false;
  }
};

userList.style.display = '';
friendList.style.display = 'none';
showFriendsBtn.textContent = '我的好友';

userListMobile.style.display = '';
friendListMobile.style.display = 'none';
showFriendsBtnMobile.textContent = '我的好友';