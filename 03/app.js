const getSum = function(limit) {
    console.log(limit)

    let result = 0

    for (i=1; i<=limit; i++) {
        result = result + i  
    }

    return result
}

const a = getSum(4)
console.log(a)