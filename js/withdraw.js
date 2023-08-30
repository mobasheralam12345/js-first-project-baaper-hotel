

document.getElementById('withdraw-btn').addEventListener('click',function(){

   
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputFieldString = withdrawInputField.value;
    const withdrawInput = parseFloat(withdrawInputFieldString);
    
    withdrawInputField.value = '';

    if(isNaN(withdrawInput)){
        alert('Please Provide a valid number');
        return;
    }

    const withdrawH2Total = document.getElementById('withdraw-h2-total');
    const withdrawH2TotalString = withdrawH2Total.innerText;
    const withdrawH2 = parseFloat(withdrawH2TotalString);
   
    const totalWithdrawBalance = document.getElementById('total-balance');
    const totalWithdrawBalanceString = totalWithdrawBalance.innerText;
    const totalWithdraw = parseFloat(totalWithdrawBalanceString);
   

    if(withdrawInput > totalWithdraw ){
        alert('ato tk nai');
        return;
    }

    const newWithdraw = withdrawInput + withdrawH2;
    withdrawH2Total.innerText = newWithdraw;

    const finalWithdraw = totalWithdraw - withdrawInput;
    totalWithdrawBalance.innerText = finalWithdraw;

})