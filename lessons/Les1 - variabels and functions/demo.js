// // console.log("hey");
// var test = "hey";
// // console.log(test);

// let test2 = "hoi"
// const num1 = 1;
// const num2 = 2;


// function sum(sum1, sum2){
//     return num1 + num2;
// }
//  const total = sum(num1, num2);

// console.log(total);

// const readlineSync = require("readline-sync");
// const name = readlineSync.question("What is your name?");
// console.log('Hello, $(name)!');
const array = ["one", "two", "three", "four", "five", "six"];

console.log("of loop")
for (element of array) {
  console.log(element);
}

console.log("for each loop")

array.forEach((item) => {
    console.log(item);
});