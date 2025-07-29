const sumNum = function (num) {
  let resultStr = "";
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    resultStr += i;
    if (i == num) {
      break;
    }
    resultStr += "+";
  }
  resultStr += "=" + sum;
  return resultStr;
};

console.log(sumNum(4));
