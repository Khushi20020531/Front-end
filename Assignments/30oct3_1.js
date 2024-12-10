//Write a program that allows the user three login attempts. If the user enters the correct password, display a success message; otherwise, display an error message after three failed attempts.
console.log("3rd program")
function login(){

    const correctpassword="your password";
    let attempts = 3;

    while(attempts>0){
        const prompt=require("prompt-sync")()
        const password=prompt("Enter your password:");
        if(password===correctpassword){
            console.log("Success! logined in");
            return;
    }
    else{
        attempts--;
        console.log("Incorrect password.Try again");
        }
    }
    console.log("Login failed after maximum attempts reached")
}
login();