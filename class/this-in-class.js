/*
 * Test: 1
 * ES5
 */
const Circle = function () {
    this.draw = function () {
        console.log(this);
    };
};
const c = new Circle();

/*
 * Methods Call
 * this is reference type
 */
console.log("Test: 1 -", "Methods Call");
c.draw();

/*
 * Function Call
 * this is reference type
 * test a : const draw = c.draw;
    * output : global object OR window /// and if in "use strict" mode : undefined
 * test b :    

 */
// Test A :
console.log("Test: 1 -", "Test A :");
const draw = c.draw;
console.log("this is reference type", draw);

draw(); // output : global object OR window /// and if in "use strict" mode : undefined

// Test B :
console.log("Test: 1 -", "Test B :");
const drawB = c.draw.bind(c);
drawB();

/*
 * Test: 2
 * ES6
 * in class body white es6 "use strict" is on
 */
console.log("Test: 2 - in ES6");

class CircleD {
    draw() {
        console.log(this);
    }
}
const cD = new Circle();
const drawD = c.draw.bind(c);
drawD();
