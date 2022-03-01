const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return Manager object which contains the parent class objects as well as officeNumber property", () => {
            // Arrange
            const name = "Tom";
            const id = 1;
            const email = "tom@gmail.com";
            const officeNumber = 123456;

            // Act
            const manager = new Manager(name, id, email, officeNumber);

            // Assert
            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getRole()", () => {
        it("should return 'Manager'", () => {
            // Arrange
            const manager = new Manager("Tom", 1, "tom@gmail.com", 123456);

            // Act
            const role = manager.getRole();

            // Assert
            expect(role).toEqual("Manager");
        });
    });
});