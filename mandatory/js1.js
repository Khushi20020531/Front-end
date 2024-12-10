const prompt=require("prompt-sync")()
    let num1=prompt("enter num1:");
    let num2=prompt("enter num2:");
    if(num1>num2){
        console.log("num1 is greater");
    }
    else{
        console.log("num2 is greater");
    }

    let i=1;
    while(i<=7){
        console.log("while loop iteration"+i);
        i++;
    }
    for (let j=1;j<=7;j++){
        console.log("for loop iteration"+j);
    }
    let k=1;
    do{
        console.log("do while loop iteration"+k);
        k++;
    }
    while(k<=7);


    


















