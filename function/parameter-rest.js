/*
 * Rest Parameter
 */
function sum(discount, ...args) {
    const total = args.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.5, 1, 2, 3, 4, 5, 6, 30));
