//wap to check a given number is even or odd.
console.log("function declaration")
function checkEvenOdd() {
   let  num=10;
    if (num % 2 ==   0) {
        console.log(num + " is even");
    }
        else{
            console.log(num + "is odd");
        }
    }
checkEvenOdd();

console.log("\npassing parameter")
const prompt=require("prompt-sync")()
function checkEvenOdd(num=10){
    if (num % 2 == 0) {
console.log( "even");
    }
    else{
        console.log("odd");
}
}
checkEvenOdd();


console.log("\nreturn stmt")
const prompt1=require("prompt-sync")()
function isEven(no) {
    // let no=85;
    let  result = no % 2 == 0 ? "even" : "odd";
return  result;
}
if(no % 2 == 0) {
        console.log( "even");
    }
    else{
        console.log("odd");
    }




console.log("\nusing parameters and arguements")
function res(num=9){
    if (num % 2 == 0) {
        console.log("num is even");
        }
        else
        {
            console.log("num is odd");
        }
}
res();


console.log("\nexpression")
    let res1=function(num){
        if (num % 2 == 0) {
            console.log("num is even");
            }
            else{
                console.log("num is odd");
    }
    }
    res1(6);
    

    console.log("\narrow function")
let Result=(num)=>{
    if (num % 2 == 0){
        console.log("num is even");
    }
    else{
        console.log("num is odd");
    }
}
Result(10);

