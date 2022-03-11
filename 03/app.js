const sum = function (maxNumber) {
    let result = 0
    for (let i = 1; i <= maxNumber; i++) {
        result += i
    }
    return result

}

const result = sum(6)

console.log({ result })