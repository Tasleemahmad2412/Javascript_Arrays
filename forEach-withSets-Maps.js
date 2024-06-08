"use strict";
//MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//SET
const currenciesUnique = new Set(["USD", "EUR", "DBP", "USD", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(` ${value}`);
});
