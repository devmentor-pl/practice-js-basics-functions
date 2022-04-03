const getSum = function(num){
    console.log(num);

    let result = 0;
    for(let i=1; i<=num; i++){
        result = result + i;
    }
    
    return result;
}

const res = getSum(5);
console.log(res);

