const level = [ 
	/* Empty Level Template
	
	["",		"",			"",			"",			"",			"",			"",			"",			"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",
	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"", 		"",],
	
	*/
	
	// level 0
	["tree", 	"tree", 	"tree", 	"tree", 	"flag", 	"tree", 	"tree", 	"tree", 	"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"goodguy", 	"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"arrowu", 	"", 		"", 		"", 		"tree", 
	"tree", 	"tree", 	"tree", 	"tree", 	"tree", 	"tree", 	"tree", 	"tree", 	"tree",],
	
	// level 1
	["water", 	"water", 	"water", 	"water", 	"flag bridge", 	"water", 	"water", 	"water", 	"water", 
	"water", 	"water", 		"water", 		"water", 		"bridge", 		"water", 		"water", 		"water", 		"water", 
	"water", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"water", 
	"water", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"water", 
	"tree", 	"", 		"", 		"", 		"goodguy", 	"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"tree", 
	"tree", 	"", 		"", 		"", 		"arrowu", 	"", 		"", 		"", 		"tree", 
	"tree", 	"tree", 	"tree", 	"tree", 	"", 	"tree", 	"tree", 	"tree", 	"tree",],
	
	// level 2
	["water", 	"water", 	"water", 	"water", 	"water", 	"water", 	"water", 	"water", 	"water", 
	"water", 	"water", 		"water", 		"bridge", 		"goodguy bridge", 		"bridge", 		"water", 		"water", 		"water", 
	"water", 	"water", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"water", 		"water", 
	"water", 	"water", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"water", 		"water", 
	"water", 	"water", 		"bridge", 		"bridge", 		"flag bridge", 	"bridge", 		"bridge", 		"water", 		"water", 
	"water", 	"water", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"bridge", 		"water", 		"water", 
	"water", 	"water", 		"water", 		"bridge", 		"bridge", 		"bridge", 		"water", 		"water", 		"water", 
	"water", 	"water", 		"water", 		"bridge", 		"arrowu bridge", 	"bridge", 		"water", 		"water", 		"water", 
	"water", 	"water", 	"water", 	"water", 	"bridge", 	"water", 	"water", 	"water", 	"water",],
	
	// level 3
	["water",		"water",			"water",			"water",			"rock",			"flag",			"rock",			"water",			"water",
	"water", 		"water", 		"water", 		"tree", 		"rock", 		"", 		"rock", 		"water", 		"water",
	"water", 		"water", 		"tree", 		"tree", 		"rock", 		"wallside", 		"rock", 		"tree", 		"water",
	"water", 		"water", 		"tree", 		"rock", 		"", 		"", 		"", 		"rock", 		"water",
	"water", 		"tree", 		"tree", 		"rock", 		"", 		"", 		"", 		"rock", 		"tree",
	"tree", 		"tree", 		"tree", 		"rock", 		"", 		"", 		"", 		"rock", 		"tree",
	"rock", 		"rock", 		"rock", 		"rock", 		"wallside", 		"wallside", 		"wallside", 		"rock", 		"rock",
	"rock", 		"rock", 		"rock", 		"", 		"arrowu", 		"", 		"goodguy", 		"rock", 		"rock",
	"rock", 		"rock", 		"rock", 		"rock", 		"rock", 		"rock", 		"rock", 		"rock", 		"rock",],
	
	// level 4
	["water",		"water",			"",			"wallup",			"flag",			"water",			"water",			"water",			"water",
	"water", 		"", 		"goodguy", 		"water", 			"water", 		"water", 		"water", 		"water", 		"water",
	"water", 		"", 		"rock", 		"rock", 			"rock", 		"rock", 		"water", 		"water", 		"water",
	"water", 		"", 		"rock", 		"animate1", 		"rock", 		"rock", 		"rock", 		"water", 		"water",
	"water", 		"", 		"rock", 		"animate1", 		"rock", 		"rock", 		"rock", 		"water", 		"water",
	"water", 		"", 		"", 		"animate1", 		"", 		"rock", 		"", 		"water", 		"water",
	"water", 		"water", 		"rock", 		"animate1", 		"", 		"", 		"", 		"water", 		"water",
	"water", 		"water", 		"rock", 		"rock", 		"", 		"", 		"rock", 		"water", 		"water",
	"water", 		"water", 		"rock", 		"rock", 		"arrowu", 		"", 		"water", 		"water", 		"water",],
	
	// level 5
	["tree",		"tree",			"tree",			"",			"flag",			"",			"tree",			"",			"tree",
	"", 		"tree", 		"tree", 		"", 		"", 		"", 		"tree", 		"tree", 		"tree",
	"tree", 		"", 		"tree", 		"", 		"", 		"", 		"tree", 		"", 		"tree",
	"", 		"tree", 		"tree", 		"", 		"", 		"", 		"tree", 		"tree", 		"tree",
	"", 		"tree", 		"tree", 		"animate1", 		"animate1", 		"animate1", 		"tree", 		"", 		"",
	"tree", 		"tree", 		"tree", 		"", 		"goodguy", 		"", 		"tree", 		"", 		"tree",
	"tree", 		"", 		"tree", 		"", 		"", 		"", 		"tree", 		"tree", 		"tree",
	"tree", 		"", 		"tree", 		"", 		"arrowu", 		"", 		"tree", 		"", 		"tree",
	"", 		"tree", 		"tree", 		"", 		"", 		"", 		"tree", 		"", 		"tree",],
	
	// level 6
	["tree",		"tree",			"tree",			"tree",			"flag",			"tree",			"tree",			"tree",			"tree",
	"tree", 		"tree", 		"", 		"", 		"goodguy", 		"", 		"", 		"tree", 		"tree",
	"wallup", 		"animate5", 		"animate5", 		"animate5", 		"animate5", 		"animate5", 		"animate5", 		"animate5", 		"wallup",
	"wallup", 		"animate4", 		"animate4", 		"animate4", 		"animate4", 		"animate4", 		"animate4", 		"animate4", 		"wallup",
	"wallup", 		"animate3", 		"animate3", 		"animate3", 		"animate3", 		"animate3", 		"animate3", 		"animate3", 		"wallup",
	"wallup", 		"animate2", 		"animate2", 		"animate2", 		"animate2", 		"animate2", 		"animate2", 		"animate2", 		"wallup",
	"wallup", 		"animate1", 		"animate1", 		"animate1", 		"animate1", 		"animate1", 		"animate1", 		"animate1", 		"wallup",
	"tree", 		"tree", 		"", 		"", 		"arrowu", 		"", 		"", 		"tree", 		"tree",
	"tree", 		"tree", 		"tree", 		"tree", 		"tree", 		"tree", 		"tree", 		"tree", 		"tree",],
	
	// level 7
	["",		"tree",			"tree",			"",			"",			"flag",			"tree",			"tree",			"",
	"tree", 		"", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"tree", 		"",
	"tree", 		"tree", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"tree", 		"",
	"", 		"tree", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"", 		"tree",
	"", 		"tree", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"tree", 		"",
	"tree", 		"tree", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"tree", 		"tree",
	"tree", 		"", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"", 		"tree",
	"", 		"tree", 		"tree", 		"animate1", 		"animate2", 		"animate3", 		"tree", 		"tree", 		"tree",
	"tree", 		"tree", 		"tree", 		"", 		"arrowu", 		"goodguy", 		"tree", 		"", 		"tree",],
	
	// level 8
	["tree",		"tree",			"",			"wallup",			"",			"flag",			"tree",			"",			"tree",
	"tree", 		"tree", 		"", 		"tree", 		"", 		"", 		"tree", 		"tree", 		"tree",
	"", 		"", 		"", 		"tree", 		"", 		"", 		"tree", 		"", 		"tree",
	"", 		"tree", 		"tree", 		"tree", 		"animate5", 		"animate5", 		"tree", 		"", 		"",
	"", 		"", 		"", 		"tree", 		"animate4", 		"animate4", 		"tree", 		"tree", 		"",
	"", 		"tree", 		"", 		"tree", 		"animate3", 		"animate3", 		"tree", 		"tree", 		"",
	"tree", 		"", 		"", 		"tree", 		"animate2", 		"animate2", 		"tree", 		"", 		"tree",
	"tree", 		"", 		"tree", 		"tree", 		"animate1", 		"animate1", 		"tree", 		"tree", 		"tree",
	"tree", 		"", 		"", 		"wallup", 		"arrowu", 		"goodguy", 		"tree", 		"tree", 		"",],
	
	// level 9
	["",		"",			"rock",			"",			"flag",			"",			"rock",			"rock",			"",
	"rock", 		"rock", 		"rock", 		"", 		"goodguy", 		"", 		"rock", 		"rock", 		"rock",
	"rock", 		"rock", 		"rock", 		"", 		"", 		"", 		"rock", 		"rock", 		"rock",
	"", 		"rock", 		"rock", 		"animate5", 		"animate5", 		"animate5", 		"rock", 		"", 		"rock",
	"", 		"rock", 		"rock", 		"animate4", 		"animate4", 		"animate4", 		"rock", 		"rock", 		"",
	"rock", 		"rock", 		"rock", 		"animate3", 		"animate3", 		"animate3", 		"rock", 		"rock", 		"",
	"rock", 		"rock", 		"rock", 		"animate2", 		"animate2", 		"animate2", 		"rock", 		"rock", 		"rock",
	"rock", 		"", 		"rock", 		"animate1", 		"animate1", 		"animate1", 		"rock", 		"rock", 		"",
	"", 		"", 		"rock", 		"", 		"arrowu", 		"", 		"rock", 		"", 		"",],
	
	 ]; // level
	 
