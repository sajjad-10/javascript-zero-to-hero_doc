/* * event Muse : object event type MouseEvent + Method  */

document.querySelector("#to-do-list").addEventListener("click", (e) => {
    console.log("Event click :");
    console.group();
    console.log(e);
    console.groupEnd();

    console.log("Event click : --property--");
    console.group();
    console.log("altKey", e.altKey);
    console.log("ctrKey", e.ctrKey);
    console.log("shiftKey", e.shiftKey);
    console.log("shiftKey", e.shiftKey);

    console.log("button", e.button); /* * withe mouse key pres */

    console.log("clientY", e.clientX); /* * left screen to muse */
    console.log("clientY", e.clientY); /* * Top screen to muse */

    console.log("clientY", e.offsetX); /* * left element to muse */
    console.log("clientY", e.offsetY); /* * Top element to muse */

    console.log("clientY", e.path); /* * List on node */
    console.groupEnd();
}); /* * Left click */

document.querySelector("#to-do-list").addEventListener("contextmenu", (e) => {
    e.preventDefault(); /* * don't open list D: */
    // console.log("Event R - click :");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Right click */

document.querySelector("#to-do-list").addEventListener("dblclick", (e) => {
    // console.log("Event Double - click :");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Double click */

document.querySelector("#to-do-list").addEventListener("mousedown", (e) => {
    // console.log("Event Mouse Click down:");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Event Mouse Click down */

document.querySelector("#to-do-list").addEventListener("mouseup", (e) => {
    // console.log("Event Mouse Click up:");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Event Mouse Click up */

document.querySelector("#to-do-list").addEventListener("mouseenter", (e) => {
    // console.log("Event Mouse in Element:");
    // console.group();
    // console.log("mouseenter", e);
    // console.groupEnd();
}); /* * Event Mouse in Element */

document.querySelector("#to-do-list").addEventListener("mouseleave", (e) => {
    // console.log("Event Mouse live Element:");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Event Mouse live Element */

document.querySelector("#to-do-list").addEventListener("mousemove", (e) => {
    // console.log("Event Mouse Move in Element:");
    // console.group();
    // console.log(e);
    // console.groupEnd();
}); /* * Event Mouse Move in Element: */

document.querySelector("#to-do-list").addEventListener("mouseover", (e) => {
    // console.log("Event Mouse mouseover in Element:");
    // console.group();
    // console.log("mouseover", e);
    // console.groupEnd();
}); /* * Event Mouse Move in Element: like mouseenter but work on each child */
