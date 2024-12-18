const products = [
    { name: "Banana", price: 2 },
    { name: "Pear", price: 1 },
    { name: "Orange", price: 1.5 },
    { name: "Grapes", price: 1.7 },
];

let reducedProducts = products.map((product) => {
    return {
        name: product.name,
        price: product.price * 0.5,
    };
});

console.log(reducedProducts);




//Solution
// longAnswer
// const reducedProducts = products.map((product) => {
//     const reducedPrice = product.price / 2;
//     return { name: product.name, price: reducedPrice };
// });
//
// // shortAnswer
// const reducedProducts = products.map((product) => ({
//     ...product,
//     price: product.price / 2,
// }));
//
// console.log(reducedProducts);