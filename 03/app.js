const fn = function(stop) {
    let sum = 0;
    
    for (let i = 1; i <= stop; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(fn(4));
