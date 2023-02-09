const numbers = [1, 2, 3];
const message = 'Learn JS Cool'

/*
 * join : convert array to string
 */

const joined = numbers.join("");
console.log("joined: ",joined, typeof joined);


/*
 * split : string to convert array
 */

const parts = message.split(' ')
console.log("parts: ",parts, typeof parts);

const combine = parts.join('-')
console.log("combine: ",combine);
