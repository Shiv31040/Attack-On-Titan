const dating = Date.now()
// console.log(dating.toJSON());
// console.log(dating.toDateString());
// console.log(dating.toString());
// console.log(dating.toISOString());
// console.log(dating.toLocaleString());
// console.log(dating);


const dating2 = new Date();
const dating1 = Date.now();

// console.log(dating2);
// console.log(dating1);

const hidimba = new Date()
console.log(hidimba.getMonth() + 1 + "th month of 2026");


 const newDate = new Date()
 console.log(newDate.toLocaleString('en-IN',{
    dateStyle:"long",
    timeZone:"Asia/Kolkata",
    calendar:"Indian"
 }));