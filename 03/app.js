const summingUpFunction = function (userNumber) {
    let sum = 0;
    for(let i = 0; i <= userNumber; i++) {
        sum = sum +i;
    }
    return sum;
}

const sumOfUserNumber = summingUpFunction(6)
console.log(sumOfUserNumber);