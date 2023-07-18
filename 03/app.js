const sumNumbers = function(lastNumber){
    let sum = 0;

    for(let i=1;i<=lastNumber;i++){
        sum = sum + i;
    }

    return sum;
}

const result = sumNumbers(4);
console.log(result);