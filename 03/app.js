const getSumToEndNumber = function (number) {
    console.log(number);

    let result = 0;
    for (let i = 1; 1<= number; i++) {
        result = result + i;
    }

    return result;
 
}

const eSum = getSumToEndNumber(4);
console.log(eSum);