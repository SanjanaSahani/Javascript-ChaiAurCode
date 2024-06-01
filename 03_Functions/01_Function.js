function urName() {
    console.log("S");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("u");
}
urName();
// Output :
// S
// a
// n
// j
// u

function sayName() {
    console.log("Hello Sanju");
}
sayName();
//Output: Hello Sanju

//Adding Two Numbers by using Function

// 1st way ----
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(12, 5)
//Output: 17


//  2nd way ----
function addNum(num1, num2) {
    return num1 + num2;
}
const result = addNum(3, 7);
console.log(result);
//Output: 10


function addNumber2(num1, num2) {
    console.log(num1 + num2);
}
addNumber2(1, "3")
//Output: 13
addNumber2(1, "a")
//Output: 1a
addNumber2(1, null)
//Output: 1

function LoginUser(username) {
    if (username == "sam") {
        console.log(" Welcome Sam ")
    }
    else {
       console.log(`Welcome ${username}`); 
    }
    return
}
LoginUser("Sanju")
//Output: Welcome Sanju
LoginUser("Sam")
//Output: Welcome Sam

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sanjana"))
//Output: Sanjana just logged in 
loginUserMessage("")
//Output: Please enter a username

// Using Rest Operator in function

function calculateNum(...num){
    return num
}
console.log(calculateNum(5,8,2,9));
//Output: [5, 8, 2,9 ]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
//Output: [500, 2000]
function calculateCartPrice(val1, val2, ...num1){
    return val1, val2, num1
}

console.log(calculateCartPrice(200, 400, 100, 900, 500, 2000)) //it take 200 as val1 and 400 as val2 and other goes as num1
//Output: [100, 900, 500, 2000]

// ----- how to pass object in functions -----

const User = {
    username: "Sahani",
    age : 21,
}
function useObject(anyObject){
    console.log(`Username is ${User.username} and age is ${User.age}`);
    return
}
useObject("User")

//Output: Username is Sahani and age is 21

//  ----- we can pass direct object as an argument -----

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399
})
//Output: Username is sam and price is 399

// ----- how to pass array in functions -----

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//Output: 400

//  ----- we can pass direct array as an argument -----

const myNewArray2 = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue([200, 400, 500, 1000]));
//Output: 500