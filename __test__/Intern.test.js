const intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set school via constructor argument", () => {
      // arrange
      const github = "UNCW";
      // Act
      const intern = new intern("Alice", 1, "test@test.com", school);
      // Assert
      expect(intern.school).tobe(school);
    });

    describe("Getter methods", () => {
      it("should get school via get getSchool()", () => {
        // arrange
        const School = "UNCW";
        // act
        const intern = new Intern("Virginia", 1, "test@test.com", school);
        const internSchool = intern.getSchool();
        // assert
        expect(intern.school).tobe(school);
      });

      it("should get role via getRole()", () => {
        // arrange
        const role = "Intern";
        // act
        const intern = new Intern("Virginia", 100, "test@test.com", "UNCW");
        const Role = intern.getRole();
        // assert
        expect(intern).toBe(role);
      });
    });
  });
});
