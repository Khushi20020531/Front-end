//project
const prompt=require("prompt-sync")()
let contacts=[];
contacts.push({'name':'khushi', 'phno':'84535 45636', 
    'email':'khushi@gmaul.com'});
contacts.push({'name':'vikram', 'phno':'63645 68920', 
    'email':'vikram@gmaul.com'});
contacts.push({'name':'anuj', 'phno':'88347 84938', 
    'email':'anuj@gmaul.com'});
console.log(contacts);

//display all contacts
console.log("\nTo display all contacts")
for(i=0; i<contacts.length; i++){
    c=contacts[i];
    console.log(`name:${c.name} 
phno:${c.phno} 
email:${c.email}\n`)
}

//search
console.log("\nTo search a contact")
let s_name=prompt("enter the name to search:")
found_name=[]
console.log(`the contact that we need to be searched is ${s_name}`)
for(let j=0; j<contacts.length; j++){
    c1=contacts[j]
    if(c1.name.toLowerCase().includes(s_name.toLowerCase())){
        found_name.push(c1)
    }
}
if(found_name.length>0){
    console.log("\nSearched result as follows:")
    for(let  k=0; k<found_name.length; k++){
        f=found_name[k]
        console.log(`name:${f.name}\n 
phno:${f.phno}\n 
email:${f.email}`)
    }
}
else{
    console.log("contact is not found");
}