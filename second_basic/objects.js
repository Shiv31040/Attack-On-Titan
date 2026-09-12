//Object Literals

const hinata  = Symbol("naruto1")
const hariRam = {
    name:"madaari",
    age:45,
    [hinata]:Symbol("naruto1"),
    location:"Mumbai",
    loggedIn:false,
}

hariRam.email="shivi@gmail.com"
// Object.freeze(hariRam)
hariRam.name="Munna"

hariRam.greeting = function(){
    console.log("Hello betaaa");
}

hariRam.greeting2 = function(){
    // console.log(`hello teacher ,my name is ${this.name} and age is ${this.age}.Thanks for listening to me.`);
}

// console.log(hariRam["location"],hariRam["loggedIn"],hariRam["age"]);//good way of using [] because what if the key name is itself in the string ,then we wouldn't be able to access it .
// console.log(hariRam);
// console.log( typeof hariRam[hinata]);

// console.log(hariRam.greeting());
// console.log(hariRam.greeting2());

// console.log(hariRam[email]);


console.log(typeof hariRam[hinata])