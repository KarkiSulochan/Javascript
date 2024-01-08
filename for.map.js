//for

// const carBrands = ["Tesla", "BYD", "Tata", "Toyota", "Nissan"]

//for ...of
// for(const element of carBrands){
//     console.log(element);
// }

//map 
//returns new array
// does not change original array
// original array and returned array are of the same size
// to change elements

// let prices = [100, 200, 250, 450, 560]

// const newPriceList = prices.map((item, index, array) => {
//     let newPrice = item - 10;

//     return newPrice
// });


// console.log(newPriceList);

// let scores = [400, 450, 777, 521, 666, 232];
//every score must be updated by 10 percent and return new score

// const updatedScore = scores.map((item, index, array) => {
//     let newScore = item + (10/100)*item;
    // newScore = scores(1+0.1);
    // newScore = scores * 1.1;
    
//     return newScore
// });

// console.log(updatedScore);

// carBrands.map((item, index, array) => {

//     console.log(item, index);
    // console.log(index);
    // console.log(array); //which array
// });



//? create an array called friendList and add your friends name.
// print out your friends name one by one

// const friendList = ["Sullivan", "Bhargav", "Sagar", "Deepak", "Roman"];
//     for (const item of friendList){
//         console.log(item);
//     }


// let numList = [21, 72, 51, 6, 4, 30, 11];
// if number is even, add 5 in it
// if number is odd, subtract 3 on it

// const checkOddorEven = numList.map((item, index, array) => {
//    let remainder = item % 2

//    let newItem;
//     if(remainder === 0){
//         newItem = item + 5;
//     }else{
//         newItem = item - 3;
//     }

//     return newItem;
// });

// console.log(checkOddorEven);

// const x = "NEPAL".toLowerCase();

// console.log(x);

// const countryNames = ["Nepal", "BanglaDesh", "PaKistan", "BhuTaN", "MongoLia"];
// convert country names to lowercase

// const lowerCase = countryNames.map((item, index, array) => {
//    let newItem = item.toLowerCase();

//    return newItem;
// });

// console.log(lowerCase);