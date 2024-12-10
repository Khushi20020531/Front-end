/*function divisionofNumbers(){
    const prompt=require("prompt-sync")()
    const num1=prompt("enter first number:")
    const num2=prompt("enter second number:")
    const parsenum1=parseFloat(num1)
    const parsenum2=parseFloat(num2)
    const result=parsenum1/parsenum2;
    console.log("result of 2 numbers is:",result);
}
try{
    divisionofNumbers();
}
catch(error){
    console.log("Error",error);
}
finally{
    console.log("division of 2 numbers is completed");
}*/

/*   
function banking(){
    const prompt = require("prompt-sync")()
    const balance=parseFloat(prompt("enter current balance amount:"))
    const withdraw=parseFloat(prompt("enter the amout to withdraw:"))
    if(isNaN(balance)||isNaN(withdraw)){
        throw new Error("invalid input, please enter valid num");
    }
    if(withdraw>balance){
        throw new Error("withdraw amount cannot exceed the balance");
}
}
try{
    banking();
}
catch(error){
    console.log(error);
}
finally{
    console.log("banking operation completed");
}*/


//using .then
/*function msg(){
    let p=new Promise((resolve,reject)=>{
            resolve("hello");
    });
    //console.log(p)
    p.then(display=>{
        console.log(display);
    })
}
msg()*/


//using async await
const a=require("../javascript/cls17_1");
async function cardDetails() {
    const card="1234 5678 9012 3456";
    console.log(card, "detail is verified");
    await a.verify(debit);
    console.log("card verification completed");
}
function debit() {
    console.log("debited");
}
cardDetails();