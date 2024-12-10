 //directly assigning value
 let prompt=require("prompt-sync")()
 let num=20;
 console.log("the value of number is:",num)
 if (num>0){
     console.log("the number is postive")
 }


//manual input form user
 let prompt1=require("prompt-sync")()
const number=parseInt(prompt("enter number:"))
if (number>0){
    console.log("the number is postive")
}