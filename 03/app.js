const sum = function (number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
};

const showResult = sum(4);
console.log(showResult);
