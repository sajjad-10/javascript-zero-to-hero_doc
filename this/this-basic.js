/*
 * this in method = obj
 */

var person = {
    name: "John",
    getName() {
        console.log(this);
    },
};
person.getName();

/*
 *  in browser [object Window]
 *  in Node [global]
 */

function foo() {
    console.log(this);
}

foo();

/*
 *  in Constructor function
 */

function Person(name) {
    this.name = name;
}

const mario = new Person("Mario");
console.log("Constructor function", mario);
