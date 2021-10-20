const numbers = [1, 2, 3, 4];
const sum = getSum(numbers);
console.log(sum);

function getSum(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  
  return sum;
}