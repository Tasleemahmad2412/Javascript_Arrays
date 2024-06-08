"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Tou deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(" ======================================= ");
// noew use for each loop to do same thing in an easier way

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// we cannot break out of for each loop continue and break statements donot work here atall
