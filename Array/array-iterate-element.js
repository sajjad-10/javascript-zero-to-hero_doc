const numbers = [1, 2, 3];
const products = ["html", "css", "js"];

/*
 * White for loop
 */

for (let number of numbers) console.log("for Loop : ", number);

/*
 * White forEach
 */

numbers.forEach((num, i) => console.log("forEach : ", num, i));

/*
 * map
 */

const result = numbers.map((num) => {
    return num * 4;
});
console.log("Map result:", result);

const items = products.map((item) => {
    return `<li>${item}</li>`;
});
const html = `<ul>${items.join("")}</ul>`;
console.log("map html:", html);
