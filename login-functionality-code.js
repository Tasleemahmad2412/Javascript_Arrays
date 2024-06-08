"use strict";
const account1 = {
  owner: "Tasleem Ahmad Naeem",
  movements: [123, 25655, 232, 354, 53, 6456, 546],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Farwa Sheikh",
  movements: [1212, 1, 22, 432, 35, 435, 46, 546456],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  //to login user we need to find the user from accounts array
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // by using this ? the pin property will only be read if the current account already exist
  if (currentAccount?.pin == Number(inputLoginPin.value)) {
  }
  //clear input fields
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
  // display UI and message
  labelWelcom.textContent = `Welcome Back ${
    currentAccount.owner.split(" ")[0]
  }`;
  constainerApp.style.opacity = 100;
  // display movements
  displayMovements(currentAccount.movements);
  // display balance
  calcDisplayBalance(currentAccount.movements);
  // display summary
  calcDisplaySummary(currentAccount.movements);
});

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

// Transfers : trsnfering money from one user to another

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
});

// Find index method
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add the movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});
