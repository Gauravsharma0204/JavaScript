// Primitive Data Types

// Types 

// 1. String 
// 2. Number
const score = 100;
const scoreValue = 100.3;

// 3. Boolean
const isLoggedIn = false

// 4. null
const outSideTemp = null;

// 5. undefined
let userEmail;

// 6. Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// 7. Bigint
const bigNumber = 9861111111154n;



// Not Primitive (Reference)

// Types
// 1. Array
const heros = ["Shaktiman", "Naagraj", "Doga"];

// 2. Objects
let myObj = {
    name : "Gaurav",
    age : 20;
}

// 3. function
const myFunction = function(){
    console.log("Hello Gaurav");
    
}