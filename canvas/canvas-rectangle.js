let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.translate(500, 500);

c.fillStyle = "#27ae60";
c.fillRect(100, 0, 200, 200);

c.fillStyle = "#3498db";
c.fillRect(300, 100, 200, 200);

c.fillStyle = "#27ae60";
c.fillRect(500, 0, 200, 200);

c.font = "30px verdana";
c.fillText("Hello World", -10, -30);
