// // global, local and block-level
// let globalVariable="i am global variable";

// function myFunction(){
//     let localVar="i am local var";
    
//     if(true){
//         const blockScopeVar="i am block-level";
//         console.log(blockScopeVar);
//     }
//     console.log(localVar);
//     console.log(globalVariable);
// }
// myFunction();

// //check var is a function
// function   checkVar(){
//     var localVar = "i am var";

//     if(true){
//         var blockVar="i am also var";
//     }
//     console.log(localVar);
//     console.log(blockVar);
// }
// checkVar();

// //check let and const is block-level
// function checkLetConst(){
//     if(true){
//         let letVar="i am let";
//         const  constVar="i am  const";

//         console.log(letVar);
//         console.log(constVar);
//     }
// }
// checkLetConst();


// console.log("\nfunction hoisting");
// function greet(){
//     console.log("hello");
// }
// greet();


// console.log("\n function expression");
// const greet=function(){
//     console.log("hey!!");
// }
// greet();

//recursive
// function factorial(n){
//     if(n===0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
// }
// const  result=factorial(5);
// console.log(result);

// //recursive
// function factorialR(n){
//     let res=1;
//     for(let i=2;i<=n;i++){
//         res *=i;
//     }
//     return res;
// }
// const res=factorialR(5);
// console.log(res);

// //without recursive
// let num=5,fact=1;
// for(let i=num;i>=1;i=i-1){
// fact=fact*i;
// }
// console.log(fact);

//to check prime numbers with recursion
// console.log("with recursion")


 //to check prime numbers without recursion
//  console.log("without recursion")
//  let num=7;
//  let result=true;
//  for(let i=2;i<=Math.sqrt(num);i++){
//     if(num%i==0){
//         result=false;
//         break;
//         }
//         }
//         console.log(result);


const myobj={
    name:"khushi",
    place:"hospet",

    //function1
    greet:function(){
        console.log("hello, my name is",this.name);
    },

    //function2
    getplace:function(){
        return this.place;
    },

    //nested obj
    address:{
        street:"main road",
        city:"hospet",
        state:"karnataka",
    
    //function3
    getaddress:function(){
        return this.street+","+this.city+","+this.state;
    }
}
};
myobj.greet();
console.log("place:",myobj.getplace());
console.log("adrress:",myobj.address.getaddress());
