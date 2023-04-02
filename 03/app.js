const getSum = function (numLimit){
    console.log('wybrana liczba ' + numLimit)

    let result = 0
    for(let i=1; i<=numLimit; i++){
        result = result + i
    }
    return result
}

const res = getSum(6);
console.log('suma liczb ' + res)
