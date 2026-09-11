//datatypes 
/*

Primitve:-
string ,number,boolean,null ,undefined,symbol , bigInt
*/
let bigNumber = 2365081640715604605n

console.log(typeof bigNumber);

/*
Non-Premitive:-
Array ,objects ,functions
*/

const maleHeroes= ["Batman","IronMan"];
console.log(typeof maleHeroes);

let myObject={
    name:"Batman",
    age:44,
}

console.log(typeof myObject);

let myFunctions = function(){
    console.log("I am the Best");

    
}
console.log(typeof myFunctions);




let playStation = Symbol(2347)
let xBox = Symbol(2347)
console.log(playStation);
console.log(playStation === xBox);