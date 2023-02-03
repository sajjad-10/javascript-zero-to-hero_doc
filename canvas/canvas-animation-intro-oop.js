let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

class Ball {
    constructor() {
        this.r = 20;
        this.x = randomIntFromInterval(0 + this.r, window.innerWidth - this.r);
        this.y = randomIntFromInterval(0 + this.r, window.innerHeight - this.r);
        this.vx = Math.random() - 0.5 * 10; // -0.5   +0.5
        this.vy = Math.random() - 0.5 * 10; // for speed up to 10
        this.draw();
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = "#3498db";
        c.fill();
    }
    update() {
        if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}
// let ball = new Ball();// for one
let balls = []; // for to meny item
for (let index = 0; index < 22; index++) {
    balls.push(new Ball());
}

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight); // for remove prev

    balls.forEach((ball) => {
        ball.update();
    });
    requestAnimationFrame(animate);
}
animate();

/* * random number */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
