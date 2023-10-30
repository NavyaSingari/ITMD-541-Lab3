// Get references to form elements
const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipRangeInput = document.getElementById('tipRange');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');
const billForm = document.getElementById('billForm');

// Add event listeners for input and change events
billForm.addEventListener('input', calculateBill);
billForm.addEventListener('change', calculateBill);

function calculateBill() {
    // Get the values
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseInt(tipRangeInput.value);

    // Validate billTotal
    if (isNaN(billTotal)) {
        alert('Please enter a valid bill amount.');
        return;
    }

    // Calculate tip amount and total with tip
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;

    // Update the disabled fields with calculated values
    tipPercentageInput.value = tipPercentage + '%';
    tipAmountInput.value = tipAmount.toFixed(2);
    totalWithTipInput.value = totalWithTip.toFixed(2);
}
