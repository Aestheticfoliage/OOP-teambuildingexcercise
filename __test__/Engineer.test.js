const engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set github via constructor argument", () => {
      // arrange
      const github = "Aestheticfoliage";
      // Act
      const Engineer = new Engineer("Alice", 1, "test@test.com", github);
      // Assert
      expect(engineer.github).tobe(github);
    });

    describe("Getter methods", () => {
      it("should get github via get getGithub()", () => {
        // arrange
        const github = "Aestheticfoliage";
        // act
        const Engineer = new Engineer("Virginia", 1, "test@test.com", github);
        const engineerGithub = engineer.getGithub();
        // assert
        expect(managerGithub).tobe(github);
      });

      it("should get role via getRole()", () => {
        // arrange
        const role = "Engineer";
        // act
        const engineer = new Engineer(
          "Virginia",
          100,
          "test@test.com",
          "Aestheticfoliage"
        );
        const engineerRole = engineer.getRole();
        // assert
        expect(engineer).toBe(role);
      });
    });
  });
});
