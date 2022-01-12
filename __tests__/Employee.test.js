// https://dev.to/dstrekelj/how-to-write-unit-tests-in-javascript-with-jest-2e83 
// documentation I used to help me create test.js files
const Employee = require("./lib/employee");

test("Can instantiate employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name through constructor arguments", () => {
    const name = "Test"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id through constructor arguments", () => {
    const testValue = 10;
    const e = new Employee("test", testValue);
    expect(e.id).toBe(testValue);
});