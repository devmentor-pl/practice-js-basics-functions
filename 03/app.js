const sumNumbers = function (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
};

const inputNumber = 4;
const result = sumNumbers(inputNumber);
console.log(result);
