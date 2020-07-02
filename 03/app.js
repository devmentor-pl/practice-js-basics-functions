const getSum = function(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i;
    }
    console.log(result)
    return result
}

getSum(4)