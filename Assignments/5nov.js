console.log("pgm1")
function variablescope(){
    //using var
    for (var i=0; i<3; i++){
        console.log("inside the loop(var):",i);//i is accessible here
    }
    console.log("outside the loop(var):",i);//i is still accessible because it is function-scoped

//using let
console.log("pgm2")
for(let j=0; j<3; j++){
    console.log("inside the loop(let):",j);//j is accessible here
}
//console.log("inside the loop:",j);//j is not accessible here because it throws an error as 
//j is not defined

//using const
console.log("pgm3")
if(true){
    const k=5;
    console.log("inside the loop(const):",k);//k is accessible here
}
//console.log("outside the loop(const):",k);//error as k is not defined
}
variablescope();




// using "this" in nested obj
//program 3
console.log("\n")
const person={
    firstname:"S N",
    lastname:"khushi",
    fullname: function(){
        return this.firstname+" "+this.lastname;
    },
    greet:function(){
        const inner=()=>{
            console.log("hello,"+this.firstname);
        };
        inner();
    }
};
person.greet();
//output: hello, khushi



//program 2
console.log("\n")
function variableScope(){
    //global variable
    const globalvar="global variable";

    function innerfunction(){
        //local variable
        const functionvar="local variable";
        if(true){
            //block-scope variable
            const blockvar="block variable";
            console.log(globalvar);//accessible
            console.log(functionvar);//accessible
            console.log(blockvar);//accessible
        }
        console.log("\n")
        console.log(globalvar);//accessible
        console.log(functionvar);//accessible
        // console.log(blockvar);//error as block-scoped variable
    }
    innerfunction();
    console.log("\n")
    console.log(globalvar);//accessible
    // console.log(functionvar);//error as functionvar is not defined
    // console.log(blockvar);//error as blockvar is not defined
}
variableScope();