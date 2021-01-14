let defaultPlayer = "X";			// the default player
let currentPlayer = defaultPlayer;	// allows the first turn to be either X or O
let playerCount = 1;				// determines whether or not to activate the computer
let computerDifficulty = "Easy"		// determines which computer AI to use
let gameStatus = ""; 				// "", "TIE", "X WINS", "O WINS".
let numTurns = 0;					// counts the number of turns
let idNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function newGame() {
resetGame();

changeVisibility("controls");
changeVisibility("resetButton");
} // newGame

// take player turn
function playerTakeTurn(elem){
	if (elem.innerHTML == "") {
		elem.innerHTML=currentPlayer;
		checkGameStatus();
		
		if (gameStatus == "" && playerCount == 1) {
			stopInput();
			setTimeout(function(){
				computerTakeTurn();
				checkGameStatus();
					}, 333
			);
		}
	} else {
		showLightBox("This box is already selected.", "Please try again");
		console.log("Box Already Selected");
		return;
	}
	
// game is over
	
	
} // playerTakeTurn

// after each turn, check if the game should end
function checkGameStatus(){
	numTurns++; //count turn
	
	if (checkWin()) {
		gameStatus = currentPlayer + " Wins";
		console.log("Game status: " + gameStatus);
	}else if (numTurns == 9) {
		gameStatus = "TIE";
		console.log("Game status: " + gameStatus);
	}
	
	currentPlayer = (currentPlayer == "X" ? "O" : "X");
	
	if (gameStatus != ""){
		showLightBox("Game is Over: ", gameStatus);
		console.log("Game is Over: " + gameStatus);
	}
} // checkGameStatus

// check for a win
function checkWin() {
	let board = []; // status of the board
	board[0] = ""; // DO NOT USE
	board[1] = document.getElementById("one").innerHTML;
	board[2] = document.getElementById("two").innerHTML;
	board[3] = document.getElementById("three").innerHTML;
	board[4] = document.getElementById("four").innerHTML;
	board[5] = document.getElementById("five").innerHTML;
	board[6] = document.getElementById("six").innerHTML;
	board[7] = document.getElementById("seven").innerHTML;
	board[8] = document.getElementById("eight").innerHTML;
	board[9] = document.getElementById("nine").innerHTML;
	
	// top row
	if (board[1] != "" && board[1] == board[2] && board[2] == board[3]){
		return true;
	}
	
	// second row
	if (board[4] != "" && board[4] == board[5] && board[5] == board[6]){
		return true;
	}
	
	// third row
	if (board[7] != "" && board[7] == board[8] && board[8] == board[9]){
		return true;
	}
	
	// first column
	if (board[1] != "" && board[1] == board[4] && board[4] == board[7]){
		return true;
	}
	
	// second column
	if (board[2] != "" && board[2] == board[5] && board[5] == board[8]){
		return true;
	}
	
	// third column
	if (board[3] != "" && board[3] == board[6] && board[6] == board[9]){
		return true;
	}
	
	// top-left to bottom-right diagonal
	if (board[1] != "" && board[1] == board[5] && board[5] == board[9]){
		return true;
	}
	
	// bottom-left to top-right diagonal
	if (board[3] != "" && board[3] == board[5] && board[5] == board[7]){
		return true;
	}
} // checkWin

// toggle visibility
function changeVisibility(divId){
	let e = document.getElementById(divId);
	
	// toggle the hiddenness
	if(e){
		e.className = (e.className == 'hidden') ? 'unhidden' : 'hidden';
	}
} // changeVisibility

// show the lightbox with a selected message
function showLightBox(endGameTitle, endGameMessage){
	// Set Messages
	document.getElementById("endGameTitle").innerHTML = endGameTitle;
	document.getElementById("endGameMessage").innerHTML = endGameMessage;
	
	// show lightbox
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
} // showLightBox

// closes the lightbox and shows the reset button if needed
function closeLightBox(){
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
	
	if(gameStatus != "") {
		changeVisibility("controls");
		changeVisibility("resetButton");
	}
} // closeLightBox

