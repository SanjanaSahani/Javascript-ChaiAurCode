// *************Date and Time*********************

let MyDate = new Date()
console.log(MyDate);
// Output: 2024-05-18T17:27:59.786Z
console.log(MyDate.toLocaleString());
// Output: 5/18/2024, 10:57:59 PM
console.log(MyDate.toLocaleDateString());
// Output: 5/18/2024
console.log(MyDate.toLocaleTimeString());
// Output: 10:57:59 PM
console.log(MyDate.toString());
// Output: Sat May 18 2024 23:06:35 GMT+0530 (India Standard Time)
console.log(MyDate.toDateString());
// Output: Sat May 18 2024
console.log(typeof MyDate);
// Output: object


let myCreatedDate = new Date(2024, 5, 18)
console.log(myCreatedDate.toLocaleString());
// Output: 6/18/2024, 12:00:00 AM

let myCreatedDate1 = new Date(2024, 5, 18, 11, 11)
console.log(myCreatedDate1.toLocaleString());
// Output:6/18/2024, 11:11:00 AM


let myCreatedDate2 = new Date("2024-05-18")
console.log(myCreatedDate2.toLocaleString());
// Output:5/18/2024, 5:30:00 AM


let myCreatedDate3 = new Date("05-18-2024")
console.log(myCreatedDate3.toLocaleString());
// Output:5/18/2024, 12:00:00 AM


let myTimeStamp = Date.now()  // when we want to number millisec to sec then we use Date.now

console.log(myTimeStamp);
// Output:1716054353943
console.log(myCreatedDate.getTime());
// Output:1718649000000
console.log(Math.floor(Date.now()/1000));
// Output:1716054353

let newDate = new Date()
console.log(newDate);
// Output: 2024-05-18T17:48:15.025Z
console.log(newDate.getMonth() + 1);
// Output: 5
console.log(newDate.getDay());
// Output: 6



// newDate.toLocaleString('default', {
//     weekday: "long", 
// })
// `${newDate.getDay()} and the time `