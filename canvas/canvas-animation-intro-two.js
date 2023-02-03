let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
let r = 20;
let x = randomIntFromInterval(0 + r, window.innerWidth - r);
let y = randomIntFromInterval(0 + r, window.innerHeight - r);
let vx = Math.random() - 0.5; // -0.5   +0.5
let vy = Math.random() - 0.5 * 10; // for speed up to 10

/** Methods two for animation elements: setInterval */

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight); // for remove prev

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.fillStyle = "#3498db";
    c.fill();

    if (x + r > window.innerWidth || x - r < 0) {
        vx = -vx;
    }

    if (y + r > window.innerHeight || y - r < 0) {
        vy = -vy;
    }

    x += vx;
    y += vy;
    requestAnimationFrame(animate);
}
animate();

/* * random number */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
