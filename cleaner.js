function reflex_agent(location, state) {
  if (state === "DIRTY") return "CLEAN";
  else if (location === "A") return "RIGHT";
  else if (location === "B") return "LEFT";
}

// función para ensuciar una habitación de forma aleatoria
function dirt_room(rooms) {
  var randomRoom = Math.floor(Math.random() * 2) + 1;
  const cleanRooms = rooms.filter((room) => room[randomRoom] !== 'DIRTY');
  rooms= cleanRooms;
  if (cleanRooms.length > 0) {
    cleanRooms[randomRoom] = "DIRTY";
  }
  console.log(rooms)
  return cleanRooms;
}


function test(states) {
  var location = states[0];
  var state = (location === "A") ? states[1] : states[2];
  var action_result = reflex_agent(location, state);
  console.log(action_result);
  
  document.getElementById("log").innerHTML += `<br>Location: ${location} | State: ${state} | Action: ${action_result}`;

  if (action_result === "CLEAN") {
    if (location === "A") states[1] = "CLEAN";
    else if (location === "B") states[2] = "CLEAN";
  }
  else if (action_result === "RIGHT") states[0] = "B";
  else if (action_result === "LEFT") states[0] = "A";
  
  states = dirt_room(states);
  setTimeout(() => { test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
