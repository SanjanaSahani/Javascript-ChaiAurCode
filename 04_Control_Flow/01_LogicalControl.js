//----------------If Statement ------------------------

const temperature = 41;
if(temperature >=41){
    console.log("Temperature is less than 41 or Equal to 41");
} else{
    console.log("Temperature is greater than 41");
}
//Output: Temperature is less than 41 or Equal to 41 


const score = 200
if(score > 100){
    var power = "fly"
    console.log(`User Power is : ${power}`);
}
else console.log(`User Power is : ${score}`);
//Output: User Power is : fly

const score2 = 200
if(score > 400){
    var power = "fly"
    console.log(`User Power is : ${power}`);
}
else console.log(`User Power is : ${score2}`);
//Output: User Power is : 200

//------------------Shorthand Notation of If Statement------------------ 
const Name = "sanju"
if(Name === "sanju")  console.log(Name);
//Output: sanju

const balance = 1000
if(balance > 500 ) console.log("true");
//Output: true

// We can write multiple line using (,) 
const balance2 = 1000
if(balance2 > 500 ) console.log("test1"), console.log("test2");
//Output: test1 
//        test2


// ----------------Nested Statement----------------------------

const Number = 1000

if (Number < 500) {
    console.log("less than 500");
} else if (Number < 750) {
    console.log("less than 750");
    
} else if (Number < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}
//Output: less than 1200

//------We can check multiple conditions by using && and ||-----

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}
//Output: Allowed

const userLoggedIn2 = true
const debitCard2 = true
if(userLoggedIn2 || debitCard2){
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}
//Output: Allowed

const userLoggedIn3 = true
const debitCard3 = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn3 && debitCard3 && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
//Output: User logged in
