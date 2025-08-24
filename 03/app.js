const sumNumbers = function(x) {
    let result = 0;
    for(let i=1; i<=x; i++) {
        result = result + i;
    } 
    return result;
};

console.log(sumNumbers(4));
