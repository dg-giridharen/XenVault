var themeToggle = document.getElementById('themeToggle');

function applyTheme(themeName) {
  document.body.classList.toggle('light-theme', themeName === 'light');
  if (themeToggle) {
    themeToggle.textContent = themeName === 'light' ? 'Switch to dark' : 'Switch to light';
  }
}

function loadTheme() {
  var savedTheme = localStorage.getItem('xenvault_theme') || 'dark';
  applyTheme(savedTheme);
}

function toggleTheme() {
  var nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
  localStorage.setItem('xenvault_theme', nextTheme);
  applyTheme(nextTheme);
}

loadTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    toggleTheme();
  });
}
