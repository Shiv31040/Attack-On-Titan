const userid=[]

if(userid){
    console.log("got the email");
}
else{
    console.log("didn't get the email");
}

//Falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

//truthy values
//"0" , 'false' , " " , [] , {} , function(){} 

if(userid.length === 0){//right way to use array
    console.log( "array is empty");
}

const first={}
if(Object.keys(first).length===0){
    console.log("Email is not given");
}

//nullish coalescing operator(??) for null and undefined

let value1;
// value1 = null ?? 10
// value1 = 20 ?? 10

// value1 = null ??undefined
value1= null??undefined??10??20
console.log(value1);

//terniary operator

const price=100
price <=80 ? console.log("less than 80") : console.log("more than 80");