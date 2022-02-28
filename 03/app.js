const sumToNumber = function(number) {
    let i = 0;
    let result = 0;
    for(i=1; i<=number; i++) {
        result = result + i;
        console.log(i);
    } return result;
}

console.log(sumToNumber(4));
