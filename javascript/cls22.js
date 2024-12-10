//destructuring
/*const person={
     name:"John",
     age:30,
     occupation:"Developer"
}
let {name,age}=person;
console.log(name,age); */

//nested function
/*function msg(){
    function text(){
        console.log("Hello");
    }
    text()
}
msg("Hey! ");*/

//return function
/*function msg(t){
    function text(){
        console.log("It's beautiful"+" "+t)
    }
    return text
}
let a=msg("Wow!!")
a();*/



//closures
/*function msg(){
    let name="John"
    function text(){
        return "hai"+" "+name
    }
    return text
}
let a=msg()
console.log(a())*/

//wap to create a function name as calculate and it should take
//a single argument and inside that create a function multiply() and 
// for this also 1 argument. you should be able to access the
//parameter of above function to this.
/*function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}
const multiplier = calculate(5); 
const result = multiplier(3);    
console.log(result); */          


/*Iterator:An iterator in JavaScript is an object that enables a standardized
way to access the elements of a collection of values (like arrays, maps, 
sets, etc.)one by one.*/

//Example code: using array
/*console.log("iterator")
const fruits=['apple','banana','cherry'];
for(const fruit of fruits) {
  console.log(fruit);
}*/

/*Iterables:An iterable in JavaScript is an object that can be iterated over,
 meaning you can loop through its elements one by one. */
 
 //Example code: using array
 /*console.log("\niterable")
 const fruits1=['apple','banana','cherry'];
for(const fruit of fruits1) {
  console.log(fruit);
}*/


//generator
/*function* gf(){
    let x=yield "hey!!"
    console.log(x)
    yield "bye bye"
}
const g=gf()
console.log(g.next().value)
console.log(g.next("hello"))
console.log(g.next())*/


//example for destructuring
/*const fruits=['apple','cherry','orange']
const [fruit1,fruit2,fruit3]=fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)*/