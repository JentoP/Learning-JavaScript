const readLine = require("readline-sync");

const products = [
  { name: "Book", price: 30 },
  { name: "Clock", price: 25 },
  { name: "Lamp", price: 35 },
  { name: "Plant", price: 20 },
];

// products.forEach((product) => 
//    console.log(([${index}], $(product.name) is $(product.price))));



console.log("Welcome to our store!");
console.log("These are our products:")
products.forEach((product, index) => console.log(index + 1, product.name));
console.log("What product would you like to buy?")

const selectedIndex = readLine.question("Give a product number: ");

const selectedProduct = products[selectedIndex];

console.log()


// for (let index = 0; index < array.length; index++){
//     if(index == selectedProduct){

//     }
// }


