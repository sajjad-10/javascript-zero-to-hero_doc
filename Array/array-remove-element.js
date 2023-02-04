const numbers = [2,3, 4, 5,6];

console.log("before", numbers);

numbers.shift(); /* * remove element Start */

numbers.splice(2, 1); /* * add OR remove element anywhere */

numbers.pop(); /* * remove element End */

console.log("after", numbers);