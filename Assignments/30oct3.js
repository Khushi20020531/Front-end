//Write a guessing game program that asks the user to guess a number between 1 and 10. Use a do-while loop to repeat until the correct number is guessed.
console.log("1st program")
function guessingGame(){
    const secretNumber=Math.floor(Math.random()*10)+1;
    let  guess;
    do{
        const prompt=require("prompt-sync")()
        guess=parseInt(prompt("Guess a number between 1 and 10:"));
        if(guess===secretNumber){
            console.log("Correct! You guessed the right number.");
    }
    else if(guess<secretNumber){
        console.log("Too low! Try again.");
        }
        else{
            console.log("Too high! Try again.");
            }
    }
 while(guess!==secretNumber);
}
guessingGame();

//Write a program that prompts the user to enter a positive number and uses a do-while loop to continue until a positive number is entered.
console.log("\n2nd program")
function getPositiveNumber(){
    let number;
    do{
        const prompt=require("prompt-sync")()
        number=parseInt(prompt("Enter a positive number:"));
    }
while(number<=0);
return number;
}
const positiveNumber=getPositiveNumber();
console.log("You entered:",positiveNumber);

