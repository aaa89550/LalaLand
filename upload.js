// upload.js
import { ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/**
 * 初始化圖片上傳
 * @param {Object} options
 * @param {string} options.fileInputId - <input type="file"> 的 ID
 * @param {string} options.previewContainerId - 縮圖預覽容器的 ID
 * @param {object} options.storage - Firebase storage 實例
 */
export function initImageUpload({ fileInputId, previewContainerId, storage }) {
  const input = document.getElementById(fileInputId);
  const preview = document.getElementById(previewContainerId);

  if (!input || !preview) {
    console.warn('❌ 找不到圖片輸入或預覽容器');
    return;
  }

  input.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 預覽圖
    const reader = new FileReader();
    reader.onload = () => {
  preview.innerHTML = `
    <div style="position: relative; display: inline-block;">
      <img src="${reader.result}" style="max-width: 100px; border-radius: 6px; margin: 6px 0;" />
      <button id="cancel-upload-btn" style="
        position: absolute; top: -8px; right: -8px;
        background: red; color: white; border: none;
        border-radius: 50%; width: 20px; height: 20px; cursor: pointer;
      ">×</button>
    </div>
  `;

  // ✅ 補這行：確保預覽區顯示
  preview.style.display = 'block';

  document.getElementById('cancel-upload-btn')?.addEventListener('click', () => {
    window.currentImageUrl = null;
    input.value = '';
    preview.innerHTML = '';
    preview.style.display = 'none'; // ✅ 一併隱藏
    console.log('🚫 已取消圖片預覽與上傳 URL');
  });
};

    reader.readAsDataURL(file);

    // 上傳圖檔
    const filename = `chatImages/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const fileRef = sRef(storage, filename);

    try {
      const snap = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snap.ref);
      window.currentImageUrl = url;
      console.log("✅ 圖片上傳成功：", url);
    } catch (err) {
      alert("圖片上傳失敗！");
      console.error(err);
    }
  });
}

export function clearImagePreview() {
  const preview = document.getElementById('input-preview');
  if (preview) {
    preview.replaceChildren(); // 比 innerHTML 更穩定
    preview.style.display = 'none';
    console.log('🧹 已清除圖片預覽');
  } else {
    console.warn('⚠️ 找不到 input-preview 元素');
  }
}