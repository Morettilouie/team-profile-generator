const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling parent(employee) constructor
        super(name, id, email);

        this.school = school;
    }

    // employee role set as manager
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;