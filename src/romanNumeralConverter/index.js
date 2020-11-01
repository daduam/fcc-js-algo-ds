// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

const romanVals = [1000, 500, 100, 50, 10, 5, 1];
const romanSymbols = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I",
};

function getPlaceDigit(num) {
  const digitCount = (Math.log10(num) + 1) | 0;
  const place = Math.pow(10, digitCount - 1);

  return [(num / place) | 0, place];
}

function convertToRoman(num, roman = "") {
  if (!num) {
    return roman;
  }

  const [digit, place] = getPlaceDigit(num);
  const val = place * digit;

  for (let i = 0; i < romanVals.length; i++) {
    const sym = romanVals[i];

    if ((digit === 9 || digit === 4) && val === sym - place) {
      roman += romanSymbols[place] + romanSymbols[sym];
      num -= val;
      break;
    } else if (num >= sym) {
      const [symLeadDigit] = getPlaceDigit(sym);
      let d = digit;
      while (d >= symLeadDigit) {
        roman += romanSymbols[sym];
        num -= sym;
        d -= symLeadDigit;
      }
      break;
    }
  }

  return convertToRoman(num, roman);
}

module.exports = convertToRoman;
