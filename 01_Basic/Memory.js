// Stack (Primitive) => Stack give the Copy Values
// Heap (Non Primitive) => Heap Give the Reference Value;  


let user = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = user;

userTwo.email = "Gaurav@google.com";

console.log(user.email);
console.log(userTwo.email);


