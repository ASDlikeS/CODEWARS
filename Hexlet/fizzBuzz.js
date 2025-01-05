export default (startNum, endNum) => {
  if (startNum > endNum) return "invalid range!";

  while (startNum <= endNum) {
    if (startNum % 3 === 0 && startNum % 5 === 0) console.log("FizzBuzz");
    else if (startNum % 3 === 0) console.log("Fizz");
    else if (startNum % 5 === 0) console.log("Buzz");
    else {
      console.log(startNum);
    }
    startNum++;
  }
};
//LOGGING...
//
//fizzBuzz(11, 20);
