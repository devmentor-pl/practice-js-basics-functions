const sumNumbers = function (maxNumber) {
  let sum = 0;
  for (let i = 1; i <= maxNumber; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(sumNumbers(5));
