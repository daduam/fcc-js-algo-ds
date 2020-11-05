const unitValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  const change = [];
  const copyCid = cid.map((a) => [...a]);
  let changeAmt = (cash - price) * 100;
  let isClosed = true;

  for (let i = cid.length - 1; i >= 0; i--) {
    const value = unitValue[cid[i][0]] * 100;

    if (cid[i][1] === 0 || changeAmt < value) {
      continue;
    }

    const newChange = [cid[i][0], 0];
    cid[i][1] *= 100;
    while (changeAmt >= value && cid[i][1] > 0) {
      changeAmt -= value;
      cid[i][1] -= value;
      newChange[1] += value / 100;
    }
    change.push(newChange);

    if (cid[i][1] !== 0) {
      isClosed = false;
    }
  }

  if (changeAmt !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return isClosed
    ? { status: "CLOSED", change: copyCid }
    : { status: "OPEN", change };
}

module.exports = checkCashRegister;
