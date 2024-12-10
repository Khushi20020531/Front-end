//pgm1: to handle division by zero using try, catch and finally
// function division(a,b){
//     try{
//         var a=a/b;
//         console.log("result is:"+result);
//     }
//     catch(error){
//         console.log("error:",+error);
//     }
//     finally{
//         console.log("division is done");
//     }
// }
// division(10,0);


//pgm2: that checks if a number is even or odd.Return a promise and handle the 
//result using then and catch.
// function is(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2==0){
//             resolve(`${num} is even`);
//             }
//             else{
//                 resolve(`${num} is odd`);
//                 }
//     });
// }
// is(4)
// .then(result=>console.log(result))
// .catch(error=>console.error(error))




//pgm3: creates a promise that resolves successfully or rejects based on a
//condition using promises and callbacks.
// function checkCondition(condition){
//      return new Promise((resolve, reject) => {
//         if(condition){
//             resolve("Condition is true");
//         }
//         else{
//             reject("Condition is false");
//         }
// });
// }
// checkCondition(true)
// .then(result=>console.log(result))
// .catch(error=>console.error(error))