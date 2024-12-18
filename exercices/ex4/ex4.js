const numbers = [324, 489, 25, 32, 209, 1098, 235, 74, 2, 58];

const readlineSync = require("readline-sync");
const divider = readlineSync.question("Please enter a number: ");

const getAmountDivisibleBy = (numbers, divider) => numbers.filter(number => number % divider === 0).length;
console.log(getAmountDivisibleBy(numbers, divider))



// //Solution
// const numbers = [324, 489, 25, 32, 209, 1098, 235, 74, 2, 58];
//
// const getAmountDivisibleBy = (numbers, divisor) => {
//     const divisibleNumbers = numbers.filter((number) => number % divisor === 0);
//
//     return divisibleNumbers.length;
// };
//
// console.log(getAmountDivisibleBy(numbers, 2));