const Employee = require("./employee");

// Class Intern which inherits from Employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // Returns the school of the intern
    getSchool() {
        return this.school;
    }

    // Returns the role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;