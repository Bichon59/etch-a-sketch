const container = document.querySelector('#container');

function createGrid(container, xSize, ySize, boxSize) {
	if (xSize%boxSize !== 0 || ySize%boxSize !== 0) {
		xSize = Math.floor(xSize);
		ySize = Math.floor(ySize);
	}

	container.style.cssText = 'grid-template : repeat(' + ySize/boxSize + ', ' + boxSize + 'px) / repeat(' + xSize/boxSize + ', ' + boxSize + 'px)';

	for(let i = 0; i < xSize/boxSize; i++) {
		for(let j = 0; j < ySize/boxSize; j++) {
			const div = document.createElement('div');
			div.classList.add('box');
			container.appendChild(div);
		}
	}

	return container;
}

function color(e) {
	e.target.style.backgroundColor = 'red';
}


function clearGrid(e) {
	console.log(e);
	choice = prompt("How many elements per sides ?");

	if (isNaN(choice)) choice = 50;

	createGrid(container, 800, 800, 800/choice);
}

createGrid(container, 800, 800, 16);

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', color));


const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);