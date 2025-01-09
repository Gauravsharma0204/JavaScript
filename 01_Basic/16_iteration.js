// For

for (let index = 0; index <= 10; index++) {
    const element = index;
    //console.log(element);

}
// console.log(element);//Error

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is Best Number");
    }
    // console.log(element);
   
}


/*********************************************** */
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loops Values : ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(`Inner Loops Values : ${j} and Inner Loop ${i}`);
       // console.log(i + '*' + j + ' = ' + i * j);
        
    }
    
}

/************************************* */
let myArray = ["Gaurav", "Nikhil", "Abhinav"];

for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
    
}


/**************************** */
// Break and Continue

// for (let i = 1; i <= 20; i++) {
    
//     if(i == 5){
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
// }


for (let i = 1; i <= 20; i++) {
    
    if(i == 5){
        console.log('Remove the Five');
        
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}