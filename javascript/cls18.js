// Object representing a calculator with arithmetic operations
/*const calculator={
    add:function(a, b) {
        return a + b;
    },
    subtract:function(a, b) {
        return a - b;
    },
    multiply:function(a, b) {
        return a * b;
    },
    divide:function(a, b) {
        return a / b;
    }
};
function performCalculation(operation, num1, num2) {
    const result=calculator[operation](num1, num2);
    console.log(`result of ${operation}: ${result}`);
}
const Cal=performCalculation.bind(calculator);
Cal('add', 5, 3); 
Cal('subtract', 10, 4); 
Cal('multiply', 2, 6);
Cal('divide', 15, 3);*/




/*class Shape{
    constructor(shapeType){
        this.shapeType=shapeType;
    }
    area(){
        if(this.shapeType==='triangle'){
            const prompt=require("prompt-sync")()
            const base=parseFloat(prompt('enter the base of triangle:'))
            const height=parseFloat(prompt('enter the height of triangle:'))
            const area=0.5*base*height;
            console.log('area of triangle:',area)
        }
        else if(this.shapeType==='rectangle'){
            const prompt=require("prompt-sync")()
            const length=parseFloat(prompt('enter the length of rectangle:'))
            const width=parseFloat(prompt('enter the width of rectangle:'))
            const area=length*width;
            console.log('area of rectangle:',area)
        }
        else if(this.shapeType==='circle'){
            const prompt=require("prompt-sync")()
            const radius=parseFloat(prompt('enter the radius of circle:'))
            const area=Math.PI*radius*radius;
            console.log('area of circle:',area)
            }
            else{
                console.log('invalid shape')
            }
        }
    }
const prompt=require("prompt-sync")()
const shapeType=prompt('enter shapetype:')
const shape=new Shape(shapeType)
shape.area()*/




class Company{
    constructor(name, location) {
        this.name=name;
        this.location=location;
    }
    getEmployees() {
    }
    hireEmployee(employee) {
    }
}
class Employee extends Company {
    constructor(name, id, salary, companyName, companyLocation) {
        super(companyName, companyLocation);
        this.name=name;
        this.id=id;
        this.salary=salary;
    }
    work(){
        console.log(`${this.name} is working at ${this.name}`);
    }
    takeLeave(){
        console.log(`${this.name} is on leave`);
    }
}
const company1=new Company("TechCorp", "Silicon Valley");
const employee1=new Employee("Alice", 123, 50000, company1.name, company1.location);
employee1.work(); 
console.log(employee1.location); 