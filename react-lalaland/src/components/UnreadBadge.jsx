// UnreadBadge.jsx - 未讀訊息紅點提示元件
import React from 'react';

export default function UnreadBadge({ count = 0, className = '' }) {
  if (count === 0) return null;

  const displayCount = count > 99 ? '99+' : count.toString();

  return (
    <span 
      className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                  min-w-[18px] h-[18px] rounded-full flex items-center justify-center 
                  px-1 ${className}`}
      style={{ fontSize: '10px' }}
    >
      {displayCount}
    </span>
  );
}

// 簡單的紅點版本（不顯示數字）
export function RedDot({ show = false, className = '' }) {
  if (!show) return null;

  return (
    <span 
      className={`absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full ${className}`}
    />
  );
}