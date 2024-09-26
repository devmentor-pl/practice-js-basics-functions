const addNumbers = function(maxNumber) {
    let result = 0;
    for (let i=0; i<=maxNumber; i++) {
        result += i;
    }
    return result;
}

console.log(addNumbers(4));
