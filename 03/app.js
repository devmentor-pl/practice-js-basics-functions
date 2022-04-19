let result = 0;

const sumNumber = function (num) {
    for (i = 1; i <= num; i++) {
        result = result + i
    }
    return;
}

const showResult = function(number) {
    sumNumber(number);
    console.log(result)
}

showResult(4)
