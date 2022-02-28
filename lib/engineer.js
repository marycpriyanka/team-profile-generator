const Employee = require("./employee");

// Class Engineer which inherits from Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // Returns Github username of the engineer
    getGithub() {
        return this.github;
    }

    // Returns the role
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;