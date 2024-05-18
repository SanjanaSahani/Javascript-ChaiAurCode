// ********************Numbers********************** 

const score = 400
console.log(score);
// Output: 400


const balance = new Number(100)
console.log(balance);
// Output:[Number: 100]
console.log(balance.toString());
// Output: 100
console.log(balance.toFixed(3));
// Output: 100.000


const newNumber = 52.7352
console.log(newNumber.toPrecision(4));
// Output: 52.74
const anotherNumber = 1000000
console.log(anotherNumber.toLocaleString('en-IN'));
// Output: 10,00,000

// ************************Math**********************

console.log(Math);
// Output:Object [Math] {}
console.log(Math.abs(-4));
// Output:4
console.log(Math.round(4.6));
// Output:5
console.log(Math.ceil(4.2));
// Output:5
console.log(Math.floor(4.9));
// Output:4
console.log(Math.min(4, 3, 6, 8));
// Output:3
console.log(Math.max(4, 3, 6, 8));
// Output:8
console.log(Math.random());     //--- it generated random number
// Output:0.922563983810258 
console.log((Math.random()*10) + 1);  //---every time it generaterd random number greator than 1 
// Output:9.107305576470738 
console.log(Math.floor(Math.random()*10) + 1);  //---every time it generaterd random between 0-10 
// Output:7


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Output: 19