// console.log("script start");

// setTimeout(()=>{
//     console.log("set Timeout");
// },0)

// new Promise((resolve,reject)=>{
//     console.log("promise costructior00");
//     resolve("promsie resolved")
// }).then((res) => console.log(res));


// async function asyfun(){
//     console.log("async fun0 started");
//     await new Promise((resolve)=>{
//         console.log("Promise inside async fn");
//         resolve("async/awaot resolved")
//     })
//     console.log(" aync fb end");
// }
// asyfun()
// console.log("script end");


const one=()=>Promise.resolve("one");

async function asyfun(){
    console.log("inside test fn");
    const result=await one()
    console.log(result);
}
console.log("before callling t f");
asyfun();
console.log("after test fn");
