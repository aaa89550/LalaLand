// linkify.js

/**
 * 將訊息文字中的網址轉換成可點擊的超連結
 * @param {string} text - 原始文字訊息
 * @returns {string} - 含 <a> 標籤的 HTML
 */

function linkify(text) {
  if (!text) return '';

  // 匹配所有可能的 URL 模式：YouTube、圖片、或一般連結
  // 這個正則表達式會先嘗試匹配 YouTube 連結，然後是圖片連結，最後是通用連結。
  // 注意：這裡只會處理獨立的 URL。如果 URL 被其他文字包圍，它仍然會被識別。
  const allUrlPattern = /(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11}))|(https?:\/\/[^\s]+\.(?:jpeg|jpg|png|gif|webp|bmp|svg)(\?.*)?)|(https?:\/\/[^\s]+)/gi;

  return text.replace(allUrlPattern, (match, youtubeUrl, videoId, imageUrl, _imgExt, generalUrl) => {
    // 檢查是否為 YouTube 連結 (Group 1: youtubeUrl, Group 2: videoId)
    if (youtubeUrl && videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return `
        <div class="youtube-preview">
          <iframe width="100%" height="215"
            src="${embedUrl}"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      `;
    }
    // 檢查是否為圖片連結 (Group 3: imageUrl)
    else     if (imageUrl) {
      const safeUrl = imageUrl.replace(/"/g, '&quot;');
      return `<img src="${safeUrl}" alt="image" style="max-width: 100%; border-radius: 6px; margin-top: 6px;" loading="lazy" />`;
    }
    // 3. 特例：imgur 分享頁（非圖片結尾）
    else if (generalUrl && /^https?:\/\/(www\.)?imgur\.com\/[a-zA-Z0-9]+$/.test(generalUrl)) {
      const id = generalUrl.split('/').pop();
      const imgUrl = `https://i.imgur.com/${id}.jpg`;
      return `<img src="${imgUrl}" alt="imgur image" style="max-width: 100%; border-radius: 6px; margin-top: 6px;" loading="lazy" />`;
    }
    // 處理一般連結 (Group 4: generalUrl)
    else if (generalUrl) {
      const safeUrl = generalUrl.replace(/"/g, '&quot;'); // 確保 URL 安全
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${generalUrl}</a>`;
    }
    // 如果沒有匹配到任何特定類型，返回原始匹配 (理論上應該不會走到這裡)
    return match;
  });
}