// Scopes in JS
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


//******************************* */

function one(){
    const username = "Gaurav";

    function two(){
        const website = "youtube";
        //console.log(username); // Output => Gaurav
    }
    // console.log(website);// Error
    two();    
}

one();// Output => Gaurav

if(true){
    const username = "Gaurav";
    if(username === "Gaurav"){
        const website = " Youtube";
        // console.log(username + website);  // Output => Gaurav Youtube
    }
    // console.log(website);// Error
    

}
// console.log(username);// Error




//****************Interesting**************** */

// addOne(5); //Output => 6
function addOne(num){
    return num + 1;
}

addOne(5);


//console.log(addTwo(5)) //=> Error
const addTwo = function(num){
    return num + 2;
}


