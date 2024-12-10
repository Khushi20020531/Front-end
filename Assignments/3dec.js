class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getname(){
        return this.name
    }
    getage(){
        return this.age
    }
   }
const person=new Person('Alice', 30);
console.log(person.name);
person.name='Bob';
console.log(person.name);
console.log("Alice age is:",person.age);
person.age=25;
console.log("Bob age is:",person.age); 




//pgm2
class Vehicle{
    constructor(name){
        this.name=name
    }
    describe(){
        console.log("This vehicle is",this.name)
    }
}
class Car extends Vehicle{
    constructor(name,brand){
        super(name)
        this.brand=brand
    }
    showBrand(){
        console.log("This",this.name,"is a",this.brand)
    }
}
const myCar=new Car('Car','Kwid')
myCar.describe()
myCar.showBrand()