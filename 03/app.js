const getSum = function(num){

    let result = 0

    for(let i=1; i<=num; i++){
        result = result + i;
    }
    return result;
}

const sum = getSum(5);
console.log(sum)

const sum2 = getSum(10);
console.log(sum2);