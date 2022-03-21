const sumToNumber = function (number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    };
    console.log(sum);
    return sum
};
sumToNumber(4);