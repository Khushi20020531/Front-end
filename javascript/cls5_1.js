//wap to check if a year is leap or not
function isLeapYear(year){
    if(year % 100===0 ? year % 400===0 : year % 4===0)
        console.log("input year",year,"is a leap year");
    else
    console.log("input year",year,"is not  a leap year");
}
let inputYear=2020;
isLeapYear(inputYear);
inputYear=2023;
isLeapYear(inputYear);


//wap for check range of number
