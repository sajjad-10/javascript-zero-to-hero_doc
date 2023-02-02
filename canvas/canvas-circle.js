let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.beginPath();
c.arc(100, 100, 50, 0, Math.PI * 2);
c.strokeStyle = "#3498db";
c.stroke();

c.beginPath();
c.arc(250, 100, 50, Math.PI / 2, Math.PI * 2);
c.strokeStyle = "#3498db";
c.stroke();

c.beginPath();
c.arc(400, 100, 50, Math.PI, Math.PI * 2);
c.strokeStyle = "#3498db";
c.stroke();

c.beginPath();
c.arc(550, 100, 50, Math.PI * 1.5, Math.PI * 2);
c.strokeStyle = "#3498db";
c.stroke();

for (let index = 0; index < 100; index++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 20, 0, Math.PI * 2);
    c.strokeStyle = "red";
    c.stroke();
}
