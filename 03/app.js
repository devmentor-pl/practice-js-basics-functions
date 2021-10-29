const sumNumbers = function (numberToSum) {
  let sumResult = 0;
  for (let i = 0; i <= numberToSum; i++) {
    sumResult += i;
  }
  return sumResult;
};

const finalResult = sumNumbers(4);
console.log(finalResult);
