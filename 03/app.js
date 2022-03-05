const sumFn = function(lastNumber){
    let result=0;
    for (i=1; i<=lastNumber; i++)
        result+=i;

    return result;
}

const sum = sumFn(5);
console.log(sum);