/* * object event */

document.addEventListener("click", function (event) {
    document.body.style.background = "green";
    console.log(event);
});
document.querySelector("ul").addEventListener("click", function (event) {
    event.target.style.background = "red";
    console.log("Event property --base object (parent)--");
    console.group();
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.timeStamp);
    event.preventDefault()
    console.groupEnd();
});
