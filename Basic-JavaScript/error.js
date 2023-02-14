const person = {
    fname: "sajjad",
    lname: "fallahi",
    get fullName() {
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value) {
        if (typeof value !== "string") {
            // return;
            throw new Error("Value is not a string.");
        }
        const parts = value.split(" ");
        this.fname = parts[0];
        this.lname = parts[1];
    },
};

// person.fullName = "Sajjad2 fallahi2";
try {
    person.fullName = true;
} catch (e) {
    console.log(e);
}
console.log(person);
