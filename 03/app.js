const getSum = function (limit) {
    console.log(limit)

    let result = 0;
    for (let i = 1; i <= limit; i++) {
        result = result + i;
    }
    return result;
}

const res1 = getSum(4);
console.log(res1)