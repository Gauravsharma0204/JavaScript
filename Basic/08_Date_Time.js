// Dates 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateDate = new Date(2023, 0, 23);
let myCreateDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate.toString());
console.log(myCreateDate1.toLocaleString());

let newDate = new Date("2023-01-14"); // YYYY-MM-DD
console.log(newDate.toLocaleString());

let newDate1 = new Date("01-14-2023"); //MM-DD-YYYY
console.log(newDate1.toLocaleString());



let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate3 = new Date();
console.log(newDate3);
console.log(newDate3.getMonth());
console.log(newDate3.getDay());


newDate.toLocaleString('default', {
    weekday : "long",
})