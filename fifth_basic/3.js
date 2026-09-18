//for of loop

const arr= [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings ="Hello World !"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps


const map = new Map()
map.set('IN', "India")
map.set('USA',"United States Of America")
map.set('USA',"United States Of America")
map.set('ARG',"Argentina")
map.set('Fr',"France")
map.set('Fr',"France")

// console.log(map);


for (const [num,chalisha] of map) {
    console.log(num, ":", chalisha);

    
}