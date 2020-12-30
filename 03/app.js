const getSum = function (num) {
    if (typeof num !== 'number') {
        return 0;
    }

    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(getSum(5));