// String 


//2nd Way to Declaration the String
const name = "Gaurav";
const repoCount = 20;
//console.log(name + repoCount+ "Gaurav");

//console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

//console.log(typeof name);



//2nd Way to Declaration the String
const gameName = new String('Hii Gaurav');

console.log(gameName);
console.log(gameName[0]);

console.log(gameName.__proto__);


//Function or Method in String
console.log(gameName.length); // find the Length of String
console.log(gameName.toUpperCase());// Convert to upper case
console.log(gameName.charAt(2));// Find the Character using Index Value
console.log(gameName.indexOf('G')); // Find the Index Value Using Character

const newSting = gameName.substring(0, 4); // Sub String
console.log(newSting);
const anotherString = gameName.slice(0, 8);
console.log(anotherString); // Slicing
 
const newStringOne = " Gaurav     "
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove the Space

const url = "Hi this is Gaurav";
console.log(url.replace('this','I\'m')); // Replace the Value

console.log(url.includes('Gaurav')); // Find the Character or Value.

console.log(url.split(' '));



 