const gridBoxes = document.querySelectorAll("#gameboard div");

const obstacles = ["rock0", "rock1", "rock2", "rock3", "tree0", "tree1", "tree2", "tree3", "water0", "water1"];
const jumpObstacles = ["rock0", "rock1", "rock2", "rock3", "tree0", "tree1", "tree2", "tree3", "water", "wallup", "wallside", "water0", "water1"];
	 
var currentLevel = 0; // starting level
var riderOn = false; // is the rider on the arrow?
var currentLocationOfArrow
var currentAnimation1;
var currentAnimation2;
var currentAnimation3;
var currentAnimation4;
var currentAnimation5;
var boardWidth = 9;
var stopInput = true;

/*
window.addEventListener("load", function () {
	loadLevel();
});
*/

// check for keys being down
document.addEventListener("keydown", function(e) {
	if (stopInput){ return; }
	switch (e.keyCode) {
		case 37: // left arrow
			if (currentLocationOfArrow % boardWidth !== 0) {
				tryToMove("l");
			}
			break;
		case 38: // up arrow
			if (currentLocationOfArrow >= boardWidth) {
				tryToMove("u");
			}
			break;
		case 39: // right arrow
			if (currentLocationOfArrow % boardWidth < boardWidth - 1) {
				tryToMove("r");
			}
			break;
		case 40: // down arrow
			if (currentLocationOfArrow < boardWidth*boardWidth-boardWidth) {
				tryToMove("d");
			}
			break;
	} // switch
	
});

