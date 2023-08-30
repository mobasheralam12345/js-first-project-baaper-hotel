   
   
   document.getElementById('btn-deposit').addEventListener('click',function(){

        const depositInputField = document.getElementById('deposit-input-field');
        const newDepositAmountString = depositInputField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);

        depositInputField.value = '';

        if(isNaN(newDepositAmount)){
            alert('Please Provide me a valid number');
            return;
        }

        const depositTotalElement = document.getElementById('deposit-h2-total');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDeposit = parseFloat(previousDepositTotalString);

        
        const balanceTotalElement = document.getElementById('total-balance');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        if(newDepositAmount > previousBalanceTotal){
            alert('Please Provide me Enough amount');
            return;
         }

        const currentDepositTotal = previousDeposit + newDepositAmount;
        depositTotalElement.innerText = currentDepositTotal;

        const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
        
    })