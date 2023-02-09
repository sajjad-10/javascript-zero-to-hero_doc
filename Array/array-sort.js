const numbers = [2, 3, 1, 0, 12];
const message = "Learn JS Cool";
const obProgramName = [
    { id: 1, name: "html" },
    { id: 2, name: "css" },
];

/*
 * sort : sort array of string OR number
 */

const sorted = numbers.sort();
console.log("sorted: ", sorted); // 12 convert to string  2 > "12" // [0, 1, 12, 2, 3]

/*
 * sort : sort array of Objects
 */

const nameProgram = obProgramName.sort((a, b) => {
    let itemA = a.name.toLocaleLowerCase;
    let itemB = b.name.toLocaleLowerCase;
    if (itemA < itemB) return -1; //a
    if (itemB > itemA) return 1; // b
    return 0;
});
console.log("sorted: ", nameProgram); // 12 convert to string  2 > "12" // [0, 1, 12, 2, 3]
