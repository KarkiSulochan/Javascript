//define or declare a function
// function getSum() {
//     let x = 5;
//     let y = 6;

//     let sum = x + y;
//     console.log(sum);
// }

// getSum(); //invoke function/call a function


// function getSum(x,y) {  //parameter

//     let sum = x + y;
//     console.log(sum);
// }

// getSum(5,9);  //argument

// function calculateProduct (a,b,c){
//     let product = a*b*c;
//     console.log(product);
// }

// calculateProduct(2,3,5)

//  function calculateProduct (a,b,c){
//     let product = a*b*c;
//     return product;
// }

// const result = calculateProduct(2,3,5);
// console.log(result);


//odd or even

//  function checkOddOrEven(num){
//     let remainder = num % 2;

//     if(remainder === 0){
//         return "even";
//     }else{
//         return "odd";
//     }
//  }
//  const result = checkOddOrEven(24);
//  console.log(result);

//  function checkOddOrEven(num){
//     let remainder = num % 2;

//     let result;
//     if(remainder === 0){
//         result = "even";
//     }else{
//         result = "odd";
//     }
//     return result;
//  }
//  const result = checkOddOrEven(24);
//  console.log(result);

// function printNumbers(num){
//     for (let i = 0; i<=num; i++){
//         console.log(i);
//     }

// }
// printNumbers(10);

//? WAF which takes radius as input and calculates perimeter of circle
//? perimeter of circle = 2 * PI * r

// function perimeterOfCircle (r){
//     const PI = 3.1415
//     let perimeter = 2 * PI * r
//     return perimeter;
// }
// const result = perimeterOfCircle(5);
// console.log(result);

//WAF that takes "add/subtract/multiply/divide" and twon
//numbers as parameters and perform appropriate operations 

// function calculator (option, x, y){
//     if(option === "add") {
//         return x + y;
//     }else if(option === "subtract"){
//         return x - y;
//     }else if(option === "multiply"){
//         return x*y;
//     }else if(option === "divide"){
//         return x/y;
//     }else{
//         console.log("Invalid Option")
//     }
// }

// const result = calculator("divide", 10, 5);
// console.log(result);

//? WAF that takes a number as a parameter and returns a sum from 0 to that
//number

// function calculateSum(num){

//     let sum=0;
//     for(i=0;i<=10;i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// const result = calculateSum(10);
// console.log(result);

//?Arrow function
//? store function as variable/constant

// const sayHello = ()  => {
//     console.log("Hello")
// };

// sayHello();

//? WAF to convert rupees to paisa

// const convertRsToPaisa = (rupees) => {
//     const paisa = rupees * 100;

//     return paisa;
// };
// const result = convertRsToPaisa(6);
// console.log(result);

// const convertRsToPaisa = (rupees) => rupees * 100;
// const result = convertRsToPaisa(6); //ekline xa bhane return pani lekhnu pardaina
// console.log(result);

//? WAF that converts temperature into fahrenheit
// F = c * (9/5) +32

// const convertTempToFahrenheit = (celcius) =>{
//     const fahrenheit = celcius * (9/5) + 32;

//     return fahrenheit;
// }

// const result = convertTempToFahrenheit(20);
// console.log(result);

//factorial of number

// const getFactorial = (num) => {

//     let product = 1;
//     for (let i = num; i>=1; i--){
//         product = product * i;
//     }

//     return product;
// }

// const result = getFactorial(10);
// console.log(result);

//? WAF to take firstName and lastName as parameter and return fullName

// const getFullName = (firstName, lastName) => 
// {
//     const fullName = `${firstName} ${lastName}`

//     return fullName;
// };

// const result = getFullName("Sullivan", "Rocks");
// console.log(result);

//WAF which takes mass and acceleration as input and return force