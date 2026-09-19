//Reduce Method (Used in shopping acrt to add multiple bills)

const myNums=[1,2,3,4]

// const myTotal= myNums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval},0)//after comma a value is given because in the starting accumulator has no value in it .
// // console.log(myTotal);

const myObject=[
    {
        bookname:"book1",
        publish:2001,
        version:2006,
        price:1600,

    },
    {
        bookname:"book2",
        publish:1995,
        version:2009,
        price:2600,
    },
    {
        bookname:"book3",
        publish:1999,
        version:2016,
        price:2000,
    },
    {
        bookname:"book4",
        publish:1975,
        version:2019,
        price:900,
    },
    {
        bookname:"book5",
        publish:1905,
        version:2010,
        price:2500,
    },
    {
        bookname:"book6",
        publish:2001,
        version:2017,
        price:1900,
    },
]


const total_price = myObject.reduce((accumulator,currentvalue,index)=>{
    accumulator+= currentvalue.price;
    console.log(`The price of book${index+1} is ${currentvalue.price} and your total now is ${accumulator}`);
    return accumulator;
},0)
console.log(`the total price now will be ` , total_price);
