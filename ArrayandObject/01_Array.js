//***********************Array***********************

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr.length);
//Output: 6
console.log(myArr[4]);
//Output: 4

const myHeors = ["shaktiman", "naagraj"]
console.log(myHeors);
//Output: [ 'shaktiman', 'naagraj' ]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);
//Output: [ 1, 2, 3, 4 ]
console.log(myArr2.length);
//Output: 4


// ***************Different Array methods*******************
const myArr3 = [1,2,3,4,5]

myArr3.push(6)
console.log(myArr3);
//Output: [ 1, 2, 3, 4, 5, 6 ]
myArr3.push(7)
console.log(myArr3);
//Output: [ 1, 2, 3, 4, 5, 6 , 7]
myArr3.pop()
console.log(myArr3);
//Output: [ 1, 2, 3, 4, 5, 6 ]

myArr3.unshift(9)
console.log(myArr3);
//Output: [ 9, 1, 2, 3, 4, 5, 6 ]
myArr3.shift()
console.log(myArr3);
//Output: [ 1, 2, 3, 4, 5, 6 ]


const myArr4 = [1,2,3,4,5,7,8]

const newMyArr4 = myArr4.includes(9)
console.log(newMyArr4);
//Output: false
const newMyArr44 = myArr4.indexOf(3)
console.log(newMyArr44);
//Output: 2

const newArr = myArr4.join()

console.log(myArr4);
//Output: [ 1, 2, 3, 4, 5, 7, 8]
console.log( newArr);
//Output: 1,2,3,4,5,7,8


//**********************Slice and Splice ***********************

const myArray = [0, 1, 2, 3, 4, 5]

console.log('A' , myArray);
//Output: A [ 0, 1, 2, 3, 4, 5 ]
const myNum1 = myArray.slice(1,4)
console.log(myNum1);
//Output:[ 1, 2, 3 ]

console.log('B' , myArray);
//Output: B [ 0, 1, 2, 3, 4, 5 ]
const myNum2 = myArray.splice(1,4)
console.log(myNum1);
//Output: [ 1, 2, 3 ]

console.log('C' , myArray);
//Output: C [ 0, 5 ]