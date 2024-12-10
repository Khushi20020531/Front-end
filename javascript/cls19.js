//wap create a class animal with methods eat() and sleep().extend 
//it to create a dog class with additional bark() method and show how 
//inheritance works in js.
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//     eat() {
//       console.log(`${this.name} is eating.`);
//     }
//     sleep() {
//       console.log(`${this.name} is sleeping.`);
//     }
//   }
//   class Dog extends Animal{
//     bark() {
//       console.log(`${this.name} is barking.`);
//     }
//   }
//   const myDog = new Dog("gimmy");
//   myDog.eat(); 
//   myDog.sleep();
//   myDog.bark(); 



//wap to implement a custom object method using the prototype chain
//for exampele a method to multiplyby() that multiplies all array
//elements by a given number in js.
// function Custom(arr) {
//     this.array = arr;
//   }
//   Custom.prototype.multiplyBy = function(num) {
//     return this.array.map(element => element * num);
//   };
//   const myArray = new Custom([1, 2, 3, 4, 5]);
//   const multipliedArray = myArray.multiplyBy(2);
//   console.log(multipliedArray);



//write a class employee with:
//private attributes _name and _salary
//crete a method called set_sallary() that ensures the salary is positive
//create another mrthod to get_salary() in js using encapsulation
// class Employee{
//     constructor(name){
//         this._name=name
//         this._salary=0
//     }
//     set_salary(salary){
//         if(salary>=0){
//             this._salary=salary
//         }
//         else{
//             console.log("salary cannot be negative")
//         }
//     }
//     get_salary(){
//         return this._salary
//     }
// }
// const emp=new Employee("abc")
// //emp.set_salary(10000)
// emp.set_salary(-10000)
// console.log("the salary of the employee is",emp.get_salary())

//create a class circle with private attributes _radius.A method set_radius() to ensure that the radius cannot be
// -ve or 0 a method get_area() to calculate and returns area using js in encapsulation.
// class Circle{
//     constructor(radius){
//         this._radius=0
//     }
//     set_radius(radius){
//         if(radius>0){
//             this._radius=radius
//     }
//     else{
//         console.log("radius cannot be negative or zero")
//     }
// }
// get_area(){
//     return Math.PI*this._radius*this._radius
// }
// }
// const circle1=new Circle()
// circle1.set_radius(5)
// const area=circle1.get_area()
// console.log("the area of the circle is",area)


//using class
class Employee {
    constructor(name, age, baseSalary, designation, department) {
        this.name=name;
        this.age=age;
        this.baseSalary=baseSalary;
        this.designation=designation;
        this.department=department;
        this.monthlyBonus=5000;
    }
    calculateFinalSalary(){
        const finalSalary=this.baseSalary + this.monthlyBonus;
        console.log("final Salary:", finalSalary);
    }
    getEmpDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Designation:", this.designation);
        console.log("Department:", this.department);
        console.log("Base Salary:", this.baseSalary);
        this.calculateFinalSalary();
    }
    // updateSalary(newSalary) {
    //     this.baseSalary = newSalary;
    //     console.log("Salary updated successfully.");
    // }
}
const emp1 = new Employee("khushi", 24, 30000, "Software Engineer", "IT");
emp1.getEmpDetails();
//emp1.updateSalary(35000);
emp1.getEmpDetails();