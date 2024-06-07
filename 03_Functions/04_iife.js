// IIFE - An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// We use IIFE when we don't want the pollution from global scope and we want to run our code immediately.

//---this is an example of named IIFE----
(function chai(){
    console.log("Hello");   
})();
//Output: Hello
//---------------------------------------



(function name(){
    return name
})(console.log("db"));
//Output: db



//----this is a simple IIFE-------
(()=>{
    console.log("Hello db");   
})();
//Output: Hello db
// -------------------------------



//----when we pass argument and parameter (unnamed iife)----
((myName) => {
console.log(`hello db is connected ${myName}`);
})("Sanju")
//Output: hello db is connected Sanju
// ---------------------------------------------------------



//---when we want to write two IIFE together----------------
(function chai(){
    console.log("Hello IIFE");   
})();
((myName) => {
    console.log(`Hello  ${myName}`);
    })("Sanjana")
    //Output: hello db is connected Sanju
//----------------------------------------------------------    