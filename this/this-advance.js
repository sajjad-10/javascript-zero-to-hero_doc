/*
 * The second solution for use this in methods
 * for : all method's can not get (this) in scend parameter
 *      1- use variables
 *      2- call - apply - bind
 *      3- use arrow function
 */
const video3 = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag); // this is show object
        }, this); // all method's can not get (this) in scend parameter
    },
};
// video3.showTags();

// start---- example one to use  : call - apply - bind
function playVideo() {
    console.log(this);
}
// playVideo() // get global object window
playVideo.call({ name: "sajjad" }); // send our object this white spastic object
playVideo.apply({ name: "sajjad" }); // send our object this white spastic object
const nFn = playVideo.bind({ name: "sajjad" }); // send our object this white spastic object
nFn();
// end---- example one to use  : call - apply - bind

// start use arrow function
const video4 = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag); // this is show object
        });
    },
};
video4.showTags();
// end use arrow function
