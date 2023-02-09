const numbers = [1, -1, 2, 3, 5];

/*
 * white Loop
 */

let sum = 0;
for (const iterator of numbers) {
    sum += iterator;
}
console.log(sum);

/*
 * white reduce
 */
let sumReduce = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // if don't add 0 default start index 1
console.log(sumReduce); // 0+1 / 1+(-1) / 0+2 / 2+3 / 5+5
