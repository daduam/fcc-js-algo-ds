const palindrome = require("../palindromeChecker");

describe("Palindrome Checker", () => {
  test("Has a return value of boolean type", () => {
    expect(typeof palindrome("eye")).toBe("boolean");
  });

  test.each([
    ["eye", true],
    ["_eye", true],
    ["race car", true],
    ["not a palindrome", false],
    ["A man, a plan, a canal. Panama", true],
    ["never odd or even", true],
    ["nope", false],
    ["almostomla", false],
    ["My age is 0, 0 si ega ym.", true],
    ["1 eye for of 1 eye.", false],
    ["0_0 (: /- :) 0-0", true],
    ["five|_/|four", false],
  ])('palindrome("%s") returns %s', (str, expected) => {
    expect(palindrome(str)).toBe(expected);
  });
});
