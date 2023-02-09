const numbers = [2, 3, 1, 0, -1, 12];
const users = [
    {name:'test1', age: 12},
    {name:'test2', age: 18},
    {name:'test3', age: 20},
    {name:'test4', age: 22},
];

/*
 * every : all element mach = true
 */

const allPositive = numbers.every((value) => {
    return value >= 0;
});
console.log("allPositive: ", allPositive); // boolean


/*
 * some : fine to firs element mach = true
 */

const atLeastOnePositive = numbers.some((value) => {
    return value >= 0;
});
console.log("atLeastOnePositive: ", atLeastOnePositive); // boolean


/*
 * filter : new array for mach element
 */

const filtered = numbers.filter((value) => {
    return value >= 0;
});
console.log("filtered: ", filtered); // New array


const result = users.filter((user) => {
    return user.age >= 18;
});
console.log("filter -object: ", result); // New array