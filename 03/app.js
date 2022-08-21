const add = function(param){
    let sum = 0;
    for(i=0; i<=param; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(add(4));