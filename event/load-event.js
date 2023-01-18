/* * event lode : metope and property (object base) */

window.addEventListener("load", () => {
    console.log(
        "Event: DOM Load"
    ); /* * run just after DOM + CSS + JS + Img load */
    // document.querySelector("footer").remove();
});

window.addEventListener("DOMContentLoaded", () => {
    console.log("Event: DOMContentLoaded"); /* * run just after DOM load */
    // document.querySelector("footer").remove();
});
