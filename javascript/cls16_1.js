/*module.exports.verify=(sn)=>{
    setTimeout(()=>{
        for(let i=1;i<30;i++){
            console.log("card is verified");
        }
    },2000);
}*/


//using promise mrthod
/*module.exports.verify=(sn)=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("card is verified");
            sn();

},2000)
});
return promise;
}
*/
