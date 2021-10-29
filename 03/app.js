
let number = 10;

const sumOfNumbers = function(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNumbers(number));