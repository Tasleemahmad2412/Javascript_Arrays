// "use strict";
//  data transformation methods
//  1. Map
//  another method that we can use to loop over arrays
//  will give a brand new array which is a result of the callback function'
const movements = [-1200, -234, 100, 234, 1200, -12, 145];
//  const EurotoUSD = 1.1;

//  const movementsUSD = movements.map(function (mov) {
//    return mov * EurotoUSD;
//  });

//  const movementsUSD1 = movements.map((mov) => mov * EurotoUSD);

//  console.log(movements);
//  console.log(movementsUSD);

//  movements.map((mov, i, arr) => {
//    `movement ${i + 1} : you ${mov > 0 ? "Deposited" : "Withdraw"} ${Math.abs(
//      mov
//   )}`;

//    if (mov > 0) {
//      return `movement ${i + 1} : you deposited ${mov}`;
//    } else {
//      return `movement ${i + 1} : you Withdraw ${Math.abs(mov)}`;
//    }
//  });

// COMPUTING USERNAMES
const account1 = {
  owner: "Tasleem Ahmad Naeem",
  movements: [123, 25655, 232, 354, 53, 6456, 546],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Farwa Tasleem Sheikh",
  movements: [1212, 1, 22, 432, 35, 435, 46, 546456],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

//username will be simpaly the initials of each of the users

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

//   const username = user
//     .toLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
//   return username;
// };

// const user = "Tasleem Ahmad Naeem"; // tan
// createUsernames(accounts);
// console.log(accounts);

// Filter method
const deposits = movements.filter((mov) => mov > 0);

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// array of withdrawls
const withdraws = movements.filter((mov) => mov < 0);
console.log(withdraws);

// REDUCE method