// dictates what the computer does during its turn
function computerTakeTurn(){
	let board = []; // shorthand status of the board
	board[0] = ""; // DO NOT USE
	board[1] = document.getElementById("one").innerHTML;
	board[2] = document.getElementById("two").innerHTML;
	board[3] = document.getElementById("three").innerHTML;
	board[4] = document.getElementById("four").innerHTML;
	board[5] = document.getElementById("five").innerHTML;
	board[6] = document.getElementById("six").innerHTML;
	board[7] = document.getElementById("seven").innerHTML;
	board[8] = document.getElementById("eight").innerHTML;
	board[9] = document.getElementById("nine").innerHTML;

	let idName = "";

	if(computerDifficulty == "Easy"){
		// choose a random box until an empty one is found
		do{
			let rand = Math.floor(Math.random()*9);
			idName = idNames[rand];
				
			if(document.getElementById(idName).innerHTML == "") {
				document.getElementById(idName).innerHTML = currentPlayer;
				break;	
			}
		
		} while(true);
	}else{
		// The Hard Computer
		// Find where there are two O's in a row and move there to win.
		if(board[1] == "" && ((board[2] == "O" && board[3] == "O") || (board[5] == "O" && board[9] == "O") || (board[4] == "O" && board[7] == "O"))) {
			document.getElementById("one").innerHTML = currentPlayer;
			return;
		}
		if(board[2] == "" && ((board[1] == "O" && board[3] == "O") || (board[5] == "O" && board[8] == "O"))) {
			document.getElementById("two").innerHTML = currentPlayer;
			return;
		}
		if(board[3] == "" && ((board[1] == "O" && board[2] == "O") || (board[5] == "O" && board[7] == "O") || (board[6] == "O" && board[9] == "O"))) {
			document.getElementById("three").innerHTML = currentPlayer;
			return;
		}
		if(board[4] == "" && ((board[1] == "O" && board[7] == "O") || (board[5] == "O" && board[6] == "O"))) {
			document.getElementById("four").innerHTML = currentPlayer;
			return;
		}
		if(board[5] == "" && ((board[1] == "O" && board[9] == "O") || (board[2] == "O" && board[8] == "O") || (board[3] == "O" && board[7] == "O") || (board[4] == "O" && board[6] == "O"))) {
			document.getElementById("five").innerHTML = currentPlayer;
			return;
		}
		if(board[6] == "" && ((board[3] == "O" && board[9] == "O") || (board[4] == "O" && board[5] == "O"))) {
			document.getElementById("six").innerHTML = currentPlayer;
			return;
		}
		if(board[7] == "" && ((board[1] == "O" && board[4] == "O") || (board[3] == "O" && board[5] == "O") || (board[8] == "O" && board[9] == "O"))) {
			document.getElementById("seven").innerHTML = currentPlayer;
			return;
		}
		if(board[8] == "" && ((board[2] == "O" && board[5] == "O") || (board[7] == "O" && board[9] == "O"))) {
			document.getElementById("eight").innerHTML = currentPlayer;
			return;
		}
		if(board[9] == "" && ((board[3] == "O" && board[6] == "O") || (board[1] == "O" && board[5] == "O") || (board[7] == "O" && board[8] == "O"))) {
			document.getElementById("nine").innerHTML = currentPlayer;
			return;
		}
		
		// Find where there are two X's in a row and move there to not lose.
		if(board[1] == "" && ((board[2] == "X" && board[3] == "X") || (board[5] == "X" && board[9] == "X") || (board[4] == "X" && board[7] == "X"))) {
			document.getElementById("one").innerHTML = currentPlayer;
			return;
		}
		if(board[2] == "" && ((board[1] == "X" && board[3] == "X") || (board[5] == "X" && board[8] == "X"))) {
			document.getElementById("two").innerHTML = currentPlayer;
			return;
		}
		if(board[3] == "" && ((board[1] == "X" && board[2] == "X") || (board[5] == "X" && board[7] == "X") || (board[6] == "X" && board[9] == "X"))) {
			document.getElementById("three").innerHTML = currentPlayer;
			return;
		}
		if(board[4] == "" && ((board[1] == "X" && board[7] == "X") || (board[5] == "X" && board[6] == "X"))) {
			document.getElementById("four").innerHTML = currentPlayer;
			return;
		}
		if(board[5] == "" && ((board[1] == "X" && board[9] == "X") || (board[2] == "X" && board[8] == "X") || (board[3] == "X" && board[7] == "X") || (board[4] == "X" && board[6] == "O"))) {
			document.getElementById("five").innerHTML = currentPlayer;
			return;
		}
		if(board[6] == "" && ((board[3] == "X" && board[9] == "X") || (board[4] == "X" && board[5] == "X"))) {
			document.getElementById("six").innerHTML = currentPlayer;
			return;
		}
		if(board[7] == "" && ((board[1] == "X" && board[4] == "X") || (board[3] == "X" && board[5] == "X") || (board[8] == "X" && board[9] == "X"))) {
			document.getElementById("seven").innerHTML = currentPlayer;
			return;
		}
		if(board[8] == "" && ((board[2] == "X" && board[5] == "X") || (board[7] == "X" && board[9] == "X"))) {
			document.getElementById("eight").innerHTML = currentPlayer;
			return;
		}
		if(board[9] == "" && ((board[3] == "X" && board[6] == "X") || (board[1] == "X" && board[5] == "X") || (board[7] == "X" && board[8] == "X"))) {
			document.getElementById("nine").innerHTML = currentPlayer;
			return;
		}
		
		// Strategic Moves. Last Priority
		
		// Middle is always the best move, it both allows for the easiest wins as the first player, and consistent draws as the second.
		if(board[5] == "") {
			document.getElementById("five").innerHTML = currentPlayer;
			return;
		}
		
		// If the computer goes first and the player takes an edge move, victory is guaranteed.
		// take a corner piece roughly opposite the "X", then victory is forced.
		if (board[5] == "O" && (board[2] == "X" || board[4] == "X" || board[6] == "X" || board[8] == "X")) {
			let rand = Math.floor(Math.random()*2);
			if (board[2] == "X" && board[7] == "" && board[9] == ""){
				rand == 0 ? document.getElementById("seven").innerHTML = currentPlayer : document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[4] == "X" && board[3] == "" && board[9] == ""){
				rand == 0 ? document.getElementById("three").innerHTML = currentPlayer : document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[6] == "X" && board[1] == "" && board[7] == ""){
				rand == 0 ? document.getElementById("one").innerHTML = currentPlayer : document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (board[8] == "X" && board[1] == "" && board[3] == ""){
				rand == 0 ? document.getElementById("one").innerHTML = currentPlayer : document.getElementById("three").innerHTML = currentPlayer;
				return;
			}
		}
		
		// If the computer goes first and the player takes a corner move, victory is likely.
		// take a corner piece opposite the "X", these will give the computer the best chances.
		if (board[5] == "O" && (board[1] == "X" || board[3] == "X" || board[7] == "X" || board[9] == "X")) {
			if (board[1] == "X" && board[9] == ""){
				document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[3] == "X" && board[7] == ""){
				document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (board[7] == "X" && board[3] == ""){
				document.getElementById("three").innerHTML = currentPlayer;
				return;
			}
			if (board[9] == "X" && board[1] == ""){
				document.getElementById("one").innerHTML = currentPlayer;
				return;
			}
		}
		
		// If after the computer goes first and the player takes a corner move, and the player takes an edge move.
		// take a corner piece opposite the new edge piece, or block, and victory is guaranteed.
		if (board[5] == "O" && (board[1] == "X" || board[3] == "X" || board[7] == "X" || board[9] == "X")) {
			if (board[1] == "X" && board[9] == "O" && board[6] == "X" && board[7] == ""){
				document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (board[1] == "X" && board[9] == "O" && board[8] == "X" && board[3] == ""){
				document.getElementById("three").innerHTML = currentPlayer;
				return;
			}
			if (board[3] == "X" && board[7] == "O" && board[4] == "X" && board[9] == ""){
				document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[3] == "X" && board[7] == "O" && board[8] == "X" && board[1] == ""){
				document.getElementById("one").innerHTML = currentPlayer;
				return;
			}
			if (board[7] == "X" && board[3] == "O" && board[2] == "X" && board[9] == ""){
				document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[7] == "X" && board[3] == "O" && board[6] == "X" && board[1] == ""){
				document.getElementById("one").innerHTML = currentPlayer;
				return;
			}
			if (board[9] == "X" && board[1] == "O" && board[2] == "X" && board[7] == ""){
				document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (board[9] == "X" && board[1] == "O" && board[4] == "X" && board[3] == ""){
				document.getElementById("three").innerHTML = currentPlayer;
				return;
			}
		}
		
		// if the computer goes second, and the player takes the center, the computer should take a corner piece.
		if (board[5] == "X") {
			let rand = Math.floor(Math.random()*4);
			if (rand == 0 && board[1] == ""){
				document.getElementById("one").innerHTML = currentPlayer;
				return;
			}
			if (rand == 1 && board[3] == ""){
				document.getElementById("three").innerHTML = currentPlayer;
				return;
			}
			if (rand == 2 && board[7] == ""){
				document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (rand == 3 && board[9] == ""){
				document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
		}
		
		// take another corner piece the turn after if the player takes the corner piece opposite the computer's latest turn, making a line.
		if (board[5] == "X" && ((board[1] == "O" && board[9] == "X") || (board[3] == "O" && board[7] == "X") || (board[7] == "O" && board[3] == "X") || (board[9] == "O" && board[1] == "X"))) {
			let rand = Math.floor(Math.random()*2);
			if (board[1] == "X" && board[3] == "" && board[7] == ""){
				rand == 0 ? document.getElementById("three").innerHTML = currentPlayer : document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
			if (board[3] == "X" && board[1] == "" && board[9] == ""){
				rand == 0 ? document.getElementById("one").innerHTML = currentPlayer : document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[7] == "X" && board[1] == "" && board[9] == ""){
				rand == 0 ? document.getElementById("one").innerHTML = currentPlayer : document.getElementById("nine").innerHTML = currentPlayer;
				return;
			}
			if (board[9] == "X" && board[3] == "" && board[7] == ""){
				rand == 0 ? document.getElementById("three").innerHTML = currentPlayer : document.getElementById("seven").innerHTML = currentPlayer;
				return;
			}
		}
		
		// If all else fails... random input
		do{
			let rand = Math.floor(Math.random()*9);
			idName = idNames[rand];
			
			if(document.getElementById(idName).innerHTML == "") {
				document.getElementById(idName).innerHTML = currentPlayer;
				break;	
			}
		} while(true);
	}
}// computerTakeTurn


// unhides the controls window to prevent the player
// from inputting another character by clicking too fast
function stopInput(){
	changeVisibility("controls");
	setTimeout(function(){changeVisibility("controls");},333);
} // stopInput

// allows the player to choose whether to start as O's or X's
function changeDefaultLetter(){
	defaultPlayer = defaultPlayer == "X" ? "O" : "X";
	document.getElementById("letterSwitcher").innerHTML = document.getElementById("letterSwitcher").innerHTML == "X/O" ? "O/X" : "X/O";
	resetGame();
} // changeDefaultLetter

// toggles the player count between 1 and 2
function changePlayerCount(){
	playerCount = playerCount == 1 ? 2 : 1;
	document.getElementById("playerSwitcher").innerHTML = document.getElementById("playerSwitcher").innerHTML == "1P" ? "2P" : "1P";
	changeVisibility("difficultyDiv");
	resetGame();
} // changePlayerCount

// toggles the computer difficulty between Easy and Hard
function changeDifficulty(){
	computerDifficulty = computerDifficulty == "Easy" ? "Hard" : "Easy";
	document.getElementById("difficulty").innerHTML = computerDifficulty;
	resetGame();
} // changeDifficulty

// Resets the variables of the game and leaves time for a computer player to go first
function resetGame(){
	// reset variables
	numTurns = 0;
	gameStatus = "";
	currentPlayer = defaultPlayer;

	for (var i = 0; i < idNames.length; i++){
		document.getElementById(idNames[i]).innerHTML = "";
	}

	// computer goes first if O goes first and 1P game
	if (defaultPlayer == "O" && playerCount == 1) {
		stopInput();
		setTimeout(function(){
			computerTakeTurn();
			checkGameStatus();
		}, 333);
	}
} // resetGame