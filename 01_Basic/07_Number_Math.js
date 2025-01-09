//************ NUM**********************

const num = 400;
// console.log(typeof num);

const balance = new Number(100);
// console.log(balance);

//console.log(typeof num);
//console.log(typeof balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

const hundred = 10000000;
//console.log(hundred.toLocaleString('en-IN'));


//********* Math ***********

console.log(Math);

console.log(Math.abs(-4)); // Convert to Positive Nuber
console.log(Math.round(4.5)); // Round the Number
console.log(Math.ceil(4.2)); // Only Upper Value 
console.log(Math.floor(4.2)); // Only Lower Value
console.log(Math.min(10,15,20)); // Find the Minmum Value
console.log(Math.max(15,10,25));// Find the Maximum Value

console.log((Math.random() * 10) + 1); // Find the Random Number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)





