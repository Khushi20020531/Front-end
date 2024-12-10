//Write a program that uses a for loop to calculate the factorial of a given number.
console.log("1st program")
function factorial(n){
        let result = 1;
        for(let i=1; i<=n; i++){
            result *= i;
}
return result;
}
const num=5;
const result=factorial(num);
console.log("the factorial of ",num,"is",result);



//Write a program that uses a for loop to print the multiplication table of a given number up to 10.
console.log("\n2nd program")
function printMultiplicationTable(num1){
    for (let i = 1; i <= 10; i++) {
        const product=num1*i;
        console.log(num1,"*",i,"=",product);
    }
}
const num1=9;
printMultiplicationTable(num1);

//Given an array of numbers, write a program that uses a for loop to calculate the sum of all elements in the array.
console.log("\n3rd program")
function calculateSum(numbers){
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
}
return sum;
}
const numbers=[1,2,3,4,5];
const sum=calculateSum(numbers);
console.log("the sum of   the array is",sum);

