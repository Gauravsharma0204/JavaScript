const user = {
    username : "Gaurav",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`); // This => Used for Current Concept.
        // console.log(this);  
    }
    
    
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);



//********************************************+ */

//We can't used (This) Keyword Direct in function
function chai(){
    let username = "Gaurav"
    console.log(this.username);// Undefined
}

//chai();




//******************* **********************/
// const chai = function() {
//     let username = "Gaurav";
//     console.log(this.username);
    
// }

//**************Arrow Function*************+ */
const chai1 = () => {
    let username = "Gaurav";
    console.log(this.username);//Undefined
    
}

//chai1();

//********Explicit function******************** */
const addNum = (num1, num2) => {
    return num1 + num2;
    // We have to used return keyword in this function
}

console.log(addNum(5, 10));


//********implicit function******************** */

// const addnum1 = (num1, num2) => num1 + num2;
const addnum1 = (num1, num2) => (num1 + num2);// We don't need to used return keyword in this function


//*********Object in Arrow Function************ */

const number = (num1, num2) => ({username : "Gaurav"})

console.log(number());



/****************** */
