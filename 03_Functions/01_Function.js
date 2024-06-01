// function urName() {
//     console.log("S");
//     console.log("a");
//     console.log("n");
//     console.log("j");
//     console.log("u");
// }
// urName();
// // Output :
// // S
// // a
// // n
// // j
// // u

// function sayName() {
//     console.log("Hello Sanju");
// }
// sayName();
// //Output: Hello Sanju

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