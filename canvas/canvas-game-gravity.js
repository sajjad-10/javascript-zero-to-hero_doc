let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

this.screen = {
    width: window.innerWidth,
    height: window.innerHeight,
};
this.mouse = {
    x: screen.width / 2,
    y: screen.height / 2,
};

class Ball {
    constructor(x, y, dx, dy, r, color) {
        this.gravity = 1;
        this.friction = 0.8;
        this.r = r || 20;
        this.x = x || randomIntFromInterval(0 + this.r, window.innerWidth - this.r);
        this.y = y || randomIntFromInterval(0 + this.r, window.innerHeight - this.r);
        this.dx = dx || (Math.random() - 0.5) * 20; // -0.5   +0.5
        this.dy = dy || (Math.random()) * 4; // for speed up to 10
        this.color = color || `rgba(231, 76, 60,${Math.random()})`
        this.draw();
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = "#3498db";
        c.fill();
    }
    update() {
        if (this.y + this.r + this.dy >= screen.height) {
            this.dy = -this.dy * this.friction;
            this.dx = -this.dx * this.friction;
        } else {
            this.dy += this.gravity;
        }
        if (this.x + this.r + this.dx >= screen.width||this.x + this.r + this.dx <= 0 ) {
            this.dx = -this.dx;
        } 
        this.y += this.dy;
        this.x += this.dx;
        this.draw();
    }
}
class Canvas {
    constructor() {
        this.balls = []; // for to meny item
        for (let index = 0; index < 30; index++) {
            this.balls.push(new Ball());
        }
    }
    
    animate() {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight); // for remove prev
        this.balls.forEach((ball) => {
            ball.update();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}
let mycan = new Canvas();
mycan.animate();

window.addEventListener("mousemove", (e) => {
    // balls.forEach((ball) => {
    //     let distance = Math.sqrt(
    //         Math.pow(e.clientX - ball.x, 2) + Math.pow(e.clientY - ball.y, 2)
    //     ); // Obtaining distance in two-dimensional space
    //     if (distance < 100 && ball.r < ball.baseR * 4) {
    //         ball.r += 2;
    //     } else if (ball.r > ball.baseR) {
    //         ball.r -= 2;
    //     }
    // });
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* * random number */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
