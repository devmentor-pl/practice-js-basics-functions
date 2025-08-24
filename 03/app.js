const sumNumbers = function (number) {

    let result = 0;

    for (let i = 1; i <= number; i++) {
        result = result + i;
    }

    return result;
}

const myNumber = sumNumbers(5);
console.log(myNumber);