const prompt=require("prompt-sync")()
 let signin=true
 if(signin){
    console.log("welcome to login page")
     username=prompt("enter username:")
     password=prompt("enter password:")
     let login=true
     if(login)
     if((username===username)&&(password!==password)){
         console.log("welcome to webpage")
         console.log("successfull")
     }
      else{
         console.log("invalid username or password")
         console.log("not successfull")
      }  
}


