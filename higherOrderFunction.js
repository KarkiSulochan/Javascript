// hof => higher Order Function

//1. callback function
//2. function returning function (closure)

//? callback function
//? function which is passed as an argument to another function

// const getProduct = (x,y, func) => {
//     let product = x * y;
//     func();
//     return product;
// };

// const result = getProduct(5, 6, () => {
//     console.log("hello");
// });
// console.log(result);

// const getRemainder = (a,b,callback) => {
//     const remainder = a%b;

//     callback(remainder);
// };
// getRemainder(10,2, (data) => {
//     console.log(data);
// });

