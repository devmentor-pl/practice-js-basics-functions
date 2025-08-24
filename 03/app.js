const sumNumbers = function(x) { 
    let result = 0;   
    for(let i=1; i<=x; i++) {
        result = result + i;
    }
    return result;
}

const result1 = sumNumbers(4);
console.log(result1);

const result2 = sumNumbers(7);
console.log(result2);