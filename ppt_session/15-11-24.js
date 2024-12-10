//wap to create a basic text editor that allows users to input some text, 
//manipulate it, and display the result.

function textEditor() {
  const lines = []; // Array to store lines of text

  while (true) {
    const prompt=require("prompt-sync")()
    const command = prompt("Enter a command (add, delete, display, edit, search, quit):");

    switch (command) {
      case "add":
        const newLine = prompt("Enter a new line of text:");
        lines.push(newLine);
        console.log("Line added successfully.");
        break;

        case "delete":
          const lineNumber = parseInt(prompt("Enter the line number to delete:"));
          if (lineNumber >= 1 && lineNumber <= lines.length) {
            lines.splice(lineNumber - 1, 1); // Remove one element at the specified index
            console.log("Line deleted successfully.");
          } else {
            console.log("Invalid line number.");
          }
          break;

          case "display":
  if (lines.length == 0) {
    console.log("No text entered yet.");
  } else {
    for (let i = 0; i < lines.length; i++) {
      console.log(`${i + 1}. ${lines[i]}`);
    }
  }
  break;

        case "edit":
          const linenumber = parseInt(prompt("Enter the line number to edit:"));
          if (linenumber >= 1 && linenumber <= lines.length) {
            const newText = prompt("Enter the new text for this line:");
            lines[linenumber - 1] = newText;
            console.log("Line edited successfully.");
          } else {
            console.log("Invalid line number.");
          }
          break;

          case "search":
  const searchTerm = prompt("Enter the text to search:");
  let found = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchTerm)) {
      console.log(`Found in line ${i + 1}: ${lines[i]}`);
      found = true;
    }
  }
  if (!found) {
    console.log("Text not found.");
  }
  break;
           case "quit":
        console.log("Exiting text editor.");
        return;
        
      default:
        console.log("Invalid command. Please try again.");
    }
  }
}
textEditor();