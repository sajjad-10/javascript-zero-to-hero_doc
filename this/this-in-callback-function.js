/*
 * in callback fun
 */

const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag); // this is show object Window
        });
    },
};
// video.showTags();

const video2 = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag); // this is show object
        }, this); // all method's can not get (this) in scend parameter
    },
};
// video2.showTags();