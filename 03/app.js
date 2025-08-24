const getResult = function (num) {
    let result = 0;

    for (let i = 1; i <= num; i = i + 1) {
        result = result + i;
    }
    return result
}
const sum = getResult(4)
console.log(sum)
