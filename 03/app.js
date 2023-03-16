const getSum = function (max) {
    console.log(max)

    let result = 0
    for(let i=1; i<=max; i++) {
        result = result + i
        // console.log(result)
    }

    return result

}

const res = getSum(6)

console.log(res)