const sumNumbersToSpecifiedRange = function(limit) {
    let sum = 0;
    for(let i = 0; i <= limit; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbersToSpecifiedRange(4));