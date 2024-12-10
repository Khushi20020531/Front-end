//pgm1:email validation
// function validateEmail(email){
//     var emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]/;
//     return emailRegex.test(email);
// }
//     const prompt=require("prompt-sync")()
//     const email=prompt("enter an email id:");
//     if(validateEmail(email)){
//         console.log("valid email")
//         }
//         else{
//            console.log("invalid email")
//             }


//pgm2:password validation
// function validatePassword(password) {
//     const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   }
//   const prompt=require("prompt-sync")()
//   const password=prompt("Enter a password:");
//   if (validatePassword(password)) {
//     console.log("Valid password");
//   } else {
//     console.log("Invalid password");
//   }


//pgm3:extracting dates using exec()
// function extractDates(text) {
//     const dateRegex=/\d{4}-\d{2}-\d{2}/g;
//     const dates=[];
//     let match;
//     while ((match=dateRegex.exec(text))!==null) {
//       dates.push(match[0]);
//     }
//     return dates;
//   }
//   const prompt=require("prompt-sync")()
//   const text=prompt("enter a text with dates in YYYY-MM-DD format:");
//   const dates=extractDates(text);
//   console.log("extracted dates:", dates);

//pgm4:checking for valid URL using test()

//pgm5:finding phone number
// function findPhoneNumber(text){
//     var regex=/\d{3}[-\.\s]??\d{3}/;
//     var match=text.match(regex);
//     return match;
// }
// const prompt=require("prompt-sync")()
// const text=prompt("enter phone number in XXX-XXX-XXXX format:");
// console.log(findPhoneNumber(text));


//pgm6:Finding Words Longer than 5 Characters using matchAll()
// function findLongWords(text) {
//     const regex = /\b\w{6,}\b/g;
//     const longWords = [...text.matchAll(regex)].map(match => match[0]);
//     return longWords;
//     }
//     const prompt = require("prompt-sync")()
//     const text = prompt("Enter a text:");
//     const longWords = findLongWords(text);
//     console.log("words longer than 5 characters:", longWords);

//pgm7:Checking if a String Starts with a Specific Word
// function startsWithWord(text, word) {
//     const regex = new RegExp(`^${word}`, 'i');
//     return regex.test(text);
//     }
//     const prompt = require("prompt-sync")()
//     const text = prompt("Enter a text:");
//     const word = prompt("Enter a word:");
//     const result = startsWithWord(text, word);
//     console.log(result ? "true" : "false");



//pgm8:splitting a string into words
// function splitString(text){
//      var words = text.split(/\s+/);
//      return words;
//  }
// const prompt=require("prompt-sync")()
// const text=prompt("enter a text:");
// const words=splitString(text);
// console.log("split words:",words);