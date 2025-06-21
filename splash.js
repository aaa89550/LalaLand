window.addEventListener('load', () => {
  const splash = document.querySelector('.splash');
  const main = document.getElementById('mainContent');

  // Step 1：淡入
  splash.classList.add('fade-in');

  // Step 2：等待 1.8 秒後淡出
  setTimeout(() => {
    splash.classList.remove('fade-in');
    splash.classList.add('fade-out');
  }, 1500);

  // Step 3：再等 1 秒（淡出動畫完成）後顯示主內容
  setTimeout(() => {
    splash.style.display = 'none';
    main.classList.add('show');
  }, 2500);
});
