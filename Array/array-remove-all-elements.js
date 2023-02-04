let numbers = [2, 3, 4, 5, 6];

/*
 * 1- use variable
 *  If any other variable refers to this presentation, it will be removed by the garbage collector
 */
// anothers = numbers;
// numbers = [];
// console.log(numbers);
// console.log(anothers);

/*
 * 1- length
 */
// numbers.length = 0;
// console.log(numbers);

/*
 * 1- length
 */
numbers.splice(0, numbers.length)
console.log(numbers);

