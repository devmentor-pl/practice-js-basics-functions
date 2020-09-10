const sumUpTo = function(topValue) {
    let result = 0;

    for (let i = 1; i <= topValue; i++) {
        result += i;
    }

    return result;
}

console.log(sumUpTo(4));