// const prompt=require("prompt-sync")()
// for(let num=1; num<=25; num=num+1){
//     console.log(num)
// }

//wap to display a number in reverse direction of number from 50 to 25
// const prompt=require("prompt-sync")()
// for(let num=50; num>=25; num=num-1){
//     console.log(num)
//     }

  
//wap to display a number in reverse direction of number from 50 to 25 using while
let num=30
do{
    console.log(num)
    num=num-1
    }while(num>=25)


//wap to display alternate message for two numbers in it using while loop
let  number=9;
do{
    if(number<2==0){
        console.log("\n")
        console.log(number,"hello")
        }
        else{
            console.log(number,"byeee")
        }
        number++;
    }while(number<=10)

//print name in horizontal and vertical
console.log("\n")
const prompt=require("prompt-sync")()
const name=prompt("enter name:")
let count=0;
do{
    console.log(name[count])
    count++;
}
while(count<name.length);
console.log(name.split('').join(""))



















//wap to display a multiplication of number in reverse direction
// const prompt=require("prompt-sync")()
// let num=prompt("Enter a number:")
// for(let i=num; i>=1; i=i-1){
//     console.log(i+"*"+num+"="+i*num)
//     }