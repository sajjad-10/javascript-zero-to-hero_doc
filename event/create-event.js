/* * white attribute event */
{
    /* <button onclick="handelRemove()">Remove Footer</button> */
}
function handelRemove() {
    console.log("work");
    const element = document.querySelector("footer");
    console.log(element);
    element.remove();
}
/* * white EventListener */

const btn = document.getElementById("handelBg");
btn.addEventListener("click", function () {
    const element = document.querySelector("footer");
    element.style.background = "green";
});
