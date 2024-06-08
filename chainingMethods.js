"use strict";
// upuntil now we have been using the map, filter nad  reduce meethod in kind of an isolation
// we can take this one step further by chaining all these methods one after another
// e.g we have to convert the currency and the add it all up
// now we can offcourse do each of these operations individually and then store the results in a separate
// variable but we can also do it all in one go

const movements = [-1200, -234, 100, 234, 1200, -12, 145];

// first we want to take all the deposits
const euroToUSD = 1.1;

// PIPELINE
const totalDeposisInUSD = movements
  .filter((mov) => mov > 0)
  // filter will return a new array
  .map((mov) => mov * euroToUSD)
  //map will return a new array
  .reduce((acc, mov) => acc + mov, 0);
// BUT REDUCE WILL RETURN A VALUE

// second using map we can convert that currency in us dollars
// now in third step we will add all up using the reduce method
console.log(totalDeposisInUSD + "$");
// we can only chain a method after another one if the first one only return an array
// => (so we can not perform chaining after the reduce method !!!!!) IMPORTANT

// according to the course project
const calcDislpaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
