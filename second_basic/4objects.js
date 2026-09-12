// const majedaar = new Object()//SingleTon

const majedaar1 = {
    name:"moora",
}

majedaar1.email = "moora@gmail.com"
majedaar1.id="moora@ybk.com"

// console.log(majedaar1["email"]);

const regularUser = {
    email:"shiv2gmail.com",
    fullname:{
        aslinaam:{
            name:"Muhammad",
        }
    }
}

// console.log(regularUser["fullname"]["aslinaam"]["name"]);

const object={1:"a",2:"b",3:"c"}
const object1={3:"d",4:"e"}

// const object3 = {object , object1}
// const object3 = Object.assign({},object,object1) //aasign means to add all those items into the first item .here i use {} to add object and object 1 into {} , if i remove it then it means the keys are getting stored in the object .

const object3 = {...object , ...object1}//official way to use.


// console.log(object3);

// console.log(object3.hasOwnProperty(5));

// console.log(Object.keys(object3));
// console.log(Object.values(object3));
// console.log(Object.entries(object3));


const course = {
    name:"shivam",
    fees:"999",
    instructor:"youtube",
}

// course.instructor

const {instructor:tractor} = course

console.log(tractor);