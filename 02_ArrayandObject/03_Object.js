const User = {
    name: 'Sanju',
    id: 23,
    isLogedIn: true
}
console.log(User);
//Output: { name: 'Sanju', id: 23, isLogedIn: true }
console.log(User.name);
//Output: Sanju
console.log(User['isLogedIn']);
//Output: true

const JsUser = {
    name: "Sanjana",
    "FullName": "Sahani",
    id:21,
    location: "Gorakhpur",
    lastLogin:["Monday", "Friday"]
}
console.log(JsUser["FullName"]);
//Output: Sahani

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
//Output: Hello JS user
console.log(JsUser.greetingTwo());
//Output: Hello JS user, Sanjana


//******take a symbol then add it to an Object key and show the print sequence****

const mySymbol = Symbol("Mykey")

const NewUser = {
    name : 'Sanju',
    age:24,
    [mySymbol]:"myOtherKey",
    location: "Gorakhpur"
}
console.log(typeof mySymbol);
console.log(NewUser[mySymbol]);
console.log(typeof NewUser[mySymbol]);
//Output: symbol
//Output: myOtherKey
//Output: string


const mySym = Symbol("key1");
const JavUser = {
    name: "Sanjana",
    "full name": "Sanjana Sahani",
    [mySym]: "mykey1",
    age: 18,
    location: "Gorakhpur",
    email: "Sanju@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(typeof mySym);           // Check the type of the symbol itself
console.log(JavUser[mySym]);         
console.log(typeof JavUser[mySym]);
//Output: symbol
//Output: mykey1
//Output: string

// For changing the value in object 

const NewJsUser = {
    name: "Sanjana",
    "full name": "Sanjana Sahani",
    age: 18,
    location: "Gorakhpur",
    email: "Sanju@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
NewJsUser.email = "Sanjana@gmail.com"
console.log(NewJsUser.email);
//Output: Sanjana@gmail.com

console.log(NewJsUser);
// Output:
//  {
//   name: 'Sanjana',
//   'full name': 'Sanjana Sahani',
//   age: 18,
//   location: 'Gorakhpur',
//   email: 'Sanjana@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ]
// }

// ***********For Freezing the value in object we use Object.Freeze()***************   
// --- by using Freeze method we don't have to right to make changes in object 

const NewJsUser2 = {
    name: "Sanjana",
    "full name": "Sanjana Sahani",
    age: 18,
    location: "Gorakhpur",
    email: "Sanju@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
Object.freeze(NewJsUser2)
NewJsUser2.email = "Sanjana@gmail.com"
console.log(NewJsUser2.email);
//Output: Sanju@google.com