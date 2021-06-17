//get the global variables 
const gameHolder = document.getElementById('tic-tac-holder');
const allRows = document.querySelectorAll('tr');
const allTds = document.querySelectorAll('td');
let counter = 0;


//load game UI function
window.addEventListener('load', loadGame);

//game functions
gameHolder.addEventListener("click", letsGame);



//Function List
function calcX(rowId){
	//row1
	let rowOne = document.getElementById('r1');
	
}
function loadGame() {
	gameHolder.style.display = 'block';
}

function letsGame(e){
	counter++;
	let tar = e.target;
	let tarId = e.target.id;
	switch(counter){
		case 1:
			//x
			tar.classList.add('myExes');
			tar.innerHTML = '<h1>X</h1>';
			break;
		case 2:
			//0
			tar.innerHTML = '<h1>O</h1>';
			break;
		case 3:
			//x
			tar.classList.add('myExes');
			tar.innerHTML = '<h1>X</h1>';
			break;
		case 4:
			//o
			tar.innerHTML = '<h1>O</h1>';
			break;
		case 5:
			//x
			tar.classList.add('myExes');
			tar.innerHTML = '<h1>X</h1>';
			break;
		case 6:
			//o
			tar.innerHTML = '<h1>O</h1>';
			break;
		case 7:
			//x
			tar.classList.add('myExes');
			tar.innerHTML = '<h1>X</h1>';
			break;
		case 8:
			//o
			tar.innerHTML = '<h1>O</h1>';
			break;
		case 9:
			//x
			tar.classList.add('myExes');
			tar.innerHTML = '<h1>X</h1>';
			break;
		default:
			//stop listening to clicks
			gameHolder.removeEventListener("click", letsGame);
	}
	console.log(tar);
	console.log(counter);
}