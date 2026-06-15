if (!localStorage.getItem('xenvault_session')) location.href = '../index.html';

document.getElementById('logoutBtn')?.addEventListener('click', () => {
  localStorage.removeItem('xenvault_session');
  location.href = '../index.html';
});

document.getElementById('transactionForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const transactions = JSON.parse(localStorage.getItem('xenvault_transactions') || '[]');
  
  transactions.push({
    description: form.description.value,
    amount: form.amount.value,
    type: form.type.value,
    timestamp: Date.now()
  });
  
  localStorage.setItem('xenvault_transactions', JSON.stringify(transactions));
  location.href = 'dashboard.html';
});
