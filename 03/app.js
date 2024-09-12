
const sumCounter = function (num) {
    let operations = 0;
    let result = 0;
for (let i = 1; i <= num; i++) {
        operations = operations + ' + ' + i;
        result += i;
    }
    console.log( operations = operations + ' = ' + result);
    return result
  
}

sumCounter(3);