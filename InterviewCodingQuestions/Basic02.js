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

// 3. How do you calculate the number of numerical digits in a string?

function countDigits(str) {
  return (str.match(/\d/g) || []).length;
}

// Example
console.log(countDigits("abc123def45")); 
// Output:5


// 4. How do you find the count for the occurrence of a particular character in a string?

function countCharacter(str, char) {
  return str.split('').filter(c => c === char).length;
}

// Example
console.log(countCharacter("hello world", "l"));
// Output:3

// 5. How do you find the non-matching characters in a string?

function nonMatchingChars(str1, str2) {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const result = [];

  set1.forEach(char => {
    if (!set2.has(char)) result.push(char);
  });

  set2.forEach(char => {
    if (!set1.has(char)) result.push(char);
  });

  return result;
}

// Example
console.log(nonMatchingChars("abc", "bcd"));
// Output:[ 'a', 'd' ]
