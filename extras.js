// extras.js

// ✅ 附加功能初始化（需從 main.js 呼叫一次）
export function initExtras() {
  // 通用元素（手機版和電腦版共用）
  const emojiBtn = document.getElementById('emoji-btn');
  const plusBtn = document.getElementById('plus-btn');
  const plusMenu = document.getElementById('plus-menu');
  const emojiPicker = document.getElementById('emoji-picker');
  const uploadBtn = document.getElementById('upload-btn');
  const uploadInput = document.getElementById('upload-input');
  
  // Emoji 按鈕事件
  if (emojiBtn && emojiPicker && plusMenu) {
    emojiBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
      plusMenu.style.display = 'none';
    });
  }

  // 上傳按鈕事件
  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      uploadInput.value = '';
      uploadInput.click();
    });
  }
  
  setupEmojiInsertion('#msg');

  // + 按鈕事件（通用）
  if (plusBtn && plusMenu) {
    plusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      plusMenu.style.display = plusMenu.style.display === 'block' ? 'none' : 'block';
      if (emojiPicker) emojiPicker.style.display = 'none';
    });
  }
  // 點頁面其他地方時收起選單
  document.addEventListener('click', () => {
    if (plusMenu) plusMenu.style.display = 'none';
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