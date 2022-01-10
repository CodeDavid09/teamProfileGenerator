const Employee = require("./lib/employee");

test("Can instantiate employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name through constructor arguments", () => {
    const name = "David"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id through constructor arguments", () => {
    const testValue = 10;
    const e = new Employee("test", testValue);
    expect(e.id).toBe(testValue);
});