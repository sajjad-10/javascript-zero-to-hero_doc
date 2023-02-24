/*
 * create Circle white varibles.
 */
let radius = 1;
let x = 1;
let y = 1;

/*
 * create Circle white OBJ.
 */

let circle = {
    radius: 1,
    locations: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function () {
        console.log("draw");
    },
};

circle.draw();
