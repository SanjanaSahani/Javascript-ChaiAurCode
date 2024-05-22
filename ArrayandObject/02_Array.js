const marvelHeros = ["Ironman", "Thor", "Spiderman"];
const DcHeros = ["Batman", "Superman", "flash"];

marvelHeros.push(DcHeros)
console.log(marvelHeros);
//Output: [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Superman', 'flash' ] ]



//*************adding two array using concat method*********************

const marvelHeros1 = ["Ironman", "Thor", "Spiderman"];
const DcHeros1 = ["Batman", "Superman", "flash"];
const allHeros = marvelHeros1.concat(DcHeros1)    
console.log(allHeros);
//Output: [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Superman', 'flash' ]



 //****************adding two array using spread operator************

const allHeros2 = [...marvelHeros1,...DcHeros1]      
console.log(allHeros2);
//Output: [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Superman', 'flash' ]



// ******************flat method**********************

const flatMethod = [1, 2, 7, [7, 2,4],4,2,6 ,[5,2]]
const newFlat = flatMethod.flat(Infinity)
console.log(newFlat);
//Output: [1, 2, 7, 7, 2,4, 4, 2, 6, 5,2]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//Output: [ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


console.log(Array.isArray("Sanju"))
//Output: false
console.log(Array.from("Sanju"))
//Output: [ 'S', 'a', 'n', 'j', 'u' ]
console.log(Array.from({name: "Sanju"}))
//Output: []


//*************How to convert elements into an array***************
// .of() is returning a new array from a set of Elements 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
//Output: [ 100, 200, 300 ]