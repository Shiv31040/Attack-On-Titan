// // //datatypes 
// // /*

// // Primitve:-
// // string ,number,boolean,null ,undefined,symbol , bigInt
// // */
// // let bigNumber = 2365081640715604605n

// // console.log(typeof bigNumber);

// // /*
// // Non-Premitive:-
// // Array ,objects ,functions
// // */

// // const maleHeroes= ["Batman","IronMan"];
// // console.log(typeof maleHeroes);

// // let myObject={
// //     name:"Batman",
// //     age:44,
// // }

// // console.log(typeof myObject);

// // let myFunctions = function(){
// //     console.log("I am the Best");

    
// // }
// // console.log(typeof myFunctions);




// // let playStation = Symbol(2347)
// // let xBox = Symbol(2347)
// // console.log(playStation);
// // console.log(playStation === xBox);

// //********************************Stack(Primitve),Heap(Non-Primitive)**************************************

// let shiv1 = "ShahrukKhan"
// let shiv2 = shiv1

// shiv2 ="SalmanKhan"

// console.log(shiv1);
// console.log(shiv2);


// let realObject = {
//     name: "ShahrukKhan",
//     email:"srk@gmail.com",
// }

// let realObject2 = realObject

// realObject2.email ="sml@gmail.com"

// console.log(realObject2.email);
// console.log(realObject.email);

//************************************** */

const loggingIn= new Number(2135);
//"new" word can change any primitve datatype into object ,so that original data cant get changed even for primitive datatype 
console.log(typeof loggingIn);
console.log(loggingIn.length);
console.log(loggingIn.__proto__);

const grandTheft= new String("Michael")

const cyberpunk = grandTheft.substring(0,5)
console.log(cyberpunk);

console.log(grandTheft.substring(2,5));
console.log(grandTheft.slice(-6,-2));

const nimoda = "    shiv sharma   "
console.log(nimoda);
console.log(nimoda.trim());


//Correct way of showing data 
let marks = 23
let name ="Madara Uchiha"

console.log(`So a student scores ${marks} in mathematics and i would like to give this award to Mr.${name} .Please give a huge round of applause to him.`)


let neeraj = new String("          hashirama            ")
console.log(neeraj.valueOf().trim());