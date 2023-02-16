/*
 * practical programing
 */
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    console.log(baseSalary + overtime * rate);
}
getWage(baseSalary, overtime, rate);

/*
 * OOP
 */
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage() {
        console.log(this.baseSalary + this.overtime * this.rate);
    }
};
