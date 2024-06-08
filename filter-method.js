"use strict";
//REDUCE METHOD
const movements = [-1200, -234, 100, 234, 1200, -12, 145];

// other array methods they coatain parameters current, index , array
// but the reduce method it contains accumulator,current,index,array and the accumulator is like a snowball
// keeps accumulating until the value we want to return is achieved
// in our case it will be the sum of all the values
// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration no ${i} : ${acc}`);
//   return acc + cur;
// }, 100);
// this 0 is the initial vaue of the accumulator that we want to set

const balance = movements.reduce((acc, cur, i) => acc + cur, 0);

console.log(balance);

// lets do the same thing manually
// let sum = 0;
// for (let i = 0; i < movements.length; i++) {
//   sum += movements[i];
// }
// console.log(sum);

// now lets get the max value of the movements array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
