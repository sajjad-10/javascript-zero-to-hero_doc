const numbers = [1, 2, 3];

/*
 * White for loop
 */

for (let number of numbers) console.log("for Loop : ", number);

/*
 * White forEach
 */

numbers.forEach((num, i) => console.log("forEach : ", num, i));