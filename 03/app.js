let result = 0;

const sum = function(sumNumber) {
    for(let i=1; i<=sumNumber; i++) {
        result = result + i;
    }
    return result;
}

const endResult = sum(5);
console.log(result);