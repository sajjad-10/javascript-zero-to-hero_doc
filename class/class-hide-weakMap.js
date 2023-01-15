const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log("move", this);
        });
    }
    draw() {
        _move.get(this)();
        console.log("draw");
    }
    /* * getter for hidden objects */
    get radius() {
        return _radius.get(this);
    }

    /* * setter for hidden objects */
    set radius(value) {
        if (value <= 0) throw new Error("invalid radius");
        _radius.set(this, value);
    }
}
const c = new Circle(2);
console.log(c.draw());

/* * Work withe getter for hidden objects  */
console.log("Work withe --getter--",c.radius);


/* * Work withe setter for hidden objects  */
c.radius = 6
console.log("Work withe --setter--",c.radius);