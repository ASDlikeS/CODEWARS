//Holy CRAP WE CANT USE BIGINT!!!!!----
//Alr it's ok for me, so now i'll try to sum last indexes from string and return all string (i won't convert a string to int, this's useless);
export default (a, b) => {
  result = ``;
  let carry = 0;
  let fir = a.length - 1;
  let sec = b.length - 1;

  while (fir >= 0 || sec >= 0 || carry) {
    let sum = carry;

    if (fir >= 0) sum += parseInt(a[fir--]);
    if (sec >= 0) sum += parseInt(b[sec--]);

    carry = Math.floor(sum / 10);

    result = (sum % 10) + result;
  }
  return result;
};
