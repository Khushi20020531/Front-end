const prompt=require("prompt-sync")()
const num=parseInt(prompt("enter number:"))
console.log("the number we have entered is:",num)
console.log("lets check whether the number is divible by 2 and 3")
if((num%2==0) && (num%3==0)){
    console.log("divisible by 2 & 3")
}
else {
    console.log("not divisible by 2 & 3")
} 
