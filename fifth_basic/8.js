//Reduce Method (Used in shopping acrt to add multiple bills)

const myNums=[1,2,3,4]

const myTotal= myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval},0)//after comma a value is given because in the starting accumulator has no value in it .
console.log(myTotal);
