const add = function(max) {
    let result = 0;
    for(let i = 1; i <= max; i++) {
        result += i;
    }
    return result;
}

const outputFn = add(4);
console.log(outputFn);