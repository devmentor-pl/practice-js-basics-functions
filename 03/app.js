sumToGiven = function (n) {
    let a = n;
    if(typeof(a) !== 'number') return null;

    let result = 0;
    for(let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}

console.log(sumToGiven(4));