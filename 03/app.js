let result = 0;

const addNumbersFrom1ToX = function (x) {
  for (let i = 0; i <= x; i++) {
    result = result + i;
  }
  return result;
};
console.log(addNumbersFrom1ToX(4));
