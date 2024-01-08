

// function calculateForce(mass, acceleration){
//     let force= mass*acceleration;
//     return force;
// }

// const force = calculateForce(2, 3);
// console.log(force);

// functionkonam (parameters)=>{expression}

// const evenNumber = (initialValue, endValue) =>{
//     for(i=initialValue;i=>endValue;i=endValue+1){
//         let remainder = initialValue%2
//         if(remainder===0){
//             console.log(i);
//         }
        
//     }
// }
// evenNumber(100,200);

//myDetails

// let student1 = {
//     firstName: "Sulochan",
//     lastName: "Karki",
//     address: "Bkt",
//     email: "sulochan@gmail.com",
//     contact: "9861506808",
//     isMarried: false,
//     isGraduated: null,
//     age: 22,

// }   
// console.log(student1.address);
// console.log(student1["contact"]);

// ?adding objects
// student1.laptop = "Asus"
// student1["college"]="NCIT"
// console.log(student1);

// delete student1.contact;
// delete student1["contact"];
// console.log(student1);

//update
// student1["address"]="ktm"
// student1.address="ktm"
// student1.postalCode = "44600"
// console.log(student1);


// const studentDetails = {
//     firstName:"Bharg",
//     lastName:"Adhi",
//     address : {
//         temporaryAddress : "Lokanthali",
//         permanentAddress : "Jhapa",
//     },
// };

// console.log(studentDetails.address.temporaryAddress);
// console.log(studentDetails.address.permanentAddress);
 

// let x=5;
// let y=x;  //copying the value of x
// x=7;  
// console.log(y);

//  let collegeDetails = {
//     name: "ABC clz",
//     address: "ktm"
//  }

//  let newCollegeDetail = collegeDetails  //value haina address/reference copy bhai rako xa 

//  collegeDetails.name="NCIT";
//  console.log(collegeDetails);

//Spread Operator

//  let collegeDetails = {
//     name: "ABC clz",
//     address: "ktm"
//  }

//  let newCollegeDetails = { ...collegeDetails }; //value ma change aaune nested bhayena bhane

//  newCollegeDetails.name="NCIT";
//  console.log(newCollegeDetails);
    
//structured clone


//  const studentDetails = {
//     firstName:"Bharg",
//     lastName:"Adhi",
//     address : {
//         temporaryAddress : "Lokanthali",
//         permanentAddress : "Jhapa",
//     },
// };

// let newStudentDetails = structuredClone(studentDetails);

// newStudentDetails.address.temporaryAddress="bkt";

// // console.log(studentDetails);
// console.log(newStudentDetails);


 


