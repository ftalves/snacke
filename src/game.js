var canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;

document.getElementById("snacke").appendChild(canvas);

var world = new World(canvas);
window.setInterval(world.draw.bind(world), 160);
