export default (number) => {
  let sumOfNumbers = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sumOfNumbers += i;
  }
  console.log(sumOfNumbers);
  return sumOfNumbers === number ? true : false;
};

let a = 124;
a = a.toString();
console.log(a);
