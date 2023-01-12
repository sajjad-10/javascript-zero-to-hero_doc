/*
    Test - 1
*/

// function print() {
//     setTimeout(() => {
//         console.log("Test-1 b");
//     }, 1000);
// }
// console.log("a");
// print();
// console.log("c");

// console.clear();

/*
    Test - 2 
    const of time 3 -> all func start to geterr
*/

// function ball1() {
//     setTimeout(() => {
//         console.log("Test-2 : the ball one reached the end of the hill");
//     }, 2000);
// }
// function ball2() {
//     setTimeout(() => {
//         console.log("Test-2 : the ball two reached the end of the hill");
//     }, 1000);
// }
// function ball3() {
//     setTimeout(() => {
//         console.log("Test-2 : the ball three reached the end of the hill");
//     }, 3000);
// }
// ball1();
// ball2();
// ball3();

// console.clear();

/*
    Test - 3
    if ball first down now send next 
    cont of time 6s
*/
function ball1(ball2) {
    setTimeout(() => {
        console.log("Test-3 : the ball one reached the end of the hill");
        ball2(ball3)
    }, 2000);
}
function ball2(ball3) {
    setTimeout(() => {
        console.log("Test-3 : the ball two reached the end of the hill");
        ball3()
    }, 1000);
}
function ball3() {
    setTimeout(() => {
        console.log("Test-3 : the ball three reached the end of the hill");
    }, 3000);
}
ball1(ball2);