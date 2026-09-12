const myArr = [1,2,3,4,5]
// console.log(myArr[2]);

//Array Methods

myArr.push(6)

myArr.pop()
// console.log(myArr[5]);
// console.log(typeof myArr.includes(9));

let newMyArr = myArr.join()
// console.log(typeof newMyArr);


let eren = [0,1,2,3,4,5,6,7,8,9]
let eren1 = eren.slice(1,5)

// console.log(eren);
// console.log(eren1);

let eren2 = eren.splice(1,5)

console.log(eren2);
console.log(eren); //after using splice the data get extracted from the original dataset but this doesnt happen with slice
console.log(eren1);