const products = [
    {name: "Kiwi", price: 10},
    {name: "Apple", price: 20},
    {name: "Orange", price: 30},
];

const readlineSync = require("readline-sync");
const reduction = readlineSync.question("Please enter a reduction in percentages: ");

const reduceProducts = (products, reduction) => {
    products.map(
        products =>
            products.price = products.price - (products.price * reduction / 100));
    return products;
};

console.log(reduceProducts(products, reduction));


//Solution
// const products = [
//     { name: "Kiwi", price: 10 },
//     { name: "Apple", price: 20 },
//     { name: "Orange", price: 30 },
// ];
//
// const reduceProducts = (products, reduction) => {
//     const reducedProducts = products.map((product) => {
//         const newPrice = product.price * ((100 - reduction) / 100);
//
//         return { ...product, price: newPrice };
//     });
//
//     return reducedProducts;
// };
//
// const reducedProducts = reduceProducts(products, 20);
//
// console.log(reducedProducts);