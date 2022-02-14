// #1 input function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    // clear input field 
    inputField.value = '';

    return inputAmount;
}
// #2 deposit and withdraw function 
function updateTotalAmount(totalAmountId, amount) {
    const totalAmountEntered = document.getElementById(totalAmountId);
    const totalAmountText = totalAmountEntered.innerText;
    const previousTotal = parseFloat(totalAmountText);
    // summation of deposit section 
    totalAmountEntered.innerText = previousTotal + amount;
}

// #3 Net balance function 
function updateNetBalance(amountChange, isadd) {
    const netBalance = document.getElementById('total-balance');
    const netBalanceText = netBalance.innerText;
    const netBalanceAmount = parseFloat(netBalanceText);
    if (isadd == true) {
        netBalance.innerText = netBalanceAmount + amountChange;
    }
    else {
        netBalance.innerText = netBalanceAmount - amountChange;
    }

}

// deposit money functionality
document.getElementById('deposit-button').addEventListener('click', function () {

    // without declaring function
    /*
        // get deposit input 
        const depositMoney = document.getElementById('deposit-input');
        const depositMoneyText = depositMoney.value;
        const deposited = parseFloat(depositMoneyText); 
    
        // get and update deposit total
        const newDeposited = document.getElementById('total-deposit');
        const previousDepositedText = newDeposited.innerText;
        const previousDepositedTotal = parseFloat(previousDepositedText);
        // summation of deposit section 
        newDeposited.innerText = previousDepositedTotal + deposited;
    
        // added total deposit to net account balance 
        const netBalance = document.getElementById('total-balance');
        const netBalanceText = netBalance.innerText;
        const netBalanceAmount = parseFloat(netBalanceText);
        netBalance.innerText = netBalanceAmount + deposited;
    */

    // with function
    const deposited = getInputValue('deposit-input');
    updateTotalAmount('total-deposit', deposited);
    updateNetBalance(deposited, true);
});

// withdraw money functionality 
document.getElementById('Withdraw-button').addEventListener('click', function () {
    // without declaring function
    /*
        // get withdraw amount 
        const withdraw = document.getElementById('withdraw-input');
        const withdrawAmountText = withdraw.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);
    
        // get and update withdraw total
        const totalWithdraw = document.getElementById('total-withdraw');
        const totalWithdrawText = totalWithdraw.innerText;
        const totalWithdrawAmount = parseFloat(totalWithdrawText);
        totalWithdraw.innerText = totalWithdrawAmount + newWithdrawAmount;
    
        // reduicing money from net balance 
        const netBalance = document.getElementById('total-balance');
        const netBalanceText = netBalance.innerText;
        const netBalanceAmount = parseFloat(netBalanceText);
        netBalance.innerText = netBalanceAmount - newWithdrawAmount;
    
        // clearing withdraw input 
        withdraw.value = '';
    */
    // with function
    const newWithdrawAmount = getInputValue('withdraw-input');
    updateTotalAmount('total-withdraw', newWithdrawAmount);
    updateNetBalance(newWithdrawAmount, false);
});