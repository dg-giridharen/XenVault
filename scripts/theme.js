const btn = document.getElementById('theme-toggle'), toggle = (dark) => {
  document.documentElement.classList.toggle('dark', dark);
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
};
toggle(localStorage.getItem('theme') === 'dark');
btn?.addEventListener('click', () => {
  const dark = !document.documentElement.classList.contains('dark');
  toggle(dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});
