// 1. Write a js function to calculate the sum of two numbers  
function addSum(a, b) {
    return a + b;
}
console.log(addSum(10, 5));
//Output - 15


// 2. Write a js program to find the maximum number in an array 
let myarr = [12, 3, 5, 11, 87, 20];
const maxNumber = Math.max(...myarr);
console.log("Maximum number is :", maxNumber);
//Output - Maximum number is : 87


// 3. Write a js function to check if a given string is a Palindrome
function isPalindrome(str) {
    str = str.replace(/\s/g, " ").toLowerCase();
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome("racecar"));
//Output- true


// 4. Write a js function to reverse a given string
function reversedString(str) {
    return str.split('').reverse().join('')
}
console.log(reversedString("helloworld"));
//Output- dlrowolleh


// 5. Write a js function that takes an array of number and returns a new array with only the even numbers
function arrNumber(number) {
    const evenNumbers = number.filter((numbers) => {
        return numbers % 2 === 0
    })
    return evenNumbers
}
const inputNumber = [12, 2,5,3, 89,6,20]
console.log(arrNumber(inputNumber));
//Output- [ 12, 2, 6, 20 ]


// 6. Write a js function to calculate the factorial of a given number
function isFactorial(number){
    if(number===0 || number===1){
        return 0;
    } else {
        let factorial = 1;
        for(let i = 2; i <= number; i++){
            factorial *= i;
        }
return factorial
    } 
}
console.log(isFactorial(5));
//Output- 120


// 7. Write a js function to check if a given number is prime
function isPrime(number){
    if(number <= 1){
        return false
    }
    for(let i = 2; i*i<=number; i++){
        if(number%i === 0){
            return false
        }
    }
    return true
}
console.log(isPrime(5));
//Output- false


// 8. write a js program to find the largest element in a nested array
function largestElement(arr){
    let largest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        for(let j= 0; j < arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j]
            }
        }
    }
    return largest;
}
const inputElement = [[1,5,2],[6,3,9],[7,10,8]];
console.log(largestElement(inputElement));
//Output- 10


// 9. write a js function that return the fibonacci sequence up to a given number of terms
function fibonacciNumber(n){
    const fiboSequence = [0,1];
    for(let i = 2; i < n; i++){
        const fiboNumber = fiboSequence[i-1] + fiboSequence[i-2]
        fiboSequence.push(fiboNumber)
    }
    return fiboSequence.slice(0,n);
}
console.log(fibonacciNumber(6));
//Output- [ 0, 1, 1, 2, 3, 5 ]

// 10. write js program to convert a string to title case (Capitalize the first letter of each word)
function titleCase(str){
    return str.replace(/\b\w/g, function(match){
        return match.toUpperCase()
    })
}
console.log(titleCase("my name is sanjana"));
//Output- My Name Is Sanjana