// load levels
function loadLevel() {
	let levelMap = level[currentLevel];
	let animateBoxes1 = 0;
	let animateBoxes2 = 0;
	let animateBoxes3 = 0;
	let animateBoxes4 = 0;
	let animateBoxes5 = 0;
	riderOn = false;
	stopInput = false;
	
	// load board
	for (i = 0; i < gridBoxes.length; i++) {
		gridBoxes[i].className = levelMap[i];
		
		// unset all background tiling
		gridBoxes[i].style.backgroundColor = "#33cc33";

		
		// set bridges
		if (levelMap[i].includes("bridge")) {
			gridBoxes[i].style.backgroundColor = "#800020";
		}
		
		// water tiling
		if (levelMap[i].includes("water")){
				gridBoxes[i].className = "water" + Math.floor((i + 1) % 2);
		} 
		
		// tiling
		if (i % 2 == 0) {
			if (!levelMap[i].includes("bridge")) {
				gridBoxes[i].style.backgroundColor = "#32c832";
			} else {
				gridBoxes[i].style.backgroundColor = "#7a001f";
			}
		}
		
		// randomize tree sprites
		if (levelMap[i].includes("tree")){
			gridBoxes[i].className = "tree" + Math.floor(Math.random()*4);
		}
		
		// randomize rock sprites
		if (levelMap[i].includes("rock")){
			gridBoxes[i].className = "rock" + Math.floor(Math.random()*4);
		}
		
		if (levelMap[i].includes("arrowu")) { 
			currentLocationOfArrow = i
		}
	} // for
	
	animateBoxes1 = document.querySelectorAll(".animate1");
	animateBoxes2 = document.querySelectorAll(".animate2");
	animateBoxes3 = document.querySelectorAll(".animate3");
	animateBoxes4 = document.querySelectorAll(".animate4");
	animateBoxes5 = document.querySelectorAll(".animate5");
	
	switch (currentLevel) {
		case 4:
			animateEnemy(animateBoxes1, 0, "d", 1);
			break;
		case 5:
			animateEnemy(animateBoxes1, 0, "r", 1);
			break;
		case 6:
			animateEnemy(animateBoxes1, 0, "r", 1);
			animateEnemy(animateBoxes2, 1, "r", 2);
			animateEnemy(animateBoxes3, 2, "r", 3);
			animateEnemy(animateBoxes4, 3, "r", 4);
			animateEnemy(animateBoxes5, 4, "r", 5);
			break;
		case 7:
			animateEnemy(animateBoxes1, 0, "d", 1);
			animateEnemy(animateBoxes2, 6, "u", 2);
			animateEnemy(animateBoxes3, 0, "d", 3);
			break;
		case 8:
			animateEnemy(animateBoxes1, 0, "r", 1);
			animateEnemy(animateBoxes2, 1, "r", 2);
			animateEnemy(animateBoxes3, 0, "r", 3);
			animateEnemy(animateBoxes4, 1, "r", 4);
			animateEnemy(animateBoxes5, 0, "r", 5);
			break;
		case 9:
			animateEnemy(animateBoxes1, 0, "r", 1);
			animateEnemy(animateBoxes2, 2, "r", 2);
			animateEnemy(animateBoxes3, 0, "r", 3);
			animateEnemy(animateBoxes4, 2, "r", 4);
			animateEnemy(animateBoxes5, 0, "r", 5);
			break;
		case 10:
			animateEnemy(animateBoxes1, 0, "d", 1);
			animateEnemy(animateBoxes2, 6, "u", 2);
			animateEnemy(animateBoxes3, 0, "d", 3);
		default:
	}
} // loadLevel

