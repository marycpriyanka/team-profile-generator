const Employee = require("./employee");

// Class Manager which inherits from Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Returns the role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;