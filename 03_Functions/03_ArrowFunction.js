const user = {
    username: "Sanjana",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
//Output: Sanjana , welcome to website
// {
//     username: 'Sanjana',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }


user.username = "sam"
user.welcomeMessage()
//Output: sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this);
//Output: {} - when u print this in terminal it give empty scope and if u print this on console it give window object

// Traditional way of writing Function

function chai(){
    let username = "sanju"
    console.log(username);
}
chai()
//Output: Sanju

const chai = function () {
    let username = "Sanjana"
    console.log(username);
}
chai()
//Output: Sanjana

const chai =  () => {
    let username = "Sahani"
    console.log(username);
}
chai()
//Sahani


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))
//Output: 7
const addTwo2 = (num1, num2) =>  num1 + num2
console.log(addTwo2(3, 4))
//Output: 7

const addTwo3 = (num1, num2) => ( num1 + num2 )
console.log(addTwo3(3, 4))
//Output: 7

const addTwo4 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo4(3, 4))
//Output: { username: 'hitesh' }

//--------Different way to defining function syntax-----

const myArr = [2, 3 ,5 , 1, 8]

myArr.forEach(function(){
    //this is also a correct syntax for declare function
})

myArr.forEach(() => {
    //this is also a correct syntax for declare function
})

