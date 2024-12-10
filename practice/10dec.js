// function outerFunction(){
//     let outerVariable="i'm outer function"
//     return function innerFunction(){
//         console.log(outerVariable)
//     };
// }
// const myClosure=outerFunction()
// myClosure() 
// // outputs: i'm outer function



// 


// const obj={a:1,b:{c:2}}
// const shallow={...obj}
// shallow.b.c=3
// console.log(obj.b.c)

const obj={a:1,b:{c:2}}
const deep=JSON.parse(JSON.stringify(obj))
deep.b.c=4;
console.log(obj.b.c)