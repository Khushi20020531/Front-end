//using CRUD operations
console.log("Question 1")
const student={
     name:"abc",
     age:"23",
     grade:"B",
}
console.log("display and read:")
console.log("name:",student.name)
console.log("age:",student.age)
console.log("grade:",student.grade)
console.log("\nupdated")
student.grade="A";//to update
console.log(student.grade);
console.log("\ndeleted")
delete student.age;// to delete
console.log(student.name);


//create a function to add or update the properties
//of an object
console.log("\nQuestion 2")
function addorupdate(object, key, value){
object[key]=value;
}
const person={
   name:"alice",
   age:30
};
addorupdate(person, "city","New york");
addorupdate(person, "age",23);
console.log(person);

//using constructor and display methods
console.log("\nQuestion 3")
class mybook{
  constructor(title, author, year){
     this.title=title;
     this.author=author;
     this.year=year;
     }

     displaydetails(){
         console.log("Title:",this.title);
         console.log("Author:",this.author);
         console.log("Year:",this.year);
     }
}
const book1=new mybook("Harry Potter","J K Rowling",1997);
book1.displaydetails();

//using push, unshift, pop and shift
console.log("\nQuestion 4")
const myarray=[];
console.log("a part");
myarray.push(10,20,30);//add elements to end
myarray.unshift(5,15);//add elements in beginning
console.log(myarray);
console.log("b part");
myarray.pop();//removes last element
myarray.shift();//removes first element
console.log(myarray);

//multidimensional array
console.log("\nQuestion 5")
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
}
}