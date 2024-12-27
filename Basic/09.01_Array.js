const marvelHero = ["Thor","IronMan","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"];

//marvelHero.push(dcHeros);
//console.log(marvelHero);

const  allHero = marvelHero.concat(dcHeros);
//console.log(allHero);


const allNewHero = [...marvelHero, ...dcHeros];
//console.log(allNewHero);

const another_array = [1,2,3,4,[5,6,7,8,],9,10,[11,12,13,[14,15]]];

const realAnotherArray = another_array.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("Gaurav"));

console.log(Array.from("Gaurav"));

console.log(Array.from({name: "Gaurav"})); // Interesting // Output - []



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Convert Into Array
