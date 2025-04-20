// 1. Implement a function to reverse a string without using the built-in reverse() method
function reverseString(str){
let reverse = " ";
for(let i = str.length -1; i >= 0 ; i--){
    reverse+= str[i]
}
return reverse;
}
console.log(reverseString("Sanjana"));
//Output - anajnaS


// 2. Given an array of numbers, write a function to find the largest and smallest numbers in the array
function largestAndSmallest(number){
    if(number.length === 0){
        return "Array is Empty"
    }
    const largest = Math.max(...number);
    const smallest = Math.min(...number);
    return {largest,smallest}
}
const arrNum = [3,6,10,8,39,18];
console.log(largestAndSmallest(arrNum).largest);
//Output - 39
console.log(largestAndSmallest(arrNum).smallest);
//Output - 3


// 3. Write a function that takes an array of integers as input and return a new array with only the unique element
//                                   OR
// 4.Implement a function to remove duplicate from an array.
function uniqueArray(arr){
    const uniqueElement = [];
    for(let i =0 ; i<arr.length; i++){
        if(!uniqueElement.includes(arr[i])){
            uniqueElement.push(arr[i])
        }
    }
    return uniqueElement;
}
const inputArr = [2,3,1,1,6,9,3,0,]
console.log(uniqueArray(inputArr));
//Output - [ 2, 3, 1, 6, 9, 0 ]


// 5. Implement a function to find the sum of all the numbers in an array
function sumOfArray(number){
    return number.reduce((sum , num) => sum+ num , 0)
}
const input = [5,2,87,5,24,98,12]
console.log(sumOfArray(input));
//Output - 233


// 6. Give a string, write a function to count the occurance of each character in the string
function occurance(str){
    let countChar = {}
    for(let char of str){
        countChar[char] = (countChar[char] || 0) + 1 ;
    }
    return countChar;
}
const string = "Hello"
console.log(occurance(string));
//Output - { H: 1, e: 1, l: 2, o: 1 }


// 7. Write a function that sorts an array of numbers in ascending order
function sortNumber(number){
    return number.sort((a,b) => a-b);
    
}
const inputNum = [4,2,8,6,9,1]
console.log(sortNumber(inputNum));
//Output- [1,2,4,6,8,9]


// 8. Write a program of an Armstrong number (Narcissitic Number)
function isArmstrongNumber(number){
    let numString = number.toString();
    let numDigit = numString.length;
    let sum = 0;
    for(let digit of numString){
        sum += Math.pow(parseInt(digit), numDigit)
    }
    return sum === number
}
const numberToCheck =153;
if(isArmstrongNumber(numberToCheck)){
    console.log(`${numberToCheck} is Armstrong Number`);  
} else {
    console.log(`${numberToCheck} is Not Armstrong Number`);  
}
//Output - 153 is Armstrong Number

// 9. How do you calculate the number of numerical digits in a string? 
function countDigits(str) {
  const digits = str.match(/\d/g);
  return digits ? digits.length : 0;
}

// Example usage:
const input = "abc123def456";
console.log(countDigits(input)); // Output: 6
