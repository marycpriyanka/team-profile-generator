const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an Intern object with properties inherited from the parent class and also school property", () => {
            // Arrange
            const name = "Tom";
            const id = 1;
            const email = "tom@gmail.com";
            const school = "University of Washington";

            // Act
            const intern = new Intern(name, id, email, school);

            // Assert
            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });
    });

    describe("getSchool()", () => {
        it("should return the school of the intern", () => {
            // Arrange
            const intern = new Intern("Tom", 1, "tom@gmail.com", "University of Washington");

            // Act
            const school = intern.getSchool();

            // Assert
            expect(school).toEqual("University of Washington");
        });
    });

    describe("getRole()", () => {
        it("should return 'Intern'", () => {
            // Arrange
            const intern = new Intern("Tom", 1, "tom@gmail.com", "University of Washington");

            // Act
            const role = intern.getRole();

            // Assert
            expect(role).toEqual("Intern");
        });
    });
});