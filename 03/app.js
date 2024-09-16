const sumUntil = function (number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }
  return result;
};

const showResult = sumUntil(7);
console.log(showResult);