// animate enemy movement
function animateEnemy(boxes, index, direction, num) {
	
	// exit if no animation
	if (boxes.length <= 0) { return; }
	
	// update images
	if (direction == "r") {
		boxes[index].classList.add("badguyr")
	} else if (direction == "l") {
		boxes[index].classList.add("badguyl")
	} else if (direction == "u") {
		boxes[index].classList.add("badguyu")
	} else if (direction == "d") {
		boxes[index].classList.add("badguyd")
	}
	
	// remove old images
	for (i = 0; i < boxes.length; i++){
		if (i != index){
			boxes[i].classList.remove("badguyl");
			boxes[i].classList.remove("badguyr");
			boxes[i].classList.remove("badguyu");
			boxes[i].classList.remove("badguyd");
		}
	}
	
	// lose the game if the bad guy lands on the player
	if(boxes[index].className.includes("arrow") || boxes[index].className.includes("goodguy")){
		document.getElementById("lose").style.display= "block";
		stopInput = true;
		leveldown()
		return;
	}
	
	// moving right
	if (direction == "r"){
		// turn around if hits right side
		if (index == boxes.length - 1){
			index--;
			direction = "l";
		} else { 
			index++;
		}
		
	// moving left
	} else if (direction == "l") {
		// turn around if hits left side
		if (index == 0) {
			index++;
			direction = "r";
		} else {
			index--;
		}
		
	// moving up
	} else if (direction == "u") {
		// turn around if hits upper side
		if (index == 0) {
			index++;
			direction = "d";
		} else {
			index--;
		}
		
	// moving down
	} else if (direction == "d") {
		// turn around if hits lower side
		if (index == boxes.length - 1) {
			index--;
			direction = "u";
		} else {
			index++;
		}
		
	} // else

	switch (num) {
		case 1:
			currentAnimation1 = setTimeout(function() {
			animateEnemy(boxes, index, direction, num);
			}, 500);
			break;
		case 2:
			currentAnimation2 = setTimeout(function() {
			animateEnemy(boxes, index, direction, num);
			}, 500);
			break;
		case 3:
			currentAnimation3 = setTimeout(function() {
			animateEnemy(boxes, index, direction, num);
			}, 500);
			break;
		case 4:
			currentAnimation4 = setTimeout(function() {
			animateEnemy(boxes, index, direction, num);
			}, 500);
			break;
		case 5:
			currentAnimation5 = setTimeout(function() {
			animateEnemy(boxes, index, direction, num);
			}, 500);
			break;
	}
} // animate enemy

