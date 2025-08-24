
const sum = function(end) {

    result=0;
    for(let i=1; i<=end; i++) {
        result=result+i;
    }
    return result;
}

console.log(sum(4));