let currentRoom = "start";

const rooms = {
  start: {
    description: "You wake up in a dark room. There is a door to the north and a key on the ground.",
    options: {
      north: "northRoom",
      takeKey: "You take the key."
    }
  },
  northRoom: {
    description: "You enter a bright room. There is a locked chest and a window.",
    options: {
      openChest: "You use the key to open the chest. You find a treasure!",
      lookOutWindow: "You look out the window and see a beautiful view."
    }
  }
};

function displayRoom() {
  console.log(rooms[currentRoom].description);
  Object.keys(rooms[currentRoom].options).forEach(option => {
    console.log(`- ${option}`);
  });
}

function getInput() {
  const input = prompt("What do you want to do?");
  return input.toLowerCase();
}

function processInput(input) {
  const currentRoomOptions = rooms[currentRoom].options;
  if (currentRoomOptions[input]) {
    currentRoom = currentRoomOptions[input];
    displayRoom();
  } else {
    console.log("You can't do that.");
  }
}

displayRoom();

while (true) {
  const input = getInput();
  processInput(input);
}