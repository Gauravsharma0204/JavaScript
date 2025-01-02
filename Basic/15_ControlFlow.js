// if Statement

const temp = 41
if(temp < 50){
    // console.log("Temp Less Then 50"); 
}

/*************************************** */
// Else if

const temp1 = 41
if(temp1 > 50){
    // console.log("Temp Less Then 50"); 
} else {
    // console.log("Temp Less Then 50");   
}


//************************* */
const score = 200;
if(score > 100){
    let power = "Fly";
    // console.log(`User Power : ${power}`);
}

// console.log(`User Power : ${power}`);// Error



/****************************** */
//Short Hand Notation
const bal = 1000;
// if(bal > 500) console.log("Test");  // Don't Used


/*************************************** */
// if else if
if (bal < 500){
    // console.log("Less Then"); 
} else if (bal < 750){
    // console.log("Less The 750");
} else if (bal < 900){
//   console.log("Less then 900");
} else {
    // console.log("Less Then 1200");
}


/******************************** */
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard){
    //console.log("Allow to beu Course");
    
}


/******************************** */
//Switch Statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;   
    case 2:
        console.log("Fab");
        break;   
    case 3:
        console.log("March");
        break;   
    case 4:
        console.log("April");
        break;   
    case 5:
        console.log("May");
        break;   
    default:
        console.log("Please Enter Valid Month");
        break;
}



/********************************** */
// Truthy

const userEmail = "Gaurav@gmail.com";

if(userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't have User Emails");
}


// Falsy Values
//false, 0, -1, BigInt => On, "", null, undefined, Nan

// Truthy Values
//"0", 'flase', " ", [], {}, function() {}


const userEmail1 = [];

if(userEmail1.length === 0){
    console.log("Array is Empty");   
}


const emptyObj = {}

//if(Object.key(emptyObj).length === 0){
//    console.log("Object is Empty");
    
//}

/******************************************/
// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10; // 10
// val1 = null ?? 10; //10
// val1 = undefined ?? 15; //15

console.log(val1);


/************************************* */
// Terniary Operator
const ice = 100;
ice >= 80 ? console.log("Greater Then 80") : console.log("Less Then 80");

