const sumNumUpTo = function(number) {
    let sum = 0;
    for(let i=1; i<=number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumNumUpTo(4));