//const tinderUser = new Object()//Singleton Object
const tinderUser = {} // Non Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullName: "Gaurav",
        lastName: "Kumar"
    }
}
// console.log(regularUser.fullname.lastName);
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

//const obj3 = Object.assign({}, obj1, obj2, obj4)// Add the Two Object in One Object
const obj3 = {...obj1, ...obj2, ...obj4}; // Speate the Value (User for the Add the Values)
//console.log(obj3);


const users = [{
    id: 1,
    email: "@gamil.com",
},
{
    id: 1,
    email: "@gamil.com",

},
{
    id: 1,
    email: "@gamil.com",

}];

console.log(users[1].id);
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));// Find the Key
console.log(Object.values(tinderUser));// Find the value
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));









