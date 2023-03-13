
const sum = function (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i
    }
    return result
}

const showResult = sum(4)
console.log(showResult)
