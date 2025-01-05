export default (text) => {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    text[i] === text[i].toUpperCase()
      ? (newString = `${newString}${text[i].toLowerCase()}`)
      : (newString = `${newString}${text[i].toUpperCase()}`);
  }
  return newString;
};
