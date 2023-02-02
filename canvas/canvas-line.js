let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.beginPath();
c.lineTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);

c.fillStyle = "#3498db";
c.fill();

c.beginPath();
c.lineTo(500, 300);
c.lineTo(600, 100);

c.strokeStyle = "#3498db";
c.stroke();

c.beginPath();
c.lineTo(50, 600);
c.lineTo(400, 400);
c.lineTo(800, 600);

c.strokeStyle = "#000";
c.closePath();
c.stroke();
