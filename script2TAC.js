let select = document.querySelectorAll('.lower,.upper');
let totalAmountDiv = document.getElementById('total-amount');
let totalAmount = 0;

select.forEach(selects => {
  selects.addEventListener('click', () => {
    selects.classList.toggle('selected');
    let amount = parseInt(selects.getAttribute('data-amount'));
    if (selects.classList.contains('selected')) {
      totalAmount += amount;
    } else {
      totalAmount -= amount;
    }
    totalAmountDiv.textContent = `Pay ₹${totalAmount}`;
  });
});