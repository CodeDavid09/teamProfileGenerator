const Engineer = require("./lib/employee");

test("Setup their GitHUb account through constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Test", 1, "github@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Test", 1, "Github@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Test", 1, "Github@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});