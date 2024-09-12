const sum = function (number) {
    let result = 0;
    for (i = 0; i <= number; i++) {
        result = result + i;
    }
    return result;
}
const finishResult = sum(4);
console.log(finishResult);