class Shape {
    move() {
        console.log("parent", "move");
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log("child", "circle move");
    }
}
const c = new Circle();

console.log(c.move());
