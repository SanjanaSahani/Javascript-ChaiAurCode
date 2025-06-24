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
