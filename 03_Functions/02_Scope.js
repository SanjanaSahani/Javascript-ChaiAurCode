let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30  
}
console.log(a);
// 300

let b = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", b);   
}
console.log(b);
//Output: INNER: 20
// 200

var c = 600
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", c);   
}
console.log(c);
//Output: INNER: 30
// 30 

function one(){
    const username = "Sanjana"
    function two(){
        const website = "google.com"
        console.log(username);
    }
    console.log(website);
    two()
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);

// It show error because scope of function one is not access the scope of function two -- the correct way is -

function one(){
    const username = "Sanjana"
    function two(){
        const website = "google.com"
        console.log(username);
    }
    two()
}
one()
//Output: Sanjana

//------------------Hosting------------------------------


console.log(addone(5))
function addone(num){
    return num + 1
}
//Output: 6

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
//It shows error

const addThree = function(num){
    return num + 2
}
console.log(addThree(5))
//Output: 7