// attempts to move the player
function tryToMove(direction) {
	
	let oldLocation = currentLocationOfArrow;
	
	let oldClassName = gridBoxes[oldLocation].className;
	
	let nextLocation = 0;
	let nextClass = "";
	
	let nextNextLocation = 0;
	let nextNextClass = "";
	
	let newClass = "";
	
	switch (direction) {
		case "l":
			nextLocation = currentLocationOfArrow - 1;
			console.log("move left");
			break;
		case "u":
			nextLocation = currentLocationOfArrow - boardWidth;
			console.log("move up");
			break;
		case "r":
			nextLocation = currentLocationOfArrow + 1;
			console.log("move right");
			break;
		case "d":
			nextLocation = currentLocationOfArrow + boardWidth;
			console.log("move down");
			break;
	} // switch
	
	nextClass = gridBoxes[nextLocation].className;
	
	// end early if there is an obstacle
	if (obstacles.includes(nextClass)) { return; }
	
	// end early if there is a flag and you have no rider
	if (!riderOn && nextClass.includes("flag")) { return; }
	
	if (!riderOn && nextClass.includes("wall")) { return; }
	
	// jump over the wall
	if (nextClass.includes("wall")) {
		
		if (riderOn) {
			
			oldClassName = gridBoxes[nextLocation].className;
			
			
			if (direction == "l" && gridBoxes[nextLocation].className.includes("wallup")) {
				nextClass = "walljumpl";
				nextNextClass = "goodguyl";
				nextNextLocation = nextLocation - 1;
				
				// return if next location goes off the screen
				if (nextNextLocation % boardWidth == 4) { return; }
				
			} else if (direction == "r" && gridBoxes[nextLocation].className.includes("wallup")) {
				nextClass = "walljumpr";
				nextNextClass = "goodguyr";
				nextNextLocation = nextLocation + 1;
				
				// return if next location goes off the screen
				if (nextNextLocation % boardWidth == 0) { return; }
				
			} else if (direction == "u" && gridBoxes[nextLocation].className.includes("wallside")) {
				nextClass = "walljumpu";
				nextNextClass = "goodguyu";
				nextNextLocation = nextLocation - boardWidth;
				
				// return if next location goes off the screen
				if (nextNextLocation < 0) { return; }
				
			} else if (direction == "d" && gridBoxes[nextLocation].className.includes("wallside")) {
				nextClass = "walljumpd";
				nextNextClass = "goodguyd";
				nextNextLocation = nextLocation + boardWidth;
				
				// return if next location goes off the screen
				if (nextNextLocation >= boardWidth * boardWidth) { return; }
				
			} else {
				return;
			}// directonal specifics
			
			// return if there is an obstacle in the way of the jump
			if (jumpObstacles.includes(gridBoxes[nextNextLocation].className)) { return; }
			
			// sets the class of the previous location
			if (gridBoxes[currentLocationOfArrow].className.includes("bridge")){
				// reset bridges if you jump from a bridge
				gridBoxes[currentLocationOfArrow].className = "bridge";
			} else {
				gridBoxes[currentLocationOfArrow].className = "";
			}
			
			// reset bridges if the wall is on a bridge
			if (gridBoxes[nextLocation].className.includes("bridge")){
				nextClass += " bridge";
			}
			
			// reset bridges if you land on a bridge
			if (gridBoxes[nextNextLocation].className.includes("bridge")){
				nextNextClass += " bridge";
			}
			
			// show jump animation
			gridBoxes[nextLocation].className = nextClass;
			
			stopInput = true;
			setTimeout(function () {
				stopInput = false;
				// reset wall
				gridBoxes[nextLocation].className = oldClassName;
				
				// update current location of arrow
				currentLocationOfArrow = nextNextLocation;
				
				// get class of landing square
				nextClass = gridBoxes[currentLocationOfArrow].className;
				
				// die if necessary
				if (gridBoxes[currentLocationOfArrow].className.includes("badguy")){
					document.getElementById("lose").style.display= "block";
					stopInput = true;
					leveldown()
				}
				
				// show arrow landed
				gridBoxes[currentLocationOfArrow].className = nextNextClass;
				
				// check if it is a flag
				levelup(nextClass);
				
			}, 200);
			
			return;
		} // rider on?
		
		
	} // if wall
	
	// pick up the goodguy
	if (nextClass.includes("goodguy")) {
		riderOn = true;
	}
	
	// keep bridges intact in old location
	if (oldClassName.includes("bridge")) {
		gridBoxes[oldLocation].className = "bridge";
	} else {
		gridBoxes[oldLocation].className = "";
	}
	
	// build name of new class
	newClass = (riderOn) ? "goodguy" : "arrow";
	newClass += direction;
	
	// keep bridges intact in new location
	if (gridBoxes[nextLocation].classList.contains("bridge")) {
		newClass += " bridge"
	}
	
	// move 1 space
	currentLocationOfArrow = nextLocation;
	gridBoxes[currentLocationOfArrow].className = newClass;
	
	// die if necessary
	if (nextClass.includes("badguy")) {
		document.getElementById("lose").style.display = "block";
		stopInput = true;
		leveldown()
		return;
	}
	
	// win if necessary
	levelup(nextClass);
	
} // tryToMove

