//  for of Loops

const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    //console.log(num);
    
}


const greetings = "Hello World";

for(const greet of greetings){
    //console.log(greet);
}


// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "France");

// console.log(map);


for (const [key, value] of map) {
    //console.log(key, '=>', value);
    
}


/*const myObject = {
    'Game1': 'NFS',
    'Game2' : 'PUBG'
}
*/

/*
for (const [key, value] of myObject) {
   // console.log(key, '=>', value);// Don't Work // Error
}
*/

/********************************************* */

//Obejcts if For in
const myObject = {
    js : 'JavaScripts',
    cpp : 'C++',
    rb : 'Ruby',
    swift : "Swift by Apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
          
}

/*********************** */

const programming = ["JS","RB","PY","JAVA","CPP"];

for(const key in programming){
    // console.log(programming[key]);
}



/************************************** */
//forc each loops
const coding = ["JS","RB","PY","JAVA","CPP"];

// coding.forEach( function (item) {
//   console.log(item);
    
// })

//Arrow Function
coding.forEach((item) => {
//    console.log(item);

})

/********************** */
function printMe(item){
    // console.log(item);
    
}

coding.forEach(printMe)



/****************************** */
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


/************************ */

const myCoding = [
    {
        lanName : "JavaScript",
        lanFileName : "js"
    },
    {
        lanName : "Java",
        lanFileName : "java"
    },
    {
        lanName : "Python",
        lanFileName : "py"
    },
]

myCoding.forEach( (item) => {
   // console.log(item.lanName);
    
})


/***************************************** */

// const program = ["JS","RB","PY","JAVA","CPP"];

// const values = program.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


