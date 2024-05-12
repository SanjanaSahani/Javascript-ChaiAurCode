//  Datatype Conversion Confusion

// --- for checking the type of values ---

let name = 'Sanju';
let Age = 20;
let state;
console.log(typeof 'Sanju');
console.log(typeof 20);
console.log(typeof state);
console.log(typeof null);
console.log(undefined);

// --- for changing the type of variable ---

let score = '33'
console.log(score);
console.log(typeof score);

let newScore = Number(score);
console.log(newScore);
console.log(typeof newScore);

let isLoggedIn = 1
console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);