let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
let r = 20;
let x = 25;
let y = 150;
let vx = 1;

let ball = document.getElementById("ball");
ball.style.display = "block";
let offset = 10;

/** Methods one for animation elements: setInterval */

setInterval(() => {
    ball.style.left = offset + "px";
    offset += 1;
}, 10);
// ----
setInterval(() => {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight); // for remove prev

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.strokeStyle = "#3498db";
    c.stroke();
    x += vx;
}, 10);

/** Methods two for animation elements: setInterval */

// function animate() {
//     ball.style.left = offset + "px";
//     offset += 1;
//     requestAnimationFrame(animate);
// }
// animate();
// //-----
// function animate() {
//     c.clearRect(0,0,window.innerWidth,window.innerHeight) // for remove prev

//     c.beginPath();
//     c.arc(x, y, r, 0, Math.PI * 2);
//     c.strokeStyle = "#3498db";
//     c.stroke();
//     x += vx;
//     requestAnimationFrame(animate);
// }
// animate();
