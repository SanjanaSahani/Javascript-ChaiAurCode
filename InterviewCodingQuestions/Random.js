// 1. Example f(a,b) into f(a)(b) - we solve this using Curying method in js 
function f(a){
    return function(b){
    return a + b ;
    }
}
console.log(f(5)(10));
//Output - 15


// 2. How would you use a closure to create a private counter
function counter(){
    var _counter = 0
    function add(increment){
        _counter += increment
    }
    function retrive(){
       return _counter;
    }
    return { add, retrive}
}
const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());
//Output - 15


// 3. Make this function run only once
let views;
function likeMe(){
    let called = 0;
    return function(){
        if(called > 0){
            console.log("Already Subscribed to ", views);  
        } else{
            views = "Sanjana";
            console.log(" Subscribed to ", views);  
            called++;
        }
    }
}
let like = likeMe()
like();
like();
like();
like();
//Output-  
// Subscribed to  Sanjana
// Already Subscribed to  Sanjana
// Already Subscribed to  Sanjana
// Already Subscribed to  Sanjana


// 4. write a code for the perfect number
function perfectNumber(number){
let sum = 0;
for(let i = 0; i<=number/2; i++){
    if(number%i === 0){
        sum += i
    }
}
return sum === number
}
console.log(perfectNumber(28));
//Output- true

