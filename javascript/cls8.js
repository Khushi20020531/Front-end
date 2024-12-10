//wap to create railway reservation  data using object
// const railwayreservation={
//     name:"abc",
//     age:"24",
//     date:"11-11-2024",
//     from:"bangalore",
//     to:"hubli",
// }
// console.log(railwayreservation.name);
// console.log(railwayreservation.age);
// console.log(railwayreservation.date);
// console.log(railwayreservation.from);
// console.log(railwayreservation.to);

//with parameter
// function createRailwayReservation(name,age,date,from,to){
//     function railwayreservation(){
//     this.name=name,
//     this.age="age",
//     this.date="name",
//     this.name="name",
//     this.name="name",
// }
// }
// //calling the function
// const railwayreservation=new createRailwayReservation("abc","24","11-11-2024","bangalore","hubli");
// console.log(createRailwayReservation.name);
// console.log(createRailwayReservation.age);
// console.log(createRailwayReservation.date);
// console.log(createRailwayReservation.from);
// console.log(createRailwayReservation.to);

//without parameter



//getter and setter
// const student={
//     name:"abc",
//     age:"24",
//     get getname(){
//         return this.name;
//     },
//     set changename(newname){
//         this.name=newname;
//     }
// }
// console.log(student.name);
// student.changename="xyz";
// console.log(student.name);

//adding new element and removing last element
//using for each
// const myarray=['3','4','5','6'];
// let newarray=[];
// myarray.forEach((element, index)=>{
//     if(index === 0){
//         newarray.push(1,2);
//     }
//     newarray.push(element);
// });
// newarray.pop();
// console.log(newarray);

//using for of
// const num=[1,2,3,4,5,6];
// num.unshift(0);
// num.pop();
// for(let numbers of num){
//     console.log(numbers);
// }

//splice
// const myarray=['1','2','3','4','5'];
// myarray.splice(1,2,'a','b');
// console.log(myarray);
//splice(1,2,'a','b','c') means delete 2 elements from index



//multi-dimensional array
const myarray=[[1,2,3],[4,5,6],[7,8,9]]
myarray.forEach((element, index) => {
    element.forEach((innerElement, innerIndex) => {
        console.log(innerElement);
        });
        });
        console.log("print elements");
        console.log(myarray[0][1]); //accessing element at index 0,1
        console.log(myarray[1][2]); //accessing element at index 1,2
        console.log(myarray[2][0]); //accessing element at index 2,0


