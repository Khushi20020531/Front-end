console.log("nested")
let object={
    name: {
        first_name:"khushi"
    },
    place:{
        city:"hospet"
    },
    grde:{
        grade:"A"
    },
    hobbies:{
        hobby1:"reading"
    }
}

console.log("dot notation---->",object.name.first_name)
console.log("bracket notation---->",object['name'])

console.log("\nassignment arithmetic operator")
var  a = 10;
console.log("value of a",a)
a+=10
console.log("addition",a);

a-=10
console.log("substractio",a);

a*=10
console.log("multiplication",a);

a/=10
console.log("division",a);

a%=10
console.log("modulus",a);

a**=10
console.log("exponent",a);

 var y=5;
var x=y++;
console.log("increment",x);

var y=5;
var x=y--;
console.log("decrement",x)

console.log("\ncomparision operator")
var a=10, b=3;
console.log("equal to",a==b)
console.log("not equal to",a!=b)
console.log("strictly equal to",a===b)
console.log("strictly not equal to",a!=b)
console.log("greater than",a>b)
console.log("greater than or equal to",a>=b)
console.log("less than",a<b)
console.log("lessthan or equal",a<=b)

console.log("\nLogical operator")
console.log("And",true&&true)
console.log("And",true&&false)
console.log("or",true||true)
console.log("not",!true) 

console.log("\nbitwise operator")
console.log(~4)
console.log(~108)
console.log(~132)
console.log(~99)
