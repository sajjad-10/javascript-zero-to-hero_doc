class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log("move");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    draw() {
        console.log("draw");
    }
}
const c = new Circle();

console.log(c);
console.log(c.move());

/* * constructor in child */
const ca = new Circle('red', 3);
console.log(ca);