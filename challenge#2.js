"Use strict";

const calcAvgHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adultDogs = humanAges.filter((age) => age >= 18);
  console.log(adultDogs);

  const average =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return average;
};

calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);

// 2. all that dogs that are 18 years old
// 3. averge
