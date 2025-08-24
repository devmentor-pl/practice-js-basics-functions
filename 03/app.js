let sum = 0;
function sumUpToAgain() {
  for (let i = 4; i > 0; i--) {
    sum += i;
  }
  return sum;
}
const result = sumUpToAgain();
console.log(result);
