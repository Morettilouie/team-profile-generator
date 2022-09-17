const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling parent(employee) constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // employee role set as manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;