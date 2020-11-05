const checkCashRegister = require("./index");
const testCases = require("./testCases");

describe("Cash Register", () => {
  test.each([testCases[0]])(
    "checkCashRegister(%d, %d, %j) should return an object",
    (price, cash, cid, expected) => {
      expect(typeof checkCashRegister(price, cash, cid)).toBe("object");
    }
  );

  test.each(testCases)(
    "checkCashRegister(%d, %d, %j) should return %j",
    (price, cash, cid, expected) => {
      expect(checkCashRegister(price, cash, cid)).toStrictEqual(expected);
    }
  );
});
