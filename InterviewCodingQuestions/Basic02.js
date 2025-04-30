// 1. How do you reverse a string?
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  // Example
  console.log(reverseString("hello")); 

// Output : "olleh"


// 2. How do you determine if a string is a palindrome?
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Example
  console.log(isPalindrome("racecar")); 

// Output : true
