const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set office number via constructor argument", () => {
      // arrange
      const officeNumber = 100;
      // Act
      const Manager = new Manager("Alice", 1, "test@test.com", officeNumber);
      // Assert
      expect(employee.officeNumber).tobe(officeNumber);
    });

    describe("Getter methods", () => {
      it("should get office number via getoffice()", () => {
        // arrange
        const officeNumber = 100;
        // act
        const manager = new Manager(
          "Virginia",
          1,
          "test@test.com",
          officeNumber
        );
        const OfficeNumber = manager.getOffice();
        // assert
        expect(manager.officeNumber).tobe(officeNumber);
      });

      it("should get role via getRole()", () => {
        // arrange
        const role = "Manager";
        // act
        const manager = new Manager("Virginia", 100, "test@test.com", 100);
        const managerRole = manager.getRole();
        // assert
        expect(employeeRole).toBe(role);
      });
    });
  });
});
