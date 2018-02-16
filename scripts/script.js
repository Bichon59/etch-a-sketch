const container = document.querySelector('#container');

function createGrid(container, xSize, ySize, boxSize) {
	if (xSize%boxSize !== 0 || ySize%boxSize !== 0) {
		return 'Invalid parameters';
	}

	container.style.cssText = 'grid-template : repeat(' + xSize/boxSize + ', ' + boxSize + 'px) / repeat(' + ySize/boxSize + ', ' + boxSize + 'px)';

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
	console.log(e.target.style.color);
	e.target.style.backgroundColor = 'red';
}

createGrid(container, 800, 800, 16);
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('mouseover', color));