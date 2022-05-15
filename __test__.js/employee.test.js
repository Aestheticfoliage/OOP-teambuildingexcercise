const Employee = require("../lib/Employeer");

describe("Employee", () => {
  describe("Initialization"), () => {
    it ("should instantiate an employee instance", () =>{
  //Arrange
  const employee = new Employee();
  
// Act
// Assert
expect(typeof employee).toBe("object");
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
