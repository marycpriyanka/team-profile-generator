const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an Engineer object with  parent class properties and also github property when called with new keyword", () => {
            // Arrange
            const name = "Tom";
            const id = 1;
            const email = "tom@gmail.com";
            const github = "tom";

            // Act
            const engineer = new Engineer(name, id, email, github);

            // Assert
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });
    });
});