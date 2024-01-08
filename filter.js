// filter => to filter out certain values based upon condition
// returns new array
// and there is greater possibility of change in size of returned array

// let numList = [1, -1, 55, -71, 60, -32, 11, -45];

// const newList = numList.filter((item, index, array) => {
//     return item > 0;
// });

// console.log(newList);

// const scoreList = [25, 11, 39, 72, 55, 63, 8, 15, 24, 27, 32, 31];
// passed score => scores greater than or equals to 32

// const newScoreList = scoreList.filter((item, index, array) => {
//     return item >= 32
// });

// console.log(newScoreList);

// const newScoreList = scoreList.filter((item, index, array) => {
//     return item !== 55
// });

// console.log(newScoreList);


//map
//? due to sudden rise in tax, add 7% to the price of each laptop
// let laptopList = [
//     {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044
// },  
//    {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//    },
//     {
//     name: "macbook air m2",
//     brand: "apple",
//     price: 1400
// },
//     {
//     name: "nitro",
//     brand: "acer",
//     price: 800
// },
//     {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700
// }
// ];

// const newLaptopPrice = laptopList.map((item, index, array) => {
//     let newPrice = item.price + (7 / 100) * item.price;
    
//     return {...item, price: newPrice};
// });

// console.log(newLaptopPrice);

// let laptopList = [
//     {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044
// },  
// {
//     name: "TUF F17",
//     brand: "asus",
//     price: 1400
// }, 
//    {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//    },
//     {
//     name: "macbook air m3",
//     brand: "apple",
//     price: 1499
// },
//     {
//     name: "nitro",
//     brand: "acer",
//     price: 800
// },
// {
//     name: "helios 300",
//     brand: "acer",
//     price: 1245
// }, 
//     {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700
// }
// ];

// remove apple laptop from the array

// const newLaptopList = laptopList.filter((item, index, array) => {
//     if(item.brand !== "apple") {
//         return item
//     }
//  });

//  console.log(newLaptopList);

// decrease price of asus laptops by 15 percent

// const decreasedLaptopList = laptopList.map((item, index, array) => {
//     if(item.brand === "asus") {
//         let newPrice = item.price - (15/100)* item.price;
        
//         item.price = newPrice;

//         return item;
//     }else{
//         return item;
//     }
//  });

//  console.log(decreasedLaptopList);

//change acer brand name to "acerT"

// const newLaptopList = laptopList.map((item, index, array) => {
//     if(item.brand === "acer"){
//         return {...item, brand: "acerT"}
//     }

//     return(item);
//      return(...item);
// });

// console.log(newLaptopList);
// console.log(laptopList);



