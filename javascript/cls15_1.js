/*const text="This is a item 42, and item 99";
const regex=/\b(\w+)\s+(\d+)\b/g;
const matches=text.matchAll(regex);
for (const match of matches) {
  console.log(match[0]);  
}*/


function changeToYahoo() {
    const email = prompt("Enter your email address:");
    const gmailRegex = /^[^\s@]+@[^\s@]+\.gmail\.com$/;
    if (gmailRegex.test(email)) {
      const confirm = confirm("Your email is a Gmail account. Do you want to change it to a Yahoo account?");
      if (confirm) {
        const newEmail = prompt("Enter your new Yahoo email address:");
        const yahooEmail = newEmail.replace(/@gmail\.com$/, "@yahoo.com"); // Replace .com with .yahoo.com
        console.log("Your new Yahoo email is: " + yahooEmail);
      } else {
        console.log("Email change canceled.");
      }
    } else {
        console.log("Please enter a valid Gmail address.");
    }
  }
changeToYahoo();