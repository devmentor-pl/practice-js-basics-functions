let sumNumbers = function(number) {
  var sum = 0;
  for(let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(4)); // 10

console.log(sumNumbers(5)); // 15