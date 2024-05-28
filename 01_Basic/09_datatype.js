// ****************Primitive Datatype***********************
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Myname = 'Sanju'  //string
console.log(Myname);
console.log(typeof Myname);
// Output: 
// Sanju
// string

const score = 100  //number
console.log(score);
console.log(typeof score);
// Output: 
// 100
// number

const scoreValue = 100.3  //number
console.log(scoreValue);
console.log(typeof scoreValue);
// Output: 
// 100.3
// number

const isLoggedIn = false //boolean
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
// Output: 
// false
// boolean

const outsideTemp = null //null
console.log(outsideTemp);
console.log(typeof outsideTemp);
// Output: 
// null
// object

let userEmail;  //undefined
console.log(userEmail);
console.log(typeof userEmail);
// Output: 
// undefined
// undefined

const bigNumber = 3456543576654356754n
console.log(bigNumber);
console.log(typeof bigNumber);
// Output: 
// 3456543576654356754n
// bigint

const id = Symbol('123')
console.log(id);
console.log(typeof id);
// Output: Symbol(123)
// Output: symbol

const anotherId = Symbol('123')
console.log(anotherId);
// Output: Symbol(123)
// Output: symbol

console.log(id === anotherId);
console.log(typeof anotherId);
// Output: false
// Output: symbol



// ****************Non-Primitive Datatype***********************
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);
// Output: [ 'shaktiman', 'naagraj', 'doga' ]

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(myObj);
// Output: { name: 'hitesh', age: 22 }

const myFunction = function(){
    console.log("Hello world");
}
myFunction()
// Output: Hello World
