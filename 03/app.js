const sumNumbers = function(lastNumberToSum) {
    let sum = 0;

    for (let i = 1; i <= lastNumberToSum; i++){
        sum += i;
    }
    return sum;
}


console.log(sumNumbers(4));