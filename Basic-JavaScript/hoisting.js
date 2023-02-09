walk()
// run() // get error
/*
 * Function Declaration
 * can call before: because engin get function to up and after them cal it == hoisting
 */
function walk(){
    console.log("walk");
}


/*
 * Function Expression
 */
let run = function(){
    console.log("run");
}
let move = run //this is reference