//********************Dates ********************//
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
//console.log(typeof myDate);
//let myCreatedDate = new Date(2024, 4, 8, 5, 3, );
let myCreatedDate = new Date("01-11-2024" );
//console.log(myCreatedDate.toLocaleString());


let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
  

newDate.toLocaleString("Default", {
    weekday: "long",
  
})