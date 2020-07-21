// login button event handler
const loginBtn = document.getElementById("login");

loginBtn.addEventListener('click', function () {
    // console.log("You just Clicked me");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'block';
});


// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    // console.log("deposit clicked");
    // in input then value, but for other innerText or innerHtml
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);

    const depositNumber = getInputNumber("depositAmount");

    /* const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber; */
    // console.log(totalDeposit);
    //writing the value in currentDeposit
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    // set input empty after each input
    document.getElementById("depositAmount").value = "";
});


// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click', function () {
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // console.log(withdrawAmount);
    // const withdrawNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getInputNumber("withdrawAmount");
    // console.log(withdrawNumber);

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    // console.log(withdrawAmount);
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}