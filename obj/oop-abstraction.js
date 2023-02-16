/*
 * Using the concept of abstraction to hide details
 * learn : Closure
 */
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {
        x: 0,
        y: 0,
    }; /* * this is hidden property && Closure */
    let computeOptimumLocation = function () {
        //sooting ...
    }; /* * this is hidden method && Closure */

    this.draw = function () {
        computeOptimumLocation();
        console.log("draw");
    };
}
const circle = new Circle(10);
circle.draw();
// console.log(circle.computeOptimumLocation()); /* * log Error */
