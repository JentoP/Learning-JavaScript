const readLine = require("readline-sync");

const number1 = readLine.question("give me a number: ");
const number2 = readLine.question("give me an other number: ");
const operation = readLine.question("give me an operation: ");

// calculate functions
const sum = (var1, var2) => var1 + var2;
const subtract = (var1, var2) => var1 - var2;
const multiply = (var1, var2) => var1 * var2;
const divide = (var1, var2) => var1 / var2;

const calculateInput = (var1, var2, operationSymbol) => {

switch (operationSymbol) {
    case "+":
        return sum(var1, var2);
    case "-":
        return subtract(var1, var2);
    case "*":
        return multiply(var1, var2);
    case "/":
        return divide(var1, var2);
    default:
        return "This can't happen";
    }
};

const result = calculateInput(number1, number2, operation);

console.log(result);