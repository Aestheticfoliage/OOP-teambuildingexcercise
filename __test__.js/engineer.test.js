const Engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", ()=> {
    const testValue() "GitHubUser";
    const e = new Engineer("Foo",1,"test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(toValue);
});
 test("Can get GitHub username via getGithub", ()=>
  const testValue = "GitHubUser";
  const e = new Engineer("Virginia", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});