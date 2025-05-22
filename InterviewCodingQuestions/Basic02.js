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


// 6. How do you find out if the two given strings are anagrams?

function areAnagrams(str1, str2) {
  const normalize = str => str.split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

// Example
console.log(areAnagrams("listen", "silent"));
// Output:true


// 7. How do you calculate the number of vowels and consonants in a string?

function countVowelsAndConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0, consonantCount = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) vowelCount++;
      else consonantCount++;
    }
  }

  return { vowelCount, consonantCount };
}

// 8. How do you total all of the matching integer elements in an array?

function totalMatchingElements(arr, value) {
  return arr.filter(num => num === value)
            .reduce((sum, num) => sum + num, 0);
}

// Example
console.log(totalMatchingElements([1,2,3,2,2,4], 2));
// Output:6


// 9. How do you reverse an array?

function reverseArray(arr) {
  return arr.reverse();
}

// Example
console.log(reverseArray([1, 2, 3, 4]));
// Output:[4, 3, 2, 1]


// 10. How do you find the maximum element in an array?

function findMax(arr) {
  return Math.max(...arr);
}

// Example
console.log(findMax([1, 5, 3, 9, 2]));
// Output:9


// 11. How do you sort an array of integers in ascending order?

function sortArrayAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Example
console.log(sortArrayAscending([4, 2, 5, 1, 3]));
// Output:[1, 2, 3, 4, 5]


// 12. How do you print a Fibonacci sequence using recursion?

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}

// Example
printFibonacci(6);
// Output:
// 0
// 1
// 1
// 2
// 3
// 5


// 13. How do you calculate the sum of two integers?

function sum(a, b) {
  return a + b;
}

// Example
console.log(sum(5, 7));
// Output:12


// 14. How do you find the average of numbers in a list?

function average(numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

// Example
console.log(average([2, 4, 6, 8]));
// Output:5


// 15. How do you check if an integer is even or odd?

function isEvenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

// Example
console.log(isEvenOrOdd(7));
// Output:"Odd"


// 16. How do you find the middle element of a linked list?

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// Example
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
console.log(findMiddle(head));
// Output:2


// 17. How do you remove a loop in a linked list?

function removeLoop(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (slow !== fast) return;

  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = null;
}

// Example
// (you need to create a linked list with a loop to test this)

// Output:Loop removed (no direct console output)


// 18. How do you merge two sorted linked lists?

function mergeSortedLists(l1, l2) {
  const dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  
  current.next = l1 || l2;
  return dummy.next;
}

// Example
const list1 = new Node(1);
list1.next = new Node(3);
const list2 = new Node(2);
list2.next = new Node(4);
console.log(mergeSortedLists(list1, list2)); 
// Output: Linked list: 1 -> 2 -> 3 -> 4


// 19. How do you implement binary search to find an element in a sorted array?

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Example
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
// Output:3


// 20. How do you print a binary tree in vertical order?
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function verticalOrder(root) {
  if (!root) return [];

  const map = new Map();
  const queue = [{ node: root, hd: 0 }];
  let min = 0, max = 0;

  while (queue.length) {
    const { node, hd } = queue.shift();
    if (!map.has(hd)) map.set(hd, []);
    map.get(hd).push(node.val);

    if (node.left) queue.push({ node: node.left, hd: hd - 1 });
    if (node.right) queue.push({ node: node.right, hd: hd + 1 });

    min = Math.min(min, hd);
    max = Math.max(max, hd);
  }

  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }

  return result;
}

// Example
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(verticalOrder(root));

// Output: [[4], [2], [1, 5, 6], [3], [7]]
// Example
console.log(countVowelsAndConsonants("Hello World"));
// Output: { vowelCount: 3, consonantCount: 7 }

