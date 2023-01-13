const _radius = new WeakMap();
export default class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log("circle with radius : " + _radius.get(this));
    }
}