/*
 * Function Declaration
 * Can use the function before you declared it
 */
// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

/*
 * Function Declaration
 * Can not use the function before you declared it
 */

// sayGoodbye();
// const sayGoodbye = function () {
//     console.log("Goodby");
// };

/*
 * Function Declaration
 * Can not use the Class before you declared it
 */
const c = new Circle();
class Circle {}

/*
 * Function Declaration
 * Can not use the Class before you declared it
 */

const s = new Square();
const Square = class {};
