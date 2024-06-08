"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// we are gonna use Js builtin sort method

// strings
const owners = ["Jonas", "Tasleem", "Farwa", "Ahmad"];
console.log(owners.sort());
// Numbers
// console.log(movements.sort());
// this method converts everything to strings then it does sorting

// this is how we sort numbers
// return < 0 A,B (keep order)
// return >0, B,A (switch order)

//Ascending order
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

// simpplified
movements.sort((a, b) => a - b);
console.log(movements);

//Descending Order
// movements.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (b < a) {
//     return -1;
//   }
// });
movements.sort((a, b) => b - a);
console.log(movements);

// Implementing it in application
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
};

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
