let result = 0;

const sum = function(putNumber) {
    for (let i = 1; i <= putNumber; i++ ) {
        result = result + i;
    }
    return result
}

const getNumber = sum(4)

console.log(getNumber)


