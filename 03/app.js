const sum = function (number) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    result = result + i;
  }

  return result;
};

const sumNumber = sum(4);
console.log('Wynik sumy to:', sumNumber);
