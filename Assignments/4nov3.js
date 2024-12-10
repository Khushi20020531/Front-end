//calculate area of rectangle
function areaofrect(width, height){
    if(width === undefined)
    {
        width=1;
    }
    if(height === undefined)
        {
            height=1;
        }
        return width * height;
}
const area1=areaofrect(5,4);
const area2=areaofrect(5);
const area3=areaofrect();

console.log("area1:",area1);
console.log("area2:",area2);
console.log("area3:",area3);



