let result = 0;

const sumTo = function(number) {
    for(let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
};

console.log(sumTo(5));