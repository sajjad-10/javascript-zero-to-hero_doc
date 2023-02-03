const numbers = [3, 4];

console.log("before", numbers);

numbers.unshift(1, 2); /* * add element Start */

numbers.splice(2, 0, "a"); /* * add OR remove element anywhere */

numbers.push(5, 6); /* * add element End */

console.log("after", numbers);
