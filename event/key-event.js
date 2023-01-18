/* * event Muse : object event type MouseEvent + Method  */

document.querySelector("#myform input[type=text]").addEventListener("keydown", (e) => {
    console.log("Key click :");
    console.group();
    console.log(e);
    console.groupEnd();
}); /* * Left click */