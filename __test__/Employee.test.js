// const { isDate } = require("moment");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization"),
    () => {
      it("should instantiate an employee instance", () => {
        //Arrange
        const employee = new Employee();

        // Act
        // Assert
        expect(typeof employee).toBe("object");
      });

      it("should set name via constructor arguments", () => {
        // arrange
        const name = "Virginia";
        // act
        const employee = new Employee(name);
        // assert
        expect(employee.name).toBe(name);
      });
      it("should set id via constructor arguments", () => {
        // arrange
        const id = 100;
        // act
        const employee = new Employee("Virginia", id);
        // assert
        expect(employee.id).toBe(id);
      });

      it("should set email via constructor arguments", () => {
        //  arrange
        const email = "test@test.com";

        // act
        const employee = new Employee("Virginia", 100, email);
        // assert
        expect(employee.email).toBe(email);
      });
    };

  describe("Getter methods", () => {
    it("should get name via getName()", () => {
      // arrange
      const name = "Virginia";
      // act
      const employee = new Employee(name, 100, "test@test.com");
      const employeeName = employee.getName();
      // assert
      expect(employeeName).toBe(name);
    });

    it("should get id via getId())", () => {
      // arrange
      const name = "virginia";
      // act
      const employee = new Employee("virginia", id, "test@test.com");
      const employeeId = employee.getId();
      //  assert
      expect(employeeId).toBe(id);
    });

    it("should get id via getEmail()", () => {
      // arrange
      const email = "test@test.com";
      // act
      const employee = new Employee("Virginia", 100, email);
      const employeeEmail = employee.getEmail();
      //  assert
      expect(employeeEmail).toBe(Email);
    });
    it("should get role via getRole()", () => {
      // arrainge
      const role = "Employee";
      // act
      const employee = new Employee("Virginia", 100, "test@test.com");
      const employeeRole = employee.getRole();
      // assert
      expect(employee.Role).toBe(role);
    });
  });
});

// // test("Can instantiate Employee instance", () => {
// //   const e = new Employee();
// //   expect(typeof e).toBe("object");
// // });
// test("Can set name via constructor arguments", () => {
//   const name = "Virginia";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

// test("Can set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });
// test("Can set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

// test("Can get name via getName()", () => {
//   const testValue = "Virginia";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

// test("Can get email via getEmail()", () => {
//   const testValue = "Employee";
//   const e = new Employee("Virginia", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });

// test('getRole() should retur "Employee"', () => {
//   const testValue = "Employee";
//   const e = new Employee("Virginia", 1, "test@test.com");
//   expext(e.getRole()).toBe(testValue);
// });
