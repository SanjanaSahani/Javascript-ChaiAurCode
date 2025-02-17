// 1. Write a progrma for converting binary to octal number
function binaryToOctal(binary) {
    let decimal = parseInt(binary, 2);
    let octal = decimal.toString(8);
    return octal
}
let input = "101101"
console.log(binaryToOctal(input));
//Output - 55



// 2. Write a code for finding the maximum number of handshakes
function maxHandshake(n) {
    if (n < 2) {
        return "Handshake is Not Possible"
    }
    return (n * (n - 1)) / 2
}
console.log(maxHandshake(5));
//Output- 10


// 3. Write a program for finding the power of a number
function power(base, exponent){
return Math.pow(base, exponent)
            // OR
    // return base ** exponent;
}
console.log(power(2, 5));
//Output- 32


// 4. Count the  number of Vowels in a String
function countVowel(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0 ;
}
console.log(countVowel("helloworld"));
// Output- 3


// 5. Find the second largest number in an array
function secondargest(arr){
    const largestArr = [...new Set(arr)].sort((a,b) => b-a)
    return largestArr.length > 1 ? largestArr[1] : null ;
}
const inputArr = [10,20,50,90,30]
console.log(secondargest(inputArr));
//Output - 50


// 6. find the missing number in an array
function missingNumber(arr, n){
    let totalSum = (n*(n-1))/2;
    let ArrSum = arr.reduce((sum, num) => sum + num, 0)
    return totalSum - ArrSum;
}
const arrNum = [1,2,4,5,6,7,8]
console.log(missingNumber(arrNum,9));
//Output- 3


// 7. Swap two variable without using temporary variable or third variable
let a = 5 , b = 10
a = a+b;
b = a-b;
a = a-b;
console.log(a,b);
//Output - 10 5


// 8. check if two string is anagrams
function isAnagram(str1, str2){
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","world"));
//Output - 
// true 
// false 