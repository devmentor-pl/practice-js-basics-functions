const sum = function (number) {
    result = 0;
    for(let i=1; i<=number; i++) {
        result = result + i;
    }
    return result;
}

console.log(sum(4))