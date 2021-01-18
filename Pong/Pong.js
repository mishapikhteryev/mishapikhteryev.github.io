// global variables
var speedPaddle1 = 0;
var speedPaddle2 = 0;
var posPaddle1 = document.getElementById("paddle1").offsetTop;
var posPaddle2 = document.getElementById("paddle2").offsetTop;
var score1 = 0;
var score2 = 0;
var heightPaddle1 = document.getElementById("paddle1").offsetHeight;
var heightPaddle2 = document.getElementById("paddle2").offsetHeight;

// board constants
const gameboardHeight = document.getElementById("gameboard").offsetHeight;
const gameboardWidth = document.getElementById("gameboard").offsetWidth;

// paddle constants
const paddleWidth = document.getElementById("paddle1").offsetWidth + document.getElementById("paddle1").offsetLeft;
const posPaddle1Start = document.getElementById("paddle1").offsetTop;
const posPaddle2Start = document.getElementById("paddle2").offsetTop;

// ball constants
const ballDiameter = document.getElementById("ball").offsetHeight;
const startposBallTop = document.getElementById("ball").offsetTop;
const startposBallLeft = document.getElementById("ball").offsetLeft;

// ball variables
var posBallTop = startposBallTop;
var posBallLeft = startposBallLeft;
var ballSpeedTop = 0;
var ballSpeedLeft = 0;
var ballBaseSpeed = 3;
var ballSpeedIncrease = 0.5;

// score to reach
var goal = 3;

// variables for paddles
var paddleSize = heightPaddle1;
var paddleSpeed = 10;

// this thing
var controlPlay;

// assigns sounds to variables
var low = new sound("low.wav");
var high = new sound("high.wav");
var oof = new sound("oof.wav");

// do stuff on key press
document.addEventListener('keydown', function(e) {
	// console.log("key down: " + e.keyCode);
	if(e.keyCode == 87 || e.witch == 87) { //  W
		speedPaddle1 = -paddleSpeed;
	}
	if(e.keyCode == 83 || e.witch == 83) { //  S
		speedPaddle1 = paddleSpeed;
	}
	if(e.keyCode == 38 || e.witch == 38) { //  UP
		speedPaddle2 = -paddleSpeed;
	}
	if(e.keyCode == 40 || e.witch == 40) { //  DOWN
		speedPaddle2 = paddleSpeed;
	}
});

// do stuff on key lifted
document.addEventListener('keyup', function(e) {
	if(e.keyCode == 87 || e.witch == 87) { //  W
		speedPaddle1 = 0;
	}
	if(e.keyCode == 83 || e.witch == 83) { //  S
		speedPaddle1 = 0;
	}
	if(e.keyCode == 38 || e.witch == 38) { //  UP
		speedPaddle2 = 0;
	}
	if(e.keyCode == 40 || e.witch == 40) { //  DOWN
		speedPaddle2 = 0;
	}
});

// toggle visibility
function toggleVisibility(divId){
	let e = document.getElementById(divId);
	
	// toggle the hiddenness
	if(e){
		e.className = (e.className == 'hidden') ? 'unhidden' : 'hidden';
	}
} // toggleVisibility

// assigns speed and direction to the ball
function startBall(){
	let directionX = 1;
	let directionY = 1;
	posBallTop = startposBallTop;
	posBallLeft = startposBallLeft;
	
	directionX = (Math.floor(Math.random()*2) == 0 ? 1 : -1);
	directionY = (Math.floor(Math.random()*2) == 0 ? 1 : -1);
	// console.log(direction);
	
	ballSpeedTop = directionY*ballBaseSpeed;
	ballSpeedLeft = directionX*ballBaseSpeed;
} // startBall

// update locations of paddles and ball
function show(){
	posPaddle1 += speedPaddle1;
	posPaddle2 += speedPaddle2;
	posBallTop += ballSpeedTop;
	posBallLeft += ballSpeedLeft;
	
	if (posPaddle1 <= 0){
		posPaddle1 = 0;
	}
	
	if (posPaddle2 <= 0){
		posPaddle2 = 0;
	}
	
	if (posPaddle1 >= gameboardHeight - heightPaddle1){
		posPaddle1 = gameboardHeight - heightPaddle1;
	}
	
	if (posPaddle2 >= gameboardHeight - heightPaddle2){
		posPaddle2 = gameboardHeight - heightPaddle2;
	}
	
	if (posBallTop <= 0 || posBallTop >= gameboardHeight - ballDiameter){
		ballSpeedTop *= -1;
		low.play();
	}
	
	// Left Paddle
	if (posBallLeft <= paddleWidth){
		if (posBallTop > posPaddle1 - ballDiameter && posBallTop < posPaddle1 + heightPaddle1){
			// hit
			ballSpeedLeft *= -1;
			ballSpeedTop += ballSpeedTop > 0 ? ballSpeedIncrease : -ballSpeedIncrease;
			ballSpeedLeft += ballSpeedIncrease;
			high.play();
		} else {
			// miss
			score2 += 1;
			document.getElementById("score2").innerHTML = score2;
			gameState()
			startBall();
			oof.play();
		}
	}
	
	// Right Paddle
	if (posBallLeft >= gameboardWidth - paddleWidth - ballDiameter){
		if (posBallTop > posPaddle2 - ballDiameter && posBallTop < posPaddle2 + heightPaddle2){
			// hit
			ballSpeedLeft *= -1;
			ballSpeedTop += ballSpeedTop > 0 ? ballSpeedIncrease : -ballSpeedIncrease;
			ballSpeedLeft -= ballSpeedIncrease;
			high.play();
		} else {
			// miss
			score1 += 1;
			document.getElementById("score1").innerHTML = score1;
			gameState()
			startBall();
			oof.play();

		}
	}
	
	document.getElementById("paddle1").style.top = posPaddle1 + "px";
	document.getElementById("paddle2").style.top = posPaddle2 + "px";
	document.getElementById("ball").style.top = posBallTop + "px";
	document.getElementById("ball").style.left = posBallLeft + "px";
} // show

// unpauses the game
function resumeGame(){
	if(!controlPlay){
		controlPlay = window.setInterval(show, 1000/60);
	}
} // resumeGame

// pauses the game
function pauseGame() {
	window.clearInterval(controlPlay);
	controlPlay = false;
} // pauseGame

// starts the game and resets the score
function startGame() {
	score1 = 0;
	score2 = 0;
	document.getElementById("score1").innerHTML = score1;
	document.getElementById("score2").innerHTML = score2;
	
	startBall();
	
	if(!controlPlay){
		controlPlay = window.setInterval(show, 1000/60);
	}
} // startGame

// stops the game and resets scores
function stopGame() {
	score1 = 0;
	score2 = 0;
	document.getElementById("score1").innerHTML = score1;
	document.getElementById("score2").innerHTML = score2;
	
	window.clearInterval(controlPlay);
	controlPlay = false;
} // stopGame

// checks if a player has enough points to win
function gameState() {
	if(score1 == goal){
		pauseGame();
		document.getElementById("victoryPanel").innerHTML = "player 1 wins";
		document.getElementById("victoryRatio").innerHTML = score1 + ":" + score2;
		toggleVisibility("lightbox");
		toggleVisibility("victory");
		setTimeout(function(){toggleVisibility("victory");}, 333);
		setTimeout(function(){toggleVisibility("victory");}, 666);
		setTimeout(function(){toggleVisibility("victory");}, 1000);
		setTimeout(function(){toggleVisibility("victory");}, 1333);
		setTimeout(function(){toggleVisibility("victory");}, 1666);
		setTimeout(function(){toggleVisibility("victory");}, 2000);
		setTimeout(function(){toggleVisibility("victory");}, 3000);
		setTimeout(function(){toggleVisibility("lightbox");}, 3000);
		setTimeout(function(){stopGame();}, 3000);
	}
	
	if(score2 == goal){
		pauseGame();
		document.getElementById("victoryPanel").innerHTML = "player 2 wins";
		document.getElementById("victoryRatio").innerHTML = score1 + ":" + score2;
		toggleVisibility("lightbox");
		toggleVisibility("victory");
		setTimeout(function(){toggleVisibility("victory");}, 333);
		setTimeout(function(){toggleVisibility("victory");}, 666);
		setTimeout(function(){toggleVisibility("victory");}, 1000);
		setTimeout(function(){toggleVisibility("victory");}, 1333);
		setTimeout(function(){toggleVisibility("victory");}, 1666);
		setTimeout(function(){toggleVisibility("victory");}, 2000);
		setTimeout(function(){toggleVisibility("victory");}, 3000);
		setTimeout(function(){toggleVisibility("lightbox");}, 3000);
		setTimeout(function(){stopGame();}, 3000);
	}
} // gameState

