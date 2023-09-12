const sumNum = function (number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};

const result = sumNum(5);
console.log(result);
