//wap that uses a while loop to calculate the sum of first n natural numbers
console.log("1st program")
const number=5;
let  sum=0; i=1;
while(i<=number) {
    sum+=i;
    i++;
    console.log("sum of  first "+i+" natural numbers",sum)
}

//wap that uses a while loop to reverse the digit of given number
const prompt=require("prompt-sync")()
console.log("\n2nd program")
const num=prompt("enter number:")
let  count=4;
while(count>0){
    console.log(count);
    count--;
}

//wap that uses a while loop to check if a given number is a prime number
const prompt1=require("prompt-sync")()
console.log("\n3rd program")
function isPrime(num1){
let i=2;
while(i*i<=num1){
    if(num1%i===0){
        return false;
}
i++;
}
return true;
} 
const num1=77;
const res=isPrime(num1);
if(res){
    console.log(num1,"is a prime number");
}
else{
    console.log(num1,"is not a prime number");
}


