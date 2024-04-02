const getSum = function (x) {
  let result = 0;
  for (let i = 0; i <= x; i++) {
    result += i;
  }
  return result;
};

const showSum = getSum(4);
console.log(`Suma liczb wynosi ${showSum}`);
