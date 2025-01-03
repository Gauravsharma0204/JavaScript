//Filter

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);


/********************************** */

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => {
//     return num > 4;
    
// })


/******************************************* */

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
})
// console.log(newNums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  


/**************************************** */
// Map

const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNumber = myNumber.map( (num) => num + 10)
// console.log(newNumber);

const newNumber = myNumber.map( (num) => {
    return num + 10;
})

//console.log(newNumber);



//For Each

const number = [1,2,3,4,5,6,7,8,9,10];

const num1 = [];

number.map( (add) => {
        return num1.push(add + 10);
})

// console.log(num1);


/********************** */

const number1 = [1,2,3,4,5,6,7,8,9,10];
const newNumber1 = number1
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 30)
//console.log(newNumber1);




/*********************** */
// Reduce

const n = [1 , 2 , 3]

// const total = n.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0)

const total = n.reduce( (acc, currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
}, 0)

console.log(total);
