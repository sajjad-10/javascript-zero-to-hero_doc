/* * event custom :  */
let myEvent = new CustomEvent("nameEvent", { detail: Date.now() });

document.querySelector("main").addEventListener("nameEvent", (e) => {
    e.target.style.background = "green";
});

window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= 3) {
        document.querySelector("main").dispatchEvent(myEvent);
    }
});