//pgm1:using asyn/await
// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("pgm1");
//             resolve("data fetched successfully in 2secs\n\n");
//     },2000)
// })
// }
// async function main(){
//     const data=await fetchData();
//     console.log(data);
// }
// main();


//pgm2:setInterval with stop
// async function logMessages(){
// let count=0;
// while(count<10){
//     console.log("message",count);
//     count++;
//     await new Promise(resolve=>setTimeout(resolve,2000));
// }
// }
// logMessages();


//pgm-3:countdown timer
// let sec=10;
// const intervalId=setInterval(()=>{
//     console.log(sec);
//     sec--;
//     if(sec===0){
//         clearInterval(intervalId);
//         console.log("time's up");
// }
// },1000);


//pgm4:callback function
// function greet(name,callback){
//      console.log("hello ",name);
//      callback(name);
// }
//  function sayHello(name){
//      console.log("hello ",name);
// }
// greet("khushi",sayHello);


//pgm5:promise with resolve and reject
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data="data fetched successfully!!";
            resolve(data);
            reject("error");
            }, 2000);
    })
}
fetchData();