// opens the menu
function menu() {
	toggleVisibility("lightbox");
	toggleVisibility("menuCont");
	pauseGame();
} // menu

// closes the menu
function closeMenu() {
	toggleVisibility("lightbox");
	toggleVisibility("menuCont");
	heightPaddle1 = document.getElementById("paddle1").offsetHeight;
	heightPaddle2 = document.getElementById("paddle2").offsetHeight;
} // closeMenu

// increases the base speed of the ball
function incrementBallBaseSpeed(){
	ballBaseSpeed += 1;
	document.getElementById("bbs").innerHTML = "ball base speed: " + ballBaseSpeed;
} // incrementBallBaseSpeed

// decreases the base speed of the ball
function decrementBallBaseSpeed(){
	ballBaseSpeed -= 1;
	if(ballBaseSpeed == 0){
		ballBaseSpeed = 1;
	}
	document.getElementById("bbs").innerHTML = "ball base speed: " + ballBaseSpeed;
} // decrementBallBaseSpeed

// increases the amount that the balls speed increases by when it bounces of paddles
function incrementBallSpeedIncrease(){
	ballSpeedIncrease = (Math.round((ballSpeedIncrease + 0.1)*10))/10;
	document.getElementById("bsi").innerHTML = "ball speed increase: " + ballSpeedIncrease;
} // incrementBallSpeedIncrease

// decreases the amount that the balls speed increases by when it bounces of paddles
function decrementBallSpeedIncrease(){
	ballSpeedIncrease = (Math.round((ballSpeedIncrease - 0.1)*10))/10;
	if(ballSpeedIncrease < 0){
		ballSpeedIncrease = 0;
	}
	document.getElementById("bsi").innerHTML = "ball speed increase: " + ballSpeedIncrease;
} // decrementBallSpeedIncrease

// increases the threshold for winning
function incrementGoal(){
	goal += 1;
	document.getElementById("goal").innerHTML = "first to: " + goal;
	document.getElementById("goalScore").innerHTML = goal;
} // incrementGoal

// decreases the threshold for winning
function decrementGoal(){
	goal -= 1;
	if(goal == 0){
		goal = 1;
	}
	document.getElementById("goal").innerHTML = "first to: " + goal;
	document.getElementById("goalScore").innerHTML = goal;
} // decrementGoal

// makes the paddles larger
function incrementPaddleSize(){
	paddleSize += 10;
	document.getElementById("psi").innerHTML = "paddle size: " + paddleSize;
	document.getElementById("paddle1").style.height = paddleSize + "px";
	document.getElementById("paddle2").style.height = paddleSize + "px";
} // incrementPaddleSize

// makes the paddles smaller
function decrementPaddleSize(){
	paddleSize -= 10;
	if(paddleSize == 0){
		paddleSize = 10;
	}
	document.getElementById("psi").innerHTML = "paddle size: " + paddleSize;
	document.getElementById("paddle1").style.height = paddleSize + "px";
	document.getElementById("paddle2").style.height = paddleSize + "px";
} // decrementPaddleSize 

// increases the speed of the paddles
function incrementPaddleSpeed(){
	paddleSpeed += 1;
	document.getElementById("psp").innerHTML = "paddle speed: " + paddleSpeed;
} // incrementPaddleSpeed

// decreases the speed of the paddles
function decrementPaddleSpeed(){
	paddleSpeed -= 1;
	if(paddleSpeed == 0){
		paddleSpeed = 1;
	}
	document.getElementById("psp").innerHTML = "paddle speed: " + paddleSpeed;
} // decrementPaddleSpeed

// allows for sound to be played
// https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} // sound

















































