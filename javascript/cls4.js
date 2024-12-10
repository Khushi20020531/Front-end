// var num=7;
// var res=num%2===0? "even":"odd";
// console.log("res")

//method1
// const prompt=require("prompt-sync")()
// const num=parseInt(prompt("enter number:"))
// console.log("the num that we hv entered:",num)
// console.log("divisible by 2 and 3")
// if((num%2===0) && (num%3===0)){
//     console.log("hai")
// }
// else{
//     console.log("bye")
// }

//wap to check even or odd
// const prompt=require("prompt-sync")()
// const num=parseInt(prompt("enter number:"))
//     if (num > 10) {
//       const square = num * num;
//       console.log(`The square of ${num} is ${square}`);
//     } 
//     else {
//       console.log(`The number ${num} is not greater than 10.`);
//     }

//wap to check if the number is greater than 10 display square of it
// const prompt=require("prompt-sync")()
// const number=parseInt(prompt("enter number:"))
// if (number > 10) {
//     const square = number * number;
//     console.log(square);
//   }


//wap to check for signin and login and if both the condition are true display "welcome to webpage"
// const prompt=require("prompt-sync")()
// let signin=true
// if(signin){
//     username=prompt("enter username:")
//     password=prompt("enter password:")
//     console.log("successfully signed in")
//     console.log("welcome to login page")
//     if(login)
//     if((username===username)&&(password===password)){
//         console.log("welcome to webpage")
//     }
//      else{
//         console.log("invalid username or password")
//      }  
// }

//wap to print electricity  bill 
// const prompt=require("prompt-sync")()
// let unit=200
//if(unit>=200){
//if(unit>=300)
//console.log(((12/100)*unit)+unit)}
//else{
//console.log(((10/100)*unit)+unit)}

//display your marks card after validating 6 subjects and there grades using javascript
const prompt=require("prompt-sync")()
function displayMarksCard() {
    const subjects = [
      "Subject 1",
      "Subject 2",
      "Subject 3",
      "Subject 4",
      "Subject 5",
      "Subject 6"
    ];
  
    const marks = [];
    const grades = [];
  
    for (let i = 0; i < subjects.length; i++) {
      let mark = parseInt(prompt(`Enter marks for ${subjects[i]}:`));
      marks.push(mark);
  
      let grade;
      if (mark >= 90) {
        grade = "A+";
      } else if (mark >= 80) {
        grade = "A";
      } else if (mark >= 70) {
        grade = "B";
      } else if (mark >= 60) {
        grade = "C";
      } else if (mark >= 50) {
        grade = "D";
      } else {
        grade = "F";
      }
      grades.push(grade);
    }
  
    // Calculate total marks and average
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = totalMarks / subjects.length;
  
    // Display marks card
    console.log("-------------------- Marks Card --------------------");
    for (let i = 0; i < subjects.length; i++) {
      console.log(`${subjects[i]}: ${marks[i]} (${grades[i]})`);
    }
    console.log("----------------------------------------------------");
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    console.log("----------------------------------------------------");
  }
  
  displayMarksCard();


    