const sum = function (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = result + i;
    }
    return result;
}
console.log(sum(4));