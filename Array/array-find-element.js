const numbersP = [1, 2, 3, 4, 5,"a", 3];

/*
 * Primitive
 */
console.log("- For Primitive :");
console.group();

/* * fined white element */
console.log(numbersP.indexOf(3, 3)); 

/* * fined white element */
if (numbersP.lastIndexOf("a") !== -1) console.log("has Element 'a' ");

/* * fined white element */
if (numbersP.includes("a")) console.log("has Element 'a' ");
console.groupEnd();


/*
 * Reference
 */
console.log("- For Reference :");
const courses = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
];

const result = courses.find((course)=>{
    return course.name === "b"
})

const resultIndex = courses.findIndex((course)=>{
    return course.name === "b"
})

console.group();

console.log(result);
console.log(resultIndex);

console.groupEnd();
