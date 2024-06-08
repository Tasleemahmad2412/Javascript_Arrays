"use strict";
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "Jhon"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
if (dogSarah.curFood > dogSarah.recFood) {
  console.log("the dog is eating too much");
} else {
  console.log("The dog is not eating too much");
}

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log("--------------------------------------------------");
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log("--------------------------------------------------");
console.log(ownersEatTooLittle);

// 4.
console.log(
  `${ownersEatTooMuch.join(
    " and "
  )}'s dogs eat too much, ${ownersEatTooLittle.join(
    " and "
  )}'s dogs eat too little `
);

// 5.
const exactAmountFood = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(exactAmountFood);

const checkEatingOk = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// 6.
const okAmountFood = dogs.some(checkEatingOk);

// 7.
console.log(dogs.filter(checkEatingOk));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
