//pgm1: book obj with discount calculation
/*class Book{
    constructor(title, author, price){
        this.title=title
        this.author=author
        this.price=price
    }
    calculation(discount){
        return this.price-(this.price * discount/100)
    }
}
const book=new Book('python', 'john', 360)
console.log(book.calculation(10)) */


//pgm2:
/*function addNum(num1, num2){
    this.res=num1 + num2
}
const obj={};
addNum.call(obj,5,3)
console.log(obj.res)*/


//pgm3
/*class Car{
    constructor(color, brand, speed){
        this.color=color
        this.brand=brand
        this.speed=speed
    }
    increasespeed(Value){
        this.speed+=Value
    }
}
const car=new Car("red","kwid",70)
car.increasespeed(35)
console.log(car.speed)*/


//pgm4
class Shape{
    area(){
        return 0;
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width=width
        this.height=height
}
area(){
    return this.width * this.height
    }
}
const rect=new Rectangle(5,6)
console.log(rect.area())