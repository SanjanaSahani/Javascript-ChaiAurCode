// 1. Example f(a,b) into f(a)(b) - we solve this using Curying method in js 
function f(a){
    return function(b){
    return a + b ;
    }
}
console.log(f(5)(10));
//Output - 15


