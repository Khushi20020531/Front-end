//using break
console.log("using break")
for(let i=1; i<=10; i++){
    console.log(i);
    if(i==6){
        break;
    }
}

//using continue
console.log("using continue")
for(let i=1; i<=5; i++){
    // if(i==3){
    if(i % 2!=0){
        continue;
}
console.log(i);
}


