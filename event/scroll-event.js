/* * event orientationchange : metope and property (object base) */
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("footer").style.height = "800px";
});

window.addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop);
});
