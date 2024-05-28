const Name = 'Sanju'
const number = 50
console.log( Name + number );
// Output: Sanju50
console.log(`My name is ${Name} and my number is ${number}`);
// Output: My name is Sanju and my number is 50


const Myname = new String('Sanjana')
console.log(Myname[0]);
// Output: S
console.log(Myname.length);
// Output: 7
console.log(Myname.toLowerCase());
// Output: sanjana
console.log(Myname.toUpperCase());
// Output: SANJANA
console.log(Myname.charAt());
// Output:S 
console.log(Myname.charAt(5));
// Output:n
console.log(Myname.indexOf('j'));
// Output: 3
console.log(Myname.split('-'));
// Output:[ 'Sanjana' ]


const newName = Myname.substring(0,5)
console.log(newName);
// Output: Sanja

const anotherName = Myname.slice(0,4)
console.log(anotherName);
// Output:Sanj

const otherName = 'Sanju'
console.log(otherName);
// Output:Sanju
console.log(otherName.trim());
// Output:Sanju



const url = "https://github.com/SanjanaSahani/Javascript-ChaiAurCode"

console.log(url.replace('Aur', 'With'))
// Output:https://github.com/SanjanaSahani/Javascript-ChaiWithCode
console.log(url.includes('Welcome'))
// Output:false
