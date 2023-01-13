const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log("circle with radius : " + _radius.get(this));
    }
}

module.exports = Circle;

/*
 * for more item
 * test : 1
 */
// module.exports.Circle = Circle;
// module.exports.Square = Square;

// output :  { Circle : Circle , Square : Square}

/*
 * for more item
 * test : 2
 */
// module.exports = { Circle: Circle, Square: Square };

// output :  { Circle : Circle , Square : Square}
