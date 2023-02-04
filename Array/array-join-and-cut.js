const first = [1, 2, 3];
// const first = [{ id: 1 }]; // for test reference model
const second = [4, 5, 6];
/*
 * Join tow array : concat
 * new array
 */
const combined = first.concat(second);
// first[0].id = 10; // for test reference model
// console.log(first);
console.log("concat", combined);

/*
 * Join tow array : Spread
 * new array
 */
const combinedSpread = ["a", ...first, "b", ...second, "c"];
console.log("Spread", combinedSpread);

/*
 * cut array
 * new array
 */
const splice = combined.slice(2, 4);
console.log("slice", splice);
