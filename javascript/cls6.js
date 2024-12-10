// const prompt=require("prompt-sync")()
// function mathematicaloperations(operator,num1,num2){
// let res;
// switch(operator){
// case '+':res=mum1 + num2;
// break;
// case '-':res=num1 - num2;
// break;
// case '*':res=num1 * num2;
// break;
// case '/':res=num1 / num2;
// break;
// case '%':res=num1 % num2;
// break;
// default:res:"invalid operator";
// }
// return res;
// }
// const operator=prompt("enter an operator(+,-,*,/,%):");
// const num1=parseInt("enter the first num:");
// const num2=parseInt("enter the second num:");

// const res=mathematicaloperations(operator,num1,num2);
// console.log('Result:${res}');

//2nd program
// const prompt=require("prompt-sync")()
// function checkvowels(){
//     const word=prompt("enter a word:");
//     const vowels=['a', 'e', 'i', 'o', 'u'];

//     for(let i=0; i<word.length; i++){
//         if(vowels.includes(word[i].toLowerCase())){
//             console.log("vowel found:",word[i]);
//         continue;
//     }
//     console.log("constant found:",word[i]);
// }
// }
// checkvowels();

//3rd
// const prompt=require("prompt-sync")()
// for(let  i=1; i<=100; i++){
//     if(i%5===0 && i%7===0){
//         console.log(i,"it is divisible by 5 & 7:")
//         break;
// }
// }

// const prompt=require("prompt-sync")()
// for(let i=1;i<6;i++){
//     for(let j=1;j<6;j++){
//         if(i==j){
//             continue;
//         }
//         console.log(i+","+j)
//     }
// }

// const prompt=require("prompt-sync")()
// function multiplicationtable(n){
//     for(let i=1; i<n; i++){
//         for(let j=1; j<=n; j++){
//             const product=i*j;
//             if(product % 2 !==0){
//                 console.log({i},"*",{j},"=",{product});
//                 if(product===25){
//                     return;
//                 }
//             }
//            }   }
// }
// multiplicationtable(10);

// //method 1
// function name(){
//     console.log("Excelr");
// }
// name();

// //method 2
// function mul(n1,n2){
//     let mul=n1*n2
// }
// //method 4
// const prompt=require("prompt-sync")()
// function fc(temp){
//     temp=(temp-45)*6/8;
//     console.log("Temperature is",temp);
// }
// fc(100);