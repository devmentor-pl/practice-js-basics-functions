const sumElements = function (numer) {
  let result = 0;
  let i = 1;
  while (i <= numer) {
    result += i;
    i++;
  }

  return result;
};

console.log(sumElements(4));
