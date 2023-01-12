/*
    Test - 1
*/

// function ball1(ball2) {
//     setTimeout(() => {
//         try {
//             if (true) {
//                 console.log(
//                     "Test-1 : the ball one reached the end of the hill"
//                 );
//                 ball2(ball3);
//             } else {
//                 throw new Error("the ball one failed");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }, 2000);
// }
// function ball2(ball3) {
//     setTimeout(() => {
//         try {
//             if (false) {
//                 console.log(
//                     "Test-1 : the ball two reached the end of the hill"
//                 );
//                 ball3();
//             } else {
//                 throw new Error("the ball two failed");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }, 1000);
// }
// function ball3() {
//     setTimeout(() => {
//         console.log("Test-1 : the ball three reached the end of the hill");
//     }, 3000);
// }
// ball1(ball2);

/*
    Test - 2
*/

function ball1(callback) {
    setTimeout(() => {
        callback(true);
    }, 2000);
}
function ball2(callback) {
    setTimeout(() => {
        callback(false);
    }, 1000);
}
function ball3() {
    setTimeout(() => {
        console.log("Test-2 : the ball three reached the end of the hill");
    }, 3000);
}
ball1((res) => {
    try {
        if (res) {
            console.log("Test-2 : the ball one reached the end of the hill");
            ball2((res) => {
                try {
                    if (res) {
                        console.log(
                            "Test-2 : the ball two reached the end of the hill"
                        );
                        ball3();
                    } else {
                        throw new Error("the ball two failed");
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        } else {
            throw new Error("the ball one failed");
        }
    } catch (error) {
        console.log(error);
    }
});
