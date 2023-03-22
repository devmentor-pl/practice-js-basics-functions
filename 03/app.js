let sum = 0;
const sumNumbers = function(number) {
    for(let i=1; i<=number; i++) {
        sum += i;
    }
    return sum;
}

sumNumbers(6);
console.log(sum);