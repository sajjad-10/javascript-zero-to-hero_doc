function sum(a, b) {
    return a + b;
}
console.log("add all -arg:", sum(1, 2)); // 3
console.log("add one -arg:", sum(1)); // 1 + undefined = NaN
console.log("add to mane -arg:", sum(1, 2, 3, 4, 5)); // 3 just use 1 and 2

function sum2() {
    console.log(arguments);
    let total = 0;
    for (const iterator of arguments) {
        total += iterator;
    }
    return total;
}
console.log("use all -arg:", sum2(1, 2, 3, 4, 5)); // use all arg
