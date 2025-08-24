let result = 0;
const sumLastNumber = function (num) {
  for (let i = 0; i < num; i++) {
    result += i;
  };
  return result + num;
}

console.log(sumLastNumber(4));