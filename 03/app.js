
let number = 5;

const sumOfNumbers = function() {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNumbers(number));