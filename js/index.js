// get Value from input
function getValuefromInput(id) {
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}

// get Value from element
function getValuefromElement(id) {
    const elementField = document.getElementById(id);
    const elementValueString = elementField.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

// Add event handler on calculate btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get total expenses
    const foodExpense = getValuefromInput('food-expense');
    if (foodExpense < 0 || isNaN(foodExpense)) {
        alert("You can't live without food");
        return;
    }
    const rentExpense = getValuefromInput('rent-expense');
    if (rentExpense < 0 || isNaN(rentExpense)) {
        alert("You can't live without house");
        return;
    }
    const clothExpense = getValuefromInput('cloth-expense');
    if (clothExpense < 0 || isNaN(clothExpense)) {
        alert("Cloths are necessary");
        return;
    }
    const totalExpenses = foodExpense + rentExpense + clothExpense;
    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = totalExpenses;
    

    // Balance after expenses
    const income = getValuefromInput('income');
    if (income < 0 || isNaN(income)) {
        alert("Income not valid");
        return;
    }
    else if (totalExpenses > income) {
        alert("You can't spend more than your income");
        return;
    }
    const balanceAfterExpenses = income - totalExpenses;
    const balanceAfterExpensesField = document.getElementById('balance-after-expenses');
    balanceAfterExpensesField.innerText = balanceAfterExpenses;
});

// Add event handler on save btn
document.getElementById('save-btn').addEventListener('click', function () {
    // Get saving amount
    const income = getValuefromInput('income');
    if (income < 0 || isNaN(income)) {
        alert("Income not valid");
        return;
    }
    const savingPercentage = getValuefromInput('savings-percentage');
    if (savingPercentage < 0 || isNaN(savingPercentage) || savingPercentage > 100) {
        alert("Please input valid number only");
        return;
    }
    const savingAmount = income * savingPercentage / 100;
    const savingAmountField = document.getElementById('saving-amount');
    savingAmountField.innerText = savingAmount;
    const balanceAfterExpenses = getValuefromElement('balance-after-expenses');

    // Final balance
    const finalBalance = balanceAfterExpenses - savingAmount;
    const finalBalanceField = document.getElementById('final-balance');
    finalBalanceField.innerText = finalBalance;
});