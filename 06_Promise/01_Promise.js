// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an asyncs Task
//     // DB calls, cryptography, newtwork
//     setTimeout(() => {
//         console.log('Async task is Compelete');
//         resolve()
        
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// })



/*************************/

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function (){
    console.log("Async 2 Resolve");
    
})


/********************************** */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email : "chai@example"});    
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})



/******************************************** */