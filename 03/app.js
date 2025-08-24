const sum = function (num) {
  let acc = 0;
  for (let i = 1; i <= num; i++) {
    acc += i;
  }
  return acc;
};

console.log(sum(4));
