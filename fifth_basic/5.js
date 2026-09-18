const coding=["js","python","c++","java"]

// coding.forEach(function (item){ //for each element of coding do this function 
//     console.log(item);
    
// })

// coding.forEach((item)=>{console.log(item)})


// function printMe(item){console.log(item);}

// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding=[
    {
        languageName:"javascript",
        shortName:"js",
    },

    {
        languageName:"python",
        shortName:"py",
    },

    {
        languageName:"java",
        shortName:"java"
    },
]

myCoding.forEach((item)=>{//item here is use to give name to all the elements in the array called "myCoding". 
    console.log(item.languageName)
})