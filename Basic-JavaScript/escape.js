/*
 * Escape
 * Blocks
 */
{
    const message = "sajjad";
}

// console.log(message); // get error

/*
 * Escape
 * Blocks
 * declaration
 */
{
    const message = "sajjad"; // mes 1
}
const message = "sajjad2"; // mes 2

// console.log(message); // get error = mes 1 / mes 2 = sajjad2

/*
 * Global Escape
 * Blocks
 */
const color = "red";
function start() {
    const color = "blue";
    console.log("Local Escape", color);
}
function stop() {
    let age = 18;
    console.log("Global Escape", color);
    if (true) {
        console.log(age); //18
        let age = 22;
        console.log(age); //22
    }
}
start();
stop();
