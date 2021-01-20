const level = [ 
	
	// level 0
	["flag", 		"rock", 		"", 		"", 		"", 
	"wallside", 	"rock", 		"", 		"", 		"goodguy", 
	"", 			"tree", 		"animate", 	"animate", 	"animate", 
	"bridge", 		"water", 		"bridge", 	"bridge", 	"bridge", 
	"", 			"wallup", 		"", 		"arrowu", 	""],
	 
	// level 1
	["flag", 		"tree", 		"animate", 		"tree", 		"tree",
	 "wallside", 	"tree", 		"animate", 		"", 		"goodguy", 
	 "", 			"tree", 		"animate", 		"", 		"tree", 
	 "", 			"tree", 		"animate", 		"", 		"tree", 
	 "", 			"wallup", 		"animate", 		"arrowu", 	"tree"],
	 
	// level 2
	["tree", 		"water", 		"flag", 			"water", 	"tree",
	 "tree", 		"water", 		"bridge", 				"water", 	"tree", 
	 "tree", 		"water", 		"wallside bridge",	"water", 	"tree", 
	 "tree", 		"animate", 		"animate", 			"animate", 	"tree", 
	 "tree", 		"goodguy", 		"arrowu", 			"", 		"tree"],
	 
	// level 3
	["flag", 		"tree", 		"", 		"tree", 		"tree",
	 "wallside", 	"tree", 		"", 		"goodguy", 		"wallup", 
	 "", 			"tree", 		"", 		"wallup", 		"tree", 
	 "", 			"tree", 		"", 		"", 		"tree", 
	 "", 			"wallup", 		"", 		"arrowu", 	"tree"],
	 
	 ]; // level
	 
const gridBoxes = document.querySelectorAll("#gameboard div");

const obstacles = ["rock", "tree", "water"];
	 
var currentLevel = 0; // starting level
var riderOn = false; // is the rider on the arrow?
var currentLocationOfArrow
var currentAnimation;
var boardWidth = 5;

window.addEventListener("load", function () {
	loadLevel();
});

//
document.addEventListener("keydown", function(e) {
	
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
	let levelMap = level[currentLevel]
	let animateBoxes;
	riderOn = false;
	
	// load board
	for(i = 0; i < gridBoxes.length; i++) {
		gridBoxes[i].className = levelMap[i];
		if (levelMap[i].includes("arrowu")) currentLocationOfArrow = i;
	} // for
	
	animateBoxes = document.querySelectorAll(".animate");
	
	if (currentLevel == 1) {
		animateEnemy(animateBoxes, 0, "d");
	} else {
		animateEnemy(animateBoxes, 0, "r");
	}
	
	
}

// animate enemy movement
function animateEnemy(boxes, index, direction) {
	
	// exit if no animation
	if(boxes.length <= 0) { return; }
	
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
		
	currentAnimation = setTimeout(function() {
		animateEnemy(boxes, index, direction);
	}, 750);
} // animate enemy

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
	
	if (!riderOn && nextClass.includes("wall")) { return; }
	
	// jump over the wall
	if (nextClass.includes("wall")) {
		
		if (riderOn) {
			gridBoxes[currentLocationOfArrow].className =  "";
			oldClassName = gridBoxes[nextLocation].className;
			
			if (direction == "l") {
				nextClass = "walljumpl";
				nextNextClass = "goodguyl";
				nextNextLocation = nextLocation - 1;
			} else if (direction == "r") {
				nextClass = "walljumpr";
				nextNextClass = "goodguyr";
				nextNextLocation = nextLocation + 1;
			} else if (direction == "u") {
				nextClass = "walljumpu";
				nextNextClass = "goodguyu";
				nextNextLocation = nextLocation - boardWidth;
			} else if (direction == "d") {
				nextClass = "walljumpd";
				nextNextClass = "goodguyd";
				nextNextLocation = nextLocation + boardWidth;
			} // directonal specifics
			
			// reset bridges if you jump from a bridge
			
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
			
			setTimeout(function () {
				// reset wall
				gridBoxes[nextLocation].className = oldClassName;
				
				// update current location of arrow
				currentLocationOfArrow = nextNextLocation;
				
				// get class of landing square
				nextClass = gridBoxes[currentLocationOfArrow].className;
				
				// show arrow landed
				gridBoxes[currentLocationOfArrow].className = nextNextClass;
				
				// check if it is a flag
				levelup(nextClass);
				
				
			}, 300);
			return;
		} // rider on?
		
		
	} // if wall
	
	// pick up the goodguy
	if (nextClass == "goodguy") {
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
		document.getElementById("lose").style.display= "block";
		console.log("lol u lost");
		return;
	}
	
	// win if necessary
	levelup(nextClass);
	
} // tryToMove

// move up a level
function levelup(nextClass) {
	if(nextClass == "flag" && riderOn) {
		document.getElementById("levelup").style.display = "block";
		clearTimeout(currentAnimation);
		setTimeout (function () {
			document.getElementById("levelup").style.display = "none";
			currentLevel++;
			loadLevel();
			
		}, 1000);
		
	}
}














































