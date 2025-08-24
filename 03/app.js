const getSum = function (lastNum) {
    
    let result = 0;
    for (let i = 0; i <= lastNum; i++) {
    result = result + i;
    }
    return result;
}

const sum = getSum(4);
console.log(sum)