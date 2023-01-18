/* * event orientationchange : metope and property (object base) */

window.addEventListener("orientationchange", () => {
    console.log(window.screen.orientation.type);
    if (window.screen.orientation.type == 'landscape-primary') {
        document.body.style.background = 'green'
    }else{
        document.body.style.background = 'yellow'

    }
});
