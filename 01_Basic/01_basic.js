console.log('Hello World!'); 
// Output: Hello world!


// *******Declaring Variables********* 

const accountName = 'Sanju'
const accountId = 12352;
let accountEmail = 'sanju@gmail.com';
var accountPass = '2421'
var accountCity ='gorakhpur'


// --- if we want to change the value of any variable ---
accountCity = 'lucknow'      
console.log(accountCity); 
// Output: lucknow

// --- for printing values ---
console.log(accountName);
console.log(accountId);     
console.log(accountEmail);
console.log(accountPass);
// Output:Sanju
// Output:12352
// Output:sanju@gmail.com 
// Output:2421

// --- for printing the values in table form ---
console.table([accountName,accountId,accountPass,accountCity,accountEmail]); 

// Output:
// ┌─────────┬───────────────────┐
// │ (index) │      Values       │
// ├─────────┼───────────────────┤
// │    0    │      'Sanju'      │
// │    1    │       12352       │
// │    2    │      '2421'       │
// │    3    │     'lucknow'     │
// │    4    │ 'sanju@gmail.com' │
// └─────────┴───────────────────┘