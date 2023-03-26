const sumNumbers = function(number) {
    let sum = 0;
    for(let i=1; i<=number; i++) {
        sum += i;
    }
    return sum;
}

sumNumbers(6);
console.log(sum);