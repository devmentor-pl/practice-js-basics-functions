const intervalSum = function(interval){
    let sum = 0;
    for(let i = 1; i <= interval; i++){
        sum+=i;
    }
    return sum;
}

intervalSum(4);