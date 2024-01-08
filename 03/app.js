let result = 0;

const sumOfNumbers = function (number) {
  for (let i = 0; i <= number; i++) {
    result = result + i;
  }
  return result;
};
console.log("Suma wszystkich liczb wynosi " + sumOfNumbers(4));
