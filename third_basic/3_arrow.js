const user ={
    username:"Shivam",
    age:20,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome back my friend !`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function haider(){
//     console.log(this.username);
// }
// haider();

//++++++++++++++1-Type++++++++++++++++++++

const addTwo = (num1,num2) => {
    return num1+num2
}

// console.log(addTwo(3,4));


//+++++++++++++++++++2-Type+++++++++++++++++++++++

const madaari=(string)=>({username:"Shivam"})

console.log(madaari());