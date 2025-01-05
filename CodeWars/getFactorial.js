export default (number) => {
  let factorial = 1;
  for (let index = 1; index <= number; index++) {
    factorial *= index;
  }
  return factorial;
};
