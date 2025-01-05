function encrypt(text) {
  let encryptText = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 == 0) {
      encryptText += text[i + 1];
    } else {
      encryptText += text[i - 1];
    }
  }
  encryptText = encryptText.replace("undefined", text[text.length - 1]);
  return encryptText;
}

console.log(encrypt("abcd"));
