const fn = function (x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    result = ((1 + i) / 2) * i;
  }
  console.log(result);
  return result;
};

sumEntireNumbers = fn(3);
