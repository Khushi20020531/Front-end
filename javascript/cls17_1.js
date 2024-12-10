module.exports.verify=(a)=>{
    const promise=new Promise((resolve
        ,reject)=>{
        setTimeout(()=>{
            console.log("card is verified");
            a();

},2000)
});
return promise;
}