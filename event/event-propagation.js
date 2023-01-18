/* * Event Bubbling  */

// document.querySelector("ul").addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "yellow";
//     console.log("ul");
// });

// document.querySelector("ul li").addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "red";
//     console.log("- li");
// });

// document
//     .querySelector("ul li span")
//     .addEventListener("click", function (event) {
//         event.target.style.color = "green";
//         console.log("- - span");
//     });

/* * Event Capturing
 *--------------------------------------------------------------------------------------------
 */

// document.querySelector("ul").addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "yellow";
//     console.log("ul");
// });

// document.querySelector("ul li").addEventListener(
//     "click",
//     function (event) {
//         event.target.style.backgroundColor = "red";
//         console.log("- li");
//     },
//     { capture: true }
// );

// document
//     .querySelector("ul li span")
//     .addEventListener("click", function (event) {
//         event.target.style.color = "green";
//         console.log("- - span");
//     });

/* * Event
 *--------------------------------------------------------------------------------------------
 */

document.querySelector("ul").addEventListener(
    "click",
    function (event) {
        event.target.style.backgroundColor = "yellow";
        console.log("ul");
    },
    { once: true }
);

document.querySelector("ul li").addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
        event.target.style.backgroundColor = "red";
        console.log("- li");
    },
    { once: true }
);

document.querySelector("ul li span").addEventListener(
    "click",
    function (event) {
        event.target.style.color = "green";
        console.log("- - span");
    },
    { once: true }
);
