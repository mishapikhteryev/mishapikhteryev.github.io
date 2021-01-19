const level = [ 
	
	// level 0
	["flag", "rock", "", "", "", 
	"wallside", "rock", "", "", "goodguy", 
	"", "tree", "animate", "animate", "animate", 
	"", "water", "", "", "", 
	"", "wallup", "", "arrowu", ""],
	 
	 // level 1
	 ["flag", "tree", "", "", "",
	 "wallside", "tree", "", "", "goodguy", 
	 "", "tree", "animate", "animate", "animate", 
	 "", "tree", "", "", "", 
	 "", "wallup", "", "arrowu", ""]
	 
	 ]; // level
	 
const gridBoxes = document.querySelectorAll("#gameboard div");
	 
var currentLevel = 0; // starting level
var riderOn = false; // is the rider on the arrow?
var currentLocationOfArrow
var currentAnimation;

window.addEventListener("load", function () {
	loadLevel();
});

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
	animateEnemy(animateBoxes, 0, "right");
}

// animate enemy movement
function animateEnemy(boxes, index, direction) {
	
	// exit if no animation
	if(boxes.length <= 0) { return; }
	
	// update images
	if (direction == "right") {
		boxes[index].classList.add("badguyr")
	} else {
		boxes[index].classList.add("badguyl")
	}
	
	// remove old images
	for (i = 0; i < boxes.length; i++){
		if(i != index){
			boxes[i].classList.remove("badguyl");
			boxes[i].classList.remove("badguyr");
		}
	}
	
	// moving right
	if(direction == "right"){
		// turn around if hits right side
		if (index == boxes.length - 1){
			index--;
			direction = "left";
			
			
		} else { 
			index++;
		}
	// moving left
	} else {
		// turn around if hits left side
		if (index == 0) {
			index++;
			direction = "right";
		} else {
			index--;
		}
	} // else
		
	currentAnimation = setTimeout(function() {
		animateEnemy(boxes, index, direction);
	}, 750);
} // animate enemy



















