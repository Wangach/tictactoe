//get the global variables 
const gameHolder = document.getElementById('tic-tac-holder');
const allRows = document.querySelectorAll('tr');
const allTds = document.querySelectorAll('td');


//load game UI function
window.addEventListener('load', loadGame);

//game functions
gameHolder.addEventListener("click", showSth);



//Function List
function loadGame() {
	gameHolder.style.display = 'block';
}

function showSth(e){
	console.log(e);
}