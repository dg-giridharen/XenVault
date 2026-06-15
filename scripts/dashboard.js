if (!localStorage.getItem('xenvault_session')) location.href = '../index.html';

const transactions = JSON.parse(localStorage.getItem('xenvault_transactions') || '[]');

let income = 0;
let expense = 0;

for (let i = 0; i < transactions.length; i++) {
  const item = transactions[i];
  const amount = Number(item.amount) || 0;
  if (item.type === 'Income') {
    income += amount;
  } else {
    expense += amount;
  }
}

document.getElementById('totalIncome').textContent = '$' + income.toFixed(2);
document.getElementById('totalExpense').textContent = '$' + expense.toFixed(2);
document.getElementById('netBalance').textContent = '$' + (income - expense).toFixed(2);

const tbody = document.getElementById('transactionTableBody');
if (tbody) {
  tbody.innerHTML = '';
  for (let i = transactions.length - 1; i >= 0; i--) {
    const item = transactions[i];
    const row = document.createElement('tr');
    
    const descCell = document.createElement('td');
    descCell.textContent = item.description;
    
    const typeCell = document.createElement('td');
    typeCell.textContent = item.type;
    
    const amountCell = document.createElement('td');
    amountCell.textContent = (item.type === 'Income' ? '+' : '-') + ' $' + Number(item.amount).toFixed(2);
    amountCell.className = item.type === 'Income' ? 'stat-income' : 'stat-expense';
    
    const dateCell = document.createElement('td');
    dateCell.textContent = item.timestamp ? new Date(item.timestamp).toLocaleString() : '';
    
    row.appendChild(descCell);
    row.appendChild(typeCell);
    row.appendChild(amountCell);
    row.appendChild(dateCell);
    tbody.appendChild(row);
  }
}

const isDark = document.documentElement.classList.contains('dark');
Chart.defaults.color = isDark ? '#e2e8f0' : '#0f172a';

const ctxPie = document.getElementById('incomeExpenseChart').getContext('2d');
new Chart(ctxPie, {
  type: 'doughnut',
  data: {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#2563eb', '#d97706'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10
    },
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

const sorted = transactions.slice().sort((a, b) => a.timestamp - b.timestamp);
let balance = 0;
const labels = [];
const points = [];

for (let i = 0; i < sorted.length; i++) {
  const item = sorted[i];
  balance += (item.type === 'Income' ? 1 : -1) * Number(item.amount);
  labels.push(new Date(item.timestamp).toLocaleDateString());
  points.push(balance);
}

const ctxLine = document.getElementById('timelineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Balance',
      data: points,
      borderColor: '#059669',
      backgroundColor: 'rgba(5, 150, 105, 0.1)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10
    },
    plugins: {
      legend: { display: false }
    }
  }
});

document.getElementById('logoutBtn')?.addEventListener('click', () => {
  localStorage.removeItem('xenvault_session');
  localStorage.removeItem('xenvault_user');
  location.href = '../index.html';
});