// shows the instructions
function showInstructions() {
	document.getElementById("instructionText").style.display = "grid";
} // showInstructions


// move up a level
function levelup(nextClass) {
	if(nextClass.includes("flag")) {
		if (currentLevel == 9){
				currentLevel = 0;
				endGame();
			} else {
				document.getElementById("levelup").style.display = "block";
				clearTimeout(currentAnimation1);
				clearTimeout(currentAnimation2);
				clearTimeout(currentAnimation3);
				clearTimeout(currentAnimation4);
				clearTimeout(currentAnimation5);
				setTimeout (function () {
				document.getElementById("levelup").style.display = "none";
				currentLevel++;
				loadLevel();
				}, 1000);
		}
	}
} // levelup

// go down by one level
function leveldown() {
	document.getElementById("lose").style.display = "block";
	clearTimeout(currentAnimation1);
	clearTimeout(currentAnimation2);
	clearTimeout(currentAnimation3);
	clearTimeout(currentAnimation4);
	clearTimeout(currentAnimation5);
	setTimeout (function () {
		document.getElementById("lose").style.display = "none";
		currentLevel--;
		loadLevel();
	}, 1000);
} // levelDown

// start the game
function startGame() {
	stopInput = false;
	document.getElementById("menu").style.display = "none";
	document.getElementById("instructionText").style.display = "none";
	loadLevel();
} // startGame

// end the game
function endGame() {
	document.getElementById("win").style.display = "block";
	setTimeout (function () {
		clearTimeout(currentAnimation1);
		clearTimeout(currentAnimation2);
		clearTimeout(currentAnimation3);
		clearTimeout(currentAnimation4);
		clearTimeout(currentAnimation5);
		document.getElementById("win").style.display = "none";
		document.getElementById("menu").style.display = "block";
	}, 1000);
} // endGame











































