// const coding =["python","c++","c","java","java script"]

// const value = coding.forEach((item)=>{
//     console.log(item);

//     return item
// })

// console.log(value);


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> {return num>5})
// console.log(newNums);

const halala=[]

myNums.forEach((num)=>{
    if(num>5){
        halala.push(num)
    }})

    console.log(halala);