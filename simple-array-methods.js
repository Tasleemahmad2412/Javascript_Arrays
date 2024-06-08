"use strict";

// ================================================================

// 1. Slice Method (Does not mutates)
// we can extract part of any array without changing original array

// console.log(arr.slice(2, 5));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// this will start extracting at 1 and keep extracting except the last 2 index
// we can use the slice to simply produce a shallow copy of any array
// console.log(arr.slice());
// console.log([...arr]);
// which one should be used spread or slice to create copy ?

// 2. SPLICE Method (Mutates the array)
// this one does actually chnage the original array
// console.log(arr.splice(2));
// console.log(arr);

//one most common usecase of splice method is to remove the last element from array
// arr.splice(-1);
// arr.splice(1, 2);
//console.log(arr);
let arr = ["a", "b", "c", "d", "e", "f"];
const arr2 = ["j", "i", "h", "g", "f"];
// 3. REVERSE (Mutates)
console.log(arr2.reverse());
//reverse method does actualy mutate the original array
console.log(arr2);

// 4. CONCAT (does not mutates the original array)
const letters = arr.concat(arr2);
console.log(letters);
// another way
console.log([...arr, ...arr2]);

// 5. JOIN
console.log(letters.join(" - "));
