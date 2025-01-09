// Singleton

// Object Literals

const mySym = Symbol("key1");
const user = {
    name : "Gaurav",
    age : 18, 
    location : "Delhi",
    email : "GAURAV0204@GMAIL.COM",
    isLoggedIn : false,
    lastDay : ["monday", "Tuesday"],
    [mySym] : "myKey1",
}

console.log(user.email);
console.log(user["email"]);
console.log(typeof user[mySym]);// Symbol

user.email = "gaurav@gmail.com";
//Object.freeze(user); // Lock or Freeze the Value.
user.email = "gaurav@gmail.com";
//console.log(user);


user.greeting = function(){
    console.log("Hello JS User");
    
}


user.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');  
    
console.log(user.greeting());
//console.log(user.greetingTwo());