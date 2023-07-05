const add = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

const score = add(5);
console.log(score);
