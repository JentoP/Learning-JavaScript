const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// const oneList = matrix.flat();
const oneList = [].concat(...matrix);
console.log(oneList);


//Solution
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
//
// const allNumbers = matrix.reduce((acc, row) => {
//     return [...acc, ...row];
// }, []);
//
// // Can be done directly with the flat method
// const allNumbers2 = matrix.flat();
//
// console.log(allNumbers);