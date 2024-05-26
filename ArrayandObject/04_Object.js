const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
//Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

const tinderUser2 = {}
tinderUser2.id = "123abcd"
tinderUser2.name = "Sam"
tinderUser2.isLoggedIn = true
console.log(tinderUser2);
//Output: { id: '123abcd', name: 'Sam', isLoggedIn: true }

const regularUser = {
    email: "sanju@gmail.com",
    fullname: {
       userFullname: {
        firstname: "Sanju",
        LastName: "Sahani"
       }
    }
}
console.log(regularUser.fullname.userFullname.firstname);
//Output: Sanju

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
console.log(obj1,obj2);
//Output: { '1': 'a', '2': 'b' } { '3': 'a', '4': 'b' }
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);
//Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);
//Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const user = [
    {
        id: 1 ,
        email: 'sanju@gmail.com'
    },
    {
        id: 2 ,
        email: 'sanju6@gmail.com'
    },
    {
        id: 3 ,
        email: 'sanju612@gmail.com'
    },
    {
        id: 4 ,
        email: 'sanju6122002@gmail.com'
    },
]
console.log(user[1].email);
//Output: sanju6@gmail.com
console.log(user[3].id);
//Output: 4