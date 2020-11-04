function rot13(str) {
  let cipher = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].charCodeAt();

    if (ch >= 65 && ch <= 90) {
      const normCh = ch - 65;
      ch = ((normCh + 13) % 26) + 65;
    }

    cipher += String.fromCharCode(ch);
  }

  return cipher;
}

module.exports = rot13;
