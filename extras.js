// extras.js

// ✅ 附加功能初始化（需從 main.js 呼叫一次）
export function initExtras() {
  // 電腦版元素
  const emojiBtn = document.getElementById('emoji-btn');
  const plusBtn = document.getElementById('plus-btn');
  const plusMenu = document.getElementById('plus-menu');
  const emojiPicker = document.getElementById('emoji-picker');
  const uploadBtn = document.getElementById('upload-btn');
  const uploadInput = document.getElementById('upload-input');
  
  // 手機版元素
  const emojiBtnMobile = document.getElementById('emoji-btn-mobile');
  const plusBtnMobile = document.getElementById('plus-btn-mobile');
  const plusMenuMobile = document.getElementById('plus-menu-mobile');
  const uploadBtnMobile = document.getElementById('upload-btn-mobile');
  const uploadInputMobile = document.getElementById('upload-input-mobile');
  
  // 電腦版 emoji 按鈕
  if (emojiBtn) {
    emojiBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
      plusMenu.style.display = 'none';
    });
  }
  
  // 手機版 emoji 按鈕
  if (emojiBtnMobile) {
    emojiBtnMobile.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
      plusMenuMobile.style.display = 'none';
    });
  }

  // 電腦版上傳按鈕
  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      uploadInput.value = ''; // ✅ 重設檔案欄位
      uploadInput.click();
    });
  }
  
  // 手機版上傳按鈕
  if (uploadBtnMobile && uploadInputMobile) {
    uploadBtnMobile.addEventListener('click', () => {
      uploadInputMobile.value = ''; // ✅ 重設檔案欄位
      uploadInputMobile.click();
    });
  }
  

  setupEmojiInsertion('#msg'); // 假設你的輸入框 id 是 msg

  // 電腦版 + 按鈕
  if (plusBtn) {
    plusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      plusMenu.style.display = plusMenu.style.display === 'block' ? 'none' : 'block';
      emojiPicker.style.display = 'none';
    });
  }
  
  // 手機版 + 按鈕
  if (plusBtnMobile) {
    plusBtnMobile.addEventListener('click', (e) => {
      e.stopPropagation();
      plusMenuMobile.style.display = plusMenuMobile.style.display === 'block' ? 'none' : 'block';
      emojiPicker.style.display = 'none';
    });
  }

  // 點頁面其他地方時收起選單
  document.addEventListener('click', () => {
    if (plusMenu) plusMenu.style.display = 'none';
    if (plusMenuMobile) plusMenuMobile.style.display = 'none';
    if (emojiPicker) emojiPicker.style.display = 'none';
  });
}

// 插入 emoji 到輸入框
function setupEmojiInsertion(inputSelector = '#msg') {
  const picker = document.getElementById('emoji-picker');
  const input = document.querySelector(inputSelector);

  if (!picker || !input) return;

  picker.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const emoji = e.target.textContent;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const text = input.value;
      input.value = text.slice(0, start) + emoji + text.slice(end);
      input.selectionStart = input.selectionEnd = start + emoji.length;
      input.focus();
    }
  });
}