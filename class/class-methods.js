class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    /* * Instance Methods */
    draw() {
        console.log("draw");
    }

    /* * Static Methods */
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

/* * use : Static */
const circle = Circle.parse('{"radius":5}');
console.log("Static", circle);
