var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    if (email === '' || password === '') {
      return;
    }
    localStorage.setItem('xenvault_session', 'active');
    localStorage.setItem('xenvault_user', email);
    window.location.href = 'dashboard.html';
  });
}
