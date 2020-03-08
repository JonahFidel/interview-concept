

let box1 = document.getElementById("box1")

let button = document.getElementById('button');
button.onclick = function() {
	let newBox = document.createElement('div');

	newBox.style.height = '100px';
	newBox.style.width = '100px';
	newBox.style.border = '2 px solid black';
	newBox.style.backgroundColor = 'green'
	newBox.style.display = 'flex';

	document.body.appendChild(newBox);
}
