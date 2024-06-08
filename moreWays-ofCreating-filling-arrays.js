"use strict";
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
// console.log(x);
// only method we can call on this empty array is fill()
// x.fill(3);
x.fill(1, 3);
console.log(x);

// array.from()
console.log(Array.from({ length: 7 }, () => 1));

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);
