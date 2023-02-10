/*
 * default Parameter
 */
function interest(principal, rate = 3.5, months) {
    months = months || 12;
    return ((principal * rate) / 100) * months;
}
// console.log(interest(1000000,undefined,5));
console.log(interest(1000000));
