// linkify.js

/**
 * 將訊息文字中的網址轉換成可點擊的超連結
 * @param {string} text - 原始文字訊息
 * @returns {string} - 含 <a> 標籤的 HTML
 */

function linkify(text) {
  if (!text) return '';

  // YouTube 預覽處理（需在一般連結之前處理）
  const ytRegex = /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/g;
  text = text.replace(ytRegex, (match, videoId) => {
    return `
      <div class="youtube-preview">
        <iframe width="100%" height="215"
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    `;
  });

  // 一般連結與圖片處理
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlPattern, (url) => {
    const safeUrl = url.replace(/"/g, '&quot;');
    const isImage = /\.(jpeg|jpg|png|gif|webp|bmp|svg)(\?.*)?$/i.test(url);
    if (isImage) {
      return `<img src="${safeUrl}" alt="image" style="max-width: 100%; border-radius: 6px; margin-top: 6px;" loading="lazy" />`;
    } else {
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    }
  });
}

