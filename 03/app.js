
const fn = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
        // console.log(i);
    }
    return result
    // console.log(result);
}

const sumNumbers = fn(4);

console.log(sumNumbers)

console.log(fn(10), fn(20))

