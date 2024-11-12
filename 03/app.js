const sumTo = function(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum = sum+i;
    }
    return sum; 
};

console.log(sumTo(5));