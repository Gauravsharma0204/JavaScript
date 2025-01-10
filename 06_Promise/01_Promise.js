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

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve()
//     }, 1000)
// }).then(function (){
//     console.log("Async 2 Resolve");
    
// })


// /********************************** */

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username: "Chai", email : "chai@example"});    
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })



/******************************************** */

// const promiseFour = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Gaurav", password : "1234"})
//         } else {
//             reject('Error : Somthing went to Wrong');
//         }
//     },1000)
// })

// const username = promiseFour.then( (user) => {
//     console.log(user);
//     return user.username
    
// }).then( (username) => {
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
// }).finally( () => ("The Promise is Resolved or Reject"));



// /************************************** */
// const promiseFive = new Promise(function (resolve, reject){
//         let error = true;
//         if(!error){
//             resolve({username: "Gaurav", password : "1234"})
//         } else {
//             reject('Error : JS went to Wrong');
//         }
// }, 1000)

// async function consumPromiseFive() {
//     try {
//     const response = await promiseFive;
//     console.log(response);
// } catch (error) {
//     console.log(error);
//     }
// }

// consumPromiseFive();


// /********************** */

// async function getAlluser() {
//     try{
//         const response = await fatch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log("E : ", error);
        
//     }
// }
// getAlluser();


/************************************ */
fatch('https://jsonplaceholder.typichttps://jsonplaceholder.typicode.com/usersode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data); 
})
.catch((error) => console.log(error));
