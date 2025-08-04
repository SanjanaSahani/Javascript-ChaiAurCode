// 1. Write a program to print Right-Angle Triangle Pattern
function rightAngle(n){
    for(let i = 1; i<=n; i++){
        console.log("*".repeat(i));  
    }
}
rightAngle(5);

//Output- 
//  *
//  **
//  ***
//  ****
//  *****

// 2. Write a program to print Inverted Right-Angle Triangle Pattern
function InvertedTriangle(n){
    for(let i=n; i>=1;i--){
        console.log("*".repeat(i));   
    }
}
InvertedTriangle(5);

//Output-
//  *****
//  ****
//  ***
//  **
//  *

// 3. Write a program to print Pyramid Pattern
function pyramid(n){
    for(let i = 1; i<=n; i++){
       let space = " ".repeat(n-i);
       let star = "*".repeat(2 * i -1);
    console.log(space + star);
    
    }
}
pyramid(5);

//Output-
//     *
//    ***
//   *****
//  *******
// *********


// 4. Write a program to print Inverted Pyramid Pattern
 function InvertedPyramid(n){
    for(let i=n; i>=1;i--){
        console.log(" ".repeat(n-i)+ "*".repeat(2*i-1));
        
    }
 }
InvertedPyramid(5);

//Output-
// *********
//  *******
//   *****
//    ***
//     *

// 5. Write a program to print Diamond Pattern
function diamond(n){
    for(let i = 1; i<=n; i++){
        console.log(" ".repeat(n-i) + "*".repeat(2 * i -1));   
    }
    for(let i = n-1; i>=1; i--){
        console.log(" ".repeat(n-i) + "*".repeat(2 * i -1));   
    }

}
diamond(5);

//Output-
//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

// 6. Write a program to print Left-Angle Triangle Pattern
function LeftAngle(n){
    for(let i = 1; i <= n; i++){
        console.log(" ".repeat(n - i) + "*".repeat(i));  
    }
}
LeftAngle(5);


//Output- 
    // *
   // **
  // ***
 // ****
// *****

// 7. Write a program to print Inverted Left-Angle Triangle Pattern
function InvertedLeftAngle(n){
    for(let i = n; i >= 1; i--){
        console.log(" ".repeat(n - i) + "*".repeat(i));  
    }
}
InvertedLeftAngle(5);


//Output- 
// *****
//  ****
//   ***
//    **
//     * 

// 8. Print a hollow square of stars with n rows and columns

function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

hollowSquare(5);

// Output:
// *****
// *   *
// *   *
// *   *
// *****

// 9. Print a hollow pyramid of stars for a given number of rows n.

function hollowPyramid(rows) {
  let patternList = [];

  for (let i = 1; i <= rows; i++) {
    let line = '';

    for (let j = 1; j <= rows - i; j++) {
      line += ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1 || i === rows) {
        line += '*';
      } else {
        line += ' ';
      }
    }

    patternList.push(line);
    console.log(line);
  }

  return patternList;
}

hollowPyramid(5);

// Output -     
//     *
//    * *
//   *   *
//  *     *
// *********


// 10. Half Pyramid with Numbers
function numberHalfPyramid(rows) {
  let patternList = [];

  for (let i = 1; i <= rows; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    patternList.push(line);
    console.log(line);
  }

  return patternList;
}

numberHalfPyramid(5);

//Output-
// 1
// 12
// 123
// 1234
// 12345


// 11. Print a sandglass star pattern for a given number n, where n is the number of rows in the top half.
 function sandglassPattern(rows) {
  let patternList = [];

  // Top half (inverted pyramid)
  for (let i = rows; i >= 1; i--) {
    let line = '';

    for (let j = 0; j < rows - i; j++) {
      line += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      line += '*';
    }

    patternList.push(line);
    console.log(line);
  }

  // 12. Print a half pyramid pattern using numbers for a given number n.
  for (let i = 2; i <= rows; i++) {
    let line = '';

    for (let j = 0; j < rows - i; j++) {
      line += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      line += '*';
    }

    patternList.push(line);
    console.log(line);
  }

  return patternList;
}

sandglassPattern(5);
  

// Output -
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********


// 13.  Floyd’s Triangle 
function printFloydsTriangle(rows) {
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += num + " ";
            num++;
        }
        console.log(line.trim());
    }
}
printFloydsTriangle(5);
// Output-
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

//14.  Pascal’s Triangle in JavaScript

function printPascalsTriangle(n) {
    let triangle = [];

    for (let i = 0; i < n; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    // Print the triangle
    for (let i = 0; i < n; i++) {
        console.log(triangle[i].join(" "));
    }
}
printPascalsTriangle(5);

//Output-
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

//15.  GCD using Euclidean Algorithm
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log("GCD:", findGCD(36, 60));  // Output: 12

//  LCM using GCD
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

// Example:
console.log("LCM:", findLCM(36, 60));  // Output: 180
