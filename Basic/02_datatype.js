//  ******************Datatype Conversion Confusion**********************

// --- for checking the type of values ---

let name = 'Sanju';
let Age = 20;
let state;
console.log(typeof 'Sanju');
console.log(typeof 20);
console.log(typeof state);
console.log(typeof null);
console.log(undefined);
// Output:
// string
// number
// undefined
// object
// undefined


// --- for changing the type of variable ---

let score = '33'
console.log(score);
// Output:33
console.log(typeof score);
// Output:string


let newScore = Number(score);
console.log(newScore);
// Output:33
console.log(typeof newScore);
// Output:number


let isLoggedIn = 1
console.log(typeof isLoggedIn);
// Output:number


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// Output:true
console.log(typeof booleanIsLoggedIn);
// Output: boolean 