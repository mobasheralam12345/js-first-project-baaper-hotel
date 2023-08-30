   
   
   document.getElementById('btn-deposit').addEventListener('click',function(){

        const depositInputField = document.getElementById('deposit-input-field');
        const newDepositAmountString = depositInputField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);

        const depositTotalElement = document.getElementById('deposit-h2-total');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDeposit = parseFloat(previousDepositTotalString);

        const currentDepositTotal = previousDeposit + newDepositAmount;
        depositTotalElement.innerText = currentDepositTotal;

        const balanceTotalElement = document.getElementById('total-balance');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
        
        depositInputField.value = '';
    })