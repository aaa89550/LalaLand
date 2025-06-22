// extras.js

// ✅ 附加功能初始化（需從 main.js 呼叫一次）
export function initExtras() {
  const emojiBtn = document.getElementById('emoji-btn');
  const plusBtn = document.getElementById('plus-btn');
  const plusMenu = document.getElementById('plus-menu');
  const emojiPicker = document.getElementById('emoji-picker');
  const uploadBtn = document.getElementById('upload-btn');
  const uploadInput = document.getElementById('upload-input');
  
  if (emojiBtn) {
    emojiBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
      plusMenu.style.display = 'none';
    });
}

  if (uploadBtn && uploadInput) {
  uploadBtn.addEventListener('click', () => {
    uploadInput.value = ''; // ✅ 重設檔案欄位
    uploadInput.click();
  });
}
  

  setupEmojiInsertion('#msg'); // 假設你的輸入框 id 是 msg

  if (plusBtn) {
    plusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      plusMenu.style.display = plusMenu.style.display === 'block' ? 'none' : 'block';
      emojiPicker.style.display = 'none';
    });
  }

  // 點頁面其他地方時收起選單
  document.addEventListener('click', () => {
    plusMenu.style.display = 'none';
    emojiPicker.style.display = 'none';
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