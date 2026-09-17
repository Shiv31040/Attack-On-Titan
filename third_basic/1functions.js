function mavish(){
    console.log("Shivam");
    console.log("Sharma");
}

// mavish()


function mavish1(num1,num2){
    num1+num2;
    // console.log("Shivam")
    return num1+num2
}

const result= mavish1(17,14)
// console.log(result);

function user_login(username){
    if(!username === undefined){
        console.log("PLease Enter Your Username");
        return
    }
    return `${username} just logged in `
}

// console.log(user_login("Shivam"));

function add_to_cart(num1,num2,...num3){
    return num3
}

// console.log(add_to_cart(100,200,300,400,500,6000,));   //it only returns num3 and because of ...its returns all the remaining numbers in array.


const user={
    username:"Shivam",
    age:20
}

function handle_object(anyobject){
    console.log(`The name of the winner is "${anyobject.username}" and his age is "${anyobject.age}"`)
    return
}

// console.log(handle_object(user));

// console.log(handle_object())

// handle_object({
//     username:"Maavi",
//     age:40
// })

const mynew_Array=[200,300,400,500]

function mirzapur(getArray){
    return console.log(`Free Fire${getArray[0]}`);
}

// console.log(mirzapur(mynew_Array));

mirzapur(mynew_Array);