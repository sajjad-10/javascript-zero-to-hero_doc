/* * event Key : object event type MouseEvent + Method  */
const source = document.querySelector("#main-title");
const target = document.querySelector("header");

source.addEventListener("dragstart", (e) => {
    // console.log("dragstart");
    e.dataTransfer.clearData();

    e.dataTransfer.setData("myh", e.target.id);
    e.target.style.color = "red";
});

target.addEventListener("dragover", (e) => {
    // console.log("dragover");
    e.preventDefault();
});

target.addEventListener("drop", (e) => {
    // console.log("drop");
    e.preventDefault();
    const data = e.dataTransfer.getData("myh");
    const source = document.getElementById(data);
    e.target.appendChild(source);
    source.style.color = "blue";
});

document.querySelector("#main-title").addEventListener("dragend", (e) => {
    // console.log("dragend");
});