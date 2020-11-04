const rot13 = require("../caesarsCipher");

describe("Caesar's Cipher", () => {
  test.each([
    ["SERR PBQR PNZC", "FREE CODE CAMP"],
    ["SERR CVMMN!", "FREE PIZZA!"],
    ["SERR YBIR?", "FREE LOVE?"],
    [
      "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.",
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
    ],
  ])('rot13("%s") should decode to %s', (str, expected) => {
    expected(rot13(str)).toBe(expected);
  });
});
