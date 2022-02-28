const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an Employee object with 3 properties name, id and email when called with the new keyword", () => {
            // Arrange
            const name = "Tom";
            const id = 1;
            const email = "tom@gmail.com";

            // Act
            const employee = new Employee(name, id, email);

            // Assert
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });
    });

    describe("getName()", () => {
        it("should return name of employee", () => {
            // Arrange
            const employee = new Employee("Tom", 1, "tom@gmail.com");

            // Act
            const name = employee.getName();

            // Assert
            expect(name).toEqual("Tom");
        });
    });

    describe("getId()", () => {
        it("should return ID of the employee", () => {
            // Arrange
            const employee = new Employee("Tom", 1, "tom@gmail.com");

            // Act
            const id = employee.getId();

            // Assert
            expect(id).toEqual(1);
        });
    });

    describe("getEmail()", () => {
        it("should return the email of the employee", () => {
            // Arrange
            const employee = new Employee("Tom", 1, "tom@gmail.com");

            // Act
            const email = employee.getEmail();

            // Assert
            expect(email).toEqual("tom@gmail.com");
        });
    });

    describe("getRole()", () => {
        it("should return 'Employee' when getRole() of employee is called", () => {
            // Arrange
            const employee = new Employee("Tom", 1, "tom@gmail.com");

            // Act
            const role = employee.getRole();

            // Assert
            expect(role).toEqual("Employee");
        })
    });
});