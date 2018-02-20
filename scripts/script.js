const CONTAINER_WIDTH = 650;
const CONTAINER_HEIGHT = 650;
const BOX_SIZE = 16;

let buttonTag = 'black';
let pickedColor = '';


function randomInteger(min, max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
}

function createGrid(xSize, ySize, boxSize) {
	const container = document.querySelector('#container');

	if (xSize%boxSize !== 0 || ySize%boxSize !== 0) {
		xSize = Math.floor(xSize);
		ySize = Math.floor(ySize);
	}

	container.style.cssText = 'grid-template : repeat(' + Math.floor(ySize/boxSize) + ', ' + boxSize + 'px) / repeat(' + Math.floor(xSize/boxSize) + ', ' + boxSize + 'px); width: ' + xSize + 'px; margin: 0 auto';

	createBoxes(container, xSize, ySize, boxSize);
	return container;
}


function clearGrid(e) { 
	choice = prompt("How many elements per sides ?");
	while(isNaN(choice) || choice == '') {
		choice = prompt("How many elements per sides ?");
	}

	if(choice == null) {
		return;
	}

	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}

	createGrid(CONTAINER_WIDTH, CONTAINER_HEIGHT, CONTAINER_WIDTH/choice);
	createBoxes(CONTAINER_WIDTH, CONTAINER_HEIGHT, CONTAINER_WIDTH/choice);
}

function createBoxes(container, xSize, ySize, boxSize) {
	for(let i = 0; i < xSize/boxSize; i++) {
		for(let j = 0; j < ySize/boxSize; j++) {
			const div = document.createElement('div');
			div.classList.add('box');
			container.appendChild(div);
		}
	}

	const boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.addEventListener('mouseover', color));
	
	return boxes;
}

function getRandomColor() {
	let letters = '0123456789abcdef';
	let ret = '#';

	for(i = 0; i < 6; i++) {
		ret += letters[randomInteger(0, letters.length-1)];
	}

	return ret
}

function color(e) {
	switch(buttonTag) {
		case 'black' :
			e.target.style.backgroundColor = '#000000';
			break;

		case 'random' :
			e.target.style.backgroundColor = getRandomColor();
			break;

		case 'pick' :
			e.target.style.backgroundColor = pickedColor;
			break;

		case 'eraser' :
			e.target.style.backgroundColor = 'white'
			break;

		default :
			e.target.style.backgroundColor = 'red';
	}
}

createGrid(CONTAINER_WIDTH, CONTAINER_HEIGHT, BOX_SIZE);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);


const normal = document.querySelector('#normal');
normal.addEventListener('click', function(e) {
	buttonTag = 'black';
	console.log('cc');
});

const random = document.querySelector('#random');
random.addEventListener('click', function(e) {
	buttonTag = 'random';
});

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', function(e) {
	buttonTag = 'eraser';
});

const pick = document.querySelector('#pick');
pick.addEventListener('change', function(e) {
	buttonTag = 'pick';
	pickedColor = e.target.value;
});