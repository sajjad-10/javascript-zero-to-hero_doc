// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

/**
 * convert func top to class
 */
class Circle {
    constructor(radius) {
        this.radius = radius;
        // this func( method ) in  object
        this.move = function () {
            console.log("move");
        };
    }
    // this func( method ) in  _proto_
    draw() {
        console.log("draw");
    }
}

const c = new Circle(2);
console.log(c);
console.log("Class typeof: ",typeof Circle);
