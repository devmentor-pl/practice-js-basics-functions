const addingUp= function(num) {
    let sum=0;
    for(let i=1; i<=num; i++) {
        sum+=i;
    }
    return sum;
}

console.log(addingUp(4));