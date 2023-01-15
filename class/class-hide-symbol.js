const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    [_draw](){

    }
}
const c = new Circle(2);
console.log(c);