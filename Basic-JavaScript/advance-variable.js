/*
 * block scope and function scope
 *   let :   cannot access to variole --function scope
 *   var :   can access to variole --block scope
 */

// function start() {
//     for (let index = 0; index < 5; index++) {
//         console.log("items: ", index);
//     }
//     console.log(index); // get error
// }

function start() {
    for (var index = 0; index < 5; index++) {
        console.log("items: ", index);
    }
    console.log(index);
}

start();

/*
 * block scope and function scope
 *   let :   cannot access to variole --function scope
 *   var :   can access to variole --block scope
 */

var color = "red";
let age = 20;

function sayHi() {
    console.log("hi :)");
}

console.log(window.color); // red
console.log(window.age); // undefine
console.log(window.sayHi); // get function
