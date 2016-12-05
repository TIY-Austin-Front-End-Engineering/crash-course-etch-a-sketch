var up = document.querySelector('#right .clockwise');
var down = document.querySelector('#right .counter-clockwise');
var right = document.querySelector('#left .clockwise');
var left = document.querySelector('#left .counter-clockwise');
var x = 6;
var y = 6;

var canvas = document.getElementById('sketch-canvas');
canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#6B808E';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(x,y)


up.addEventListener('click', function() {
	y--;
	ctx.lineTo(x, y);
	ctx.stroke();
})
down.addEventListener('click', function() {
	y++;
	ctx.lineTo(x,y);
	ctx.stroke();
})
right.addEventListener('click', function() {
	x++;
	ctx.lineTo(x,y);
	ctx.stroke();
})
left.addEventListener('click', function() {
	x--;
	ctx.lineTo(x,y);
	ctx.stroke();
})
