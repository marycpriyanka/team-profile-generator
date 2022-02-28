// Employee parent class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns the name of the employee
    getName() {
        return this.name;
    }

    // Returns the ID of the employee
    getId() {
        return this.id;
    }

    // Returns the email of the employee
    getEmail() {
        return this.email;
    }

    // Returns the role of the employee
    getRole() {
        return "Employee";
    }
}

module.exports= Employee;