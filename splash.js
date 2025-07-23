window.addEventListener('load', () => {
  const splash = document.querySelector('.splash');
  const main = document.getElementById('mainContent');

  if (!splash || !main) return;  // 防止錯誤

  splash.classList.add('fade-in');

  setTimeout(() => {
    splash.classList.remove('fade-in');
    splash.classList.add('fade-out');
  }, 1500);

  setTimeout(() => {
    splash.style.display = 'none';
    main.classList.add('show');
  }, 2500);
});