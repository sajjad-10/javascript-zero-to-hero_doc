/*
 * Getter & Setters
* Getters : Access properties
* Setters : change properties

 */
const person = {
    fname:"sajjad",
    lname:"fallahi",
    get fullName(){
        return `${person.fname} ${person.lname}`
    },
    set fullName(value){
        const parts = value.split(' ')
        this.fname = parts[0]
        this.lname = parts[1]
    }
}
console.log(person.fullName);

person.fullName = "Sajjad2 fallahi2"
console.log(person.fullName);
