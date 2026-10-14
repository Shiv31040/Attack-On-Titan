const promiseOne = new Promise(function (resolve, reject) {
  //DO and Async Task

  setTimeout(function () {
    console.log("async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Shivam", email: "Shiv@123.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Shivam", password: "123" });
    } else {
      reject("ERROR something went wrong ");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally the promise is either resolved or rejected ");
  });

  


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})


async function consumepromiseFive() {
    try{
        const response = (await promiseFive)
    console.log(response)
    }
    catch (error){
        console.log(error);
        
    }

}

consumepromiseFive()

// async function getAllUsers() {
//      try {
//         const responseWait = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await responseWait.json()
//     console.log(data);
        
//      } catch (error) {
//         console.log("E:",error);
//      }
//     }

//     getAllUsers()



fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})