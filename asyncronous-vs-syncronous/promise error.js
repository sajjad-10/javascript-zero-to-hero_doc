/*
    Test - 1
*/

function ball1() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Test-1 : the ball one reached the end of the hill");
        } else {
            reject("the ball one failed");
        }
    });
}
function ball2() {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Test-1 : the ball two reached the end of the hill");
        } else {
            reject("the ball two failed");
        }
    });
}
function ball3() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Test-1 : the ball three reached the end of the hill");
        } else {
            reject("the ball three failed");
        }
    });
}
ball1()
    .then((msg) => {
        console.log(msg);
        return ball2();
    })
    .then((msg) => {
        console.log(msg);
        return ball3();
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });
