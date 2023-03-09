
document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.querySelector('#bill');
    const tipSelect = document.querySelector('#tip');
    const peopleInput = document.querySelector('#people');
    const tipButtons = document.querySelectorAll('.tip-buttons button');
  
    tipButtons.forEach(button => button.addEventListener('click', function() {
      tipSelect.value = button.value;
      calculateTip();
    }));
  
    [billInput, tipSelect, peopleInput].forEach(input => {
      input.addEventListener('input', calculateTip);
    });
  
   // Get reference to the reset button
const resetButton = document.querySelector('#reset-btn');

// Add an event listener for the reset button
resetButton.addEventListener('click', function() {
  clearValues();
});

// Function to clear the tip, total, and per-person amounts
function clearValues() {
  document.querySelector('#tip-amount').textContent = '$0.00';
  document.querySelector('#total-amount').textContent = '$0.00';
  document.querySelector('#per-person-amount').textContent = '$0.00';
}

// Function to calculate the tip, total, and per-person amounts
function calculateTip() {
  const billAmount = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipSelect.value);
  const numPeople = parseInt(peopleInput.value);

  // Handle invalid input values
  if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople)) {
    clearValues(); // clear the HTML elements
    return;
  }

  // Calculate the tip, total, and per-person amounts
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const perPersonAmount = totalAmount / numPeople;

  // Update the HTML elements to display the calculated values
  document.querySelector('#tip-amount').textContent = '$' + tipAmount.toFixed(2);
  document.querySelector('#total-amount').textContent = '$' + totalAmount.toFixed(2);
  document.querySelector('#per-person-amount').textContent = '$' + perPersonAmount.toFixed(2);
}})

