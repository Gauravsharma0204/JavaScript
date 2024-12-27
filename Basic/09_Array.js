// Array
//1st Way To Declration of Array
const myArr = [10,20,30,40,50,60];

// console.log(myArr);
//console.log(myArr[2]);

//2nd Way To Declration of Array
const myArr2 = new Array(1,2,3,4);
//console.log(myArr2);


// Array Methods

myArr.push(10); // Add The Elements in End
myArr.pop(); // Remove the Last Elements 
//console.log(myArr);

myArr.unshift(0) // Add The Elements in Start
myArr.shift() // Remove The Elements in Start
//console.log(myArr);

//console.log(myArr.includes(10));// Find The Value if Give or Not
//console.log(myArr.indexOf(20));// Find the Values is Given or Not and which Index


const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr); // Convert in String



// Slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 5);
console.log("C ", myArr);
console.log(myn2);







