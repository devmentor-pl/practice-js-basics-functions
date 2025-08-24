const sumNumbersUpTo = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const result = sumNumbersUpTo(4);
console.log(result); 