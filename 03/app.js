const sumNumber = function (number) {

    let sum = 0;
    for (let i = 0; i < number + 1; i++) {
        sum += i;
    }
    return sum;
}

const sumResult = sumNumber(5);
console.log(sumResult);

