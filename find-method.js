"use strict";

// in find method we can retrieve one element of an array based on a condition
// find method also call the callback function which will be called as we loop over the array
const movements = [-1200, -234, 100, 234, 1200, -12, 145];
// unlike the filter method the find method will not return the while array it will only return
// the first element that satisfies the condition
const fisrtWithdrawl = movements.find((mov) => mov < 0);
// above line of code will return the first withdrawl
console.log(fisrtWithdrawl);
// find methid is almost similar to filter but there are 2 differences
// 1. filter method returns all the elements that satisfy the condition but find () only return
//    first element that met the condition
// 2. filter method returns the new array while the filter method returns only the
//    element that satisfy the condition
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
//console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Farwa Sheikh");
console.log(account);

for (const account of accounts) {
  if (account.owner === "Farwa Sheikh") {
    console.log(account);
  }
}
