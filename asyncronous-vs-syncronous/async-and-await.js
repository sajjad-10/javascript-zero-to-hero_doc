/*
    Test - 1
*/
function ball1() {
    if (true) {
        return "Test-1 : the ball one reached the end of the hill";
    } else {
        throw new Error("the ball one failed");
    }
}
function ball2() {
    if (false) {
        return "Test-1 : the ball two reached the end of the hill";
    } else {
        throw new Error("the ball two failed");
    }
}
function ball3() {
    if (true) {
        return "Test-1 : the ball three reached the end of the hill";
    } else {
        throw new Error("the ball three failed");
    }
}

// ball1()                     // async can use this white out Awaite -> because it's look like promise
//     .then((msg) => {
//         console.log(msg);
//         return ball2();
//     })
//     .then((msg) => {
//         console.log(msg);
//         return ball3();
//     })
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function execute() {
    try {
        console.log(await ball1());
        console.log(await ball2());
        console.log(await ball3());
    } catch (error) {
        console.log(error);
    }
}

execute();
