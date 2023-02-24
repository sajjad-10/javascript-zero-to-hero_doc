/*
 * add new item
 */

let circle = {
    radius: 1,
};

circle.color = "red";
circle.draw = function () {};
console.log(circle);

/*
 * remove item
 */
let circle1 = {
    radius: 2,
    color: "red",
    draw: function () {
        console.log("draw");
    },
};
delete circle1.radius;
delete circle1.draw;
console.log(circle1);