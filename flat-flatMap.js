"use strict";

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// no callback function

const arrDeep = [[1, 2, [3]], [4, 5, [6, 7]], 8, 9];
console.log(arrDeep.flat());
// flat method works only on one level of nesting but we can add arguments like (1,2,3) to go deeper
console.log(arrDeep.flat(2));

// =================================
// flat
const OveralBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

// flatmap combines a flat and a map method
// flatmap
const OveralBalanc = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// flatMap method only goes to one level deep
