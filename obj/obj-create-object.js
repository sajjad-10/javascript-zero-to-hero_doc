/*
 * create OBJ. object literal
 */

let circle = {
    radius: 1,
    draw: function () {
        console.log("draw");
    },
};

// circle.draw();

/*
 * create OBJ. Factory function
 * name = camelNotation
 */
function createCircle(radius) {
    return {
        radius: radius, // or just radius ES6
        draw() {
            console.log("draw");
        },
    };
}
let circle1 = createCircle(1);
console.log(circle1);

let circle2 = createCircle(2);
console.log(circle2);

/*
 * create OBJ. Constructor function
 * name = PascalNotation
 */
function CreateCircle(radius) {
    this.radius = radius; // or just radius ES6
    this.draw = function () {
        console.log("draw");
    };
    // return this
}
const circle3 = new CreateCircle(3);
console.log(circle3);
