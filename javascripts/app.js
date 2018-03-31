var mars = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
]

var rover = {
	direction: 'N',
	x: 0,
	y: 0,
	travelLog: []
};

function turnLeft(rover) {
	switch (rover.direction) {
		case 'N':
			console.log('The rover is currently facing North.');
			console.log(' ... Sending Command ... ');
			rover.direction = 'W';
			console.log('The rover is now facing West.');
			break;

		case 'S':
			console.log('The rover is currently facing South.');
			console.log(' ... Sending Command ... ');
			rover.direction = 'E';
			console.log('The rover is now facing East.');
			break;

		case 'E':
			console.log('The rover is currently facing East.');
			console.log(' ... Sending Command ... ');
			rover.direction = 'N';
			console.log('The rover is now facing North.');
			break;

		case 'W':
			console.log('The rover is currently facing West.');
			console.log(' ... Sending Command ... ');
			rover.direction = 'S';
			console.log('The rover is now facing South.');
			break;
	}
// 	console.log('turnLeft was called.');
	console.log("");
	console.log('New coordinates: ' + rover.x, ',' + rover.y);
	console.log("");
}

function turnRight(rover) {
	switch (rover.direction) {
		case 'N':
			console.log('The rover is currently facing North.');
			console.log("");
			console.log(' ... Sending Command ... ');
			rover.direction = 'E';
			console.log("");
			console.log('The rover is now facing East.');
			break;

		case 'S':
			console.log('The rover is currently facing South.');
			console.log("");
			console.log(' ... Sending Command ... ');
			rover.direction = 'W';
			console.log("");
			console.log('The rover is now facing West.');
			break;

		case 'E':
			console.log('The rover is currently facing East.');
			console.log("");
			console.log(' ... Sending Command ... ');
			rover.direction = 'S';
			console.log("");
			console.log('The rover is now facing South.');
			break;

		case 'W':
			console.log('The rover is currently facing West.');
			console.log("");
			console.log(' ... Sending Command ... ');
			rover.direction = 'N';
			console.log("");
			console.log('The rover is now facing North.');
			break;
	}
// 	console.log('turnRight was called.');
	console.log("");
	console.log('New coordinates: ' + rover.x, ',' + rover.y);
	console.log("");
}

function moveForward(rover) {
	switch (rover.direction) {
		case 'N':
			rover.y--;
			console.log('The rover has moved North.');
			console.log("");
			break;

		case 'S':
			rover.y++;
			console.log('The rover has moved South.');
			console.log("");
			break;

		case 'E':
			rover.x++;
			console.log('The rover has moved East.');
			console.log("");
			break;

		case 'W':
			rover.x--;
			console.log('The rover has moved West.');
			console.log("");
			break;
	}
// 	console.log('moveForward was called.');
	console.log("");
	console.log('New coordinates: ' + rover.x, ',' + rover.y);
	rover.travelLog.push(rover.x + "," + rover.y);
	console.log("");
	console.log("Added current coordinates to travelLog.");
	console.log("");
}

function listCommands(movementCommands){
  for(var i = 0; i < movementCommands.length; i++){
      var letter = movementCommands[i];
    switch(letter){
      case "f":
        console.log("------------------------------");
        console.log("Forward command recieved...");
        console.log("");
        moveForward(rover);
        break;
      case "l":
        console.log("------------------------------");
        console.log("Left command recieved...");
        console.log("");
        turnLeft(rover);
        break;
      case "r":
        console.log("------------------------------");
        console.log("Right command recieved...");
        console.log("");
        turnRight(rover);
        break;
    }
  }
}
listCommands("rrffffff");

console.log('Standby:'); 
console.log('Your rover is transmitting the travelLog:');
console.log(rover.travelLog);




