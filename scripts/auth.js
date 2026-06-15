const active = localStorage.getItem('xenvault_session') === 'active';
const isPages = location.pathname.includes('/pages/');
const dashUrl = isPages ? 'dashboard.html' : 'pages/dashboard.html';
const homeUrl = isPages ? '../index.html' : 'index.html';

function login(email) {
  localStorage.setItem('xenvault_session', 'active');
  localStorage.setItem('xenvault_user', email);
  location.href = dashUrl;
}

function handleGoogleLogin(resp) {
  const email = JSON.parse(atob(resp.credential.split('.')[1])).email;
  login(email || 'Google User');
}

function initGoogleSignIn() {
  const btn = document.getElementById('googleSignInButton');
  if (!window.google || !btn) return;
  google.accounts.id.initialize({
    client_id: '52468911070-9e5hv1d1up5c1s55j4e6qluig8jfj7jv.apps.googleusercontent.com',
    callback: handleGoogleLogin
  });
  google.accounts.id.renderButton(btn, { theme: 'outline', size: 'large', width: '100%' });
}

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  login(document.getElementById('email').value.trim());
});

document.getElementById('closeLogin')?.addEventListener('click', () => {
  document.getElementById('loginSection')?.classList.remove('show');
});

const modal = document.getElementById('loginSection');
modal?.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show');
});

const navBtn = document.getElementById('navLoginBtn');
if (navBtn) {
  if (active) {
    navBtn.textContent = 'Dashboard';
    navBtn.onclick = () => location.href = dashUrl;
  } else {
    navBtn.onclick = () => {
      if (modal) modal.classList.add('show');
      else location.href = homeUrl;
    };
  }
}

document.getElementById('start-tracking')?.addEventListener('click', () => {
  if (active) location.href = dashUrl;
  else modal?.classList.add('show');
});

initGoogleSignIn();
