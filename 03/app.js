let result = 0;

const sumNumbers = function (num) {
    for (i = 0; i <= num; i++) {
        result = result + i;
    }
    return;
}

const showResult = function (number) {
    sumNumbers(number);
    console.log(result);
}

showResult(4);