// Handle login form submission for both inline modal and standalone page
var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var emailEl = document.getElementById('email');
    var passwordEl = document.getElementById('password');
    var email = emailEl ? emailEl.value.trim() : '';
    var password = passwordEl ? passwordEl.value.trim() : '';
    if (email === '' || password === '') {
      return;
    }
    localStorage.setItem('xenvault_session', 'active');
    localStorage.setItem('xenvault_user', email);

    // Decide redirect path depending on current page location
    var redirectPath = window.location.pathname.indexOf('/pages/') !== -1 ? 'dashboard.html' : 'pages/dashboard.html';
    window.location.href = redirectPath;
  });
}

// Simple modal show/hide for the landing page
var startBtn = document.getElementById('start-tracking');
var loginModal = document.getElementById('loginModal');
var closeLogin = document.getElementById('closeLogin');
if (startBtn && loginModal) {
  startBtn.addEventListener('click', function () {
    loginModal.classList.add('show');
    // focus first field when opened
    var f = document.getElementById('email');
    if (f) f.focus();
  });
}
if (closeLogin && loginModal) {
  closeLogin.addEventListener('click', function () {
    loginModal.classList.remove('show');
  });
}
// Close when clicking on overlay
if (loginModal) {
  loginModal.addEventListener('click', function (e) {
    if (e.target === loginModal) {
      loginModal.classList.remove('show');
    }
  });
}
