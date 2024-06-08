const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(-130));
// include returns true is a value in array is exactly -130 thos os for testing equality
// what if we have to test a consdition instead thats where the some method comes

// if we have to check for deposits
// const anyDeposits = movements.some((mov) => mov > 5000);
//console.log(anyDeposits);

// requesting a load from the bank
// the bank will only grant the laon of there is atleast one deposit of 10% of the proce of loan
const amount = 100000;
if (amount > 0 && movements.some((mov) => mov >= amount * 0.1)) {
  console.log("loan Granted");
} else {
  console.log("loan not granted");
}

// noew the close czn to some method which is the evry method
// only returns true if all the elements in array satisfies the condition like an (AND operator )
// EVERY
console.log(movements.every((mov) => mov != 0));

// seperate callback

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
