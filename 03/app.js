function result(numbersAmount) {
    let sum = 0

    for (let i = 0; i <= numbersAmount; i++) {
        sum = sum + i
    };
    return sum;

};

console.log(result(4));