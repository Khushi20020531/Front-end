//wap using settimeout to print the time for 5secs
/*let timeout=setTimeout(()=>{
    console.log(new Date().toLocaleTimeString())
},5000);*/

//wap where teacher has given homework once it done by student it should display homework done and corrected
/*function homework(as){
    setTimeout(()=>{
        console.log("Homework Done");
        as();
    },2000)
}
function correctHomework(){
    console.log("Homework Corrected")
}
let k=homework(correctHomework);*/

//wap a bring text file content which is another file to console
/*const fs=require('fs');
fs.readFile('cls.txt', (error, data) => {
    if (error) {
        return console.error(error);
        }
        console.log(data.toString());
        });*/

// function async(){
//     setTimeout(()=>{
//         console.log("task1 is completed");
//     },10)
// }
// function sync(){
//     console.log("task2 is completed");
// }
// async();
// sync();

/*const a=require("../javascript/cls16_1")
function carddetails(){
    card="1234 5678 9012 3456";
    console.log(card,"detail is verified..");
    a.verify(debit);
}
function debit(){
    console.log("debited");
}
carddetails();*/

//using promise method
/*const a=require("../javascript/cls16_1")
function carddetails(){
    card="1234 5678 9012 3456";
    console.log(card,"detail is verified..");
    const promise=a.verify(debit);
    console.log(promise)
}
function debit(){
    console.log("debited");
}
carddetails();*/

//wap to display a image reading from another file using js
function displayImage(imageUrl) {
    const img=new Image();
    img.src="E:\Front-end\javascript\excelr.jpeg";
    img.onload=()=>{
      console.log(img);
    }
  }
  displayImage("excelr.jpeg");
