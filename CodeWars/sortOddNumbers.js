export default (array) => {
  let oddArr = [];

  array.forEach((value) => (value % 2 == 0 ? value : oddArr.push(value)));
  oddArr.sort((a, b) => a - b);

  return array.map((value, acc = 0) =>
    value % 2 == 0 ? value : oddArr[acc++]
  );
};
console.log(sortArray([36, 33, 2, 634, 46]));
