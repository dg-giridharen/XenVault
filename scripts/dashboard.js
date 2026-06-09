var token = localStorage.getItem('xenvault_session');
if (!token) {
  window.location.href = '../index.html';
}

var transactionForm = document.getElementById('transactionForm');
var transactionList = document.getElementById('transactionList');
var totalIncomeEl = document.getElementById('totalIncome');
var totalExpenseEl = document.getElementById('totalExpense');
var netBalanceEl = document.getElementById('netBalance');
var totalIncome = 0;
var totalExpense = 0;

if (transactionForm && transactionList) {
  transactionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var description = document.getElementById('description').value.trim();
    var amount = document.getElementById('amount').value;
    var type = document.getElementById('type').value;
    var amountValue = parseFloat(amount);
    if (description === '' || isNaN(amountValue) || amountValue <= 0) {
      return;
    }

    var sign = '+ $';
    if (type !== 'Income') {
      sign = '- $';
    }
    var newItem = '<li class="transaction-item">'
      + description + ' (' + type + ') '
      + sign + amountValue.toFixed(2)
      + '</li>';

    transactionList.innerHTML = transactionList.innerHTML + newItem;

    if (type === 'Income') {
      totalIncome = totalIncome + amountValue;
    } else {
      totalExpense = totalExpense + amountValue;
    }

    totalIncomeEl.textContent = '$' + totalIncome.toFixed(2);
    totalExpenseEl.textContent = '$' + totalExpense.toFixed(2);
    netBalanceEl.textContent = '$' + (totalIncome - totalExpense).toFixed(2);
    transactionForm.reset();
  });
}

var logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('xenvault_session');
    localStorage.removeItem('xenvault_user');
    window.location.href = '../index.html';
  });
}
