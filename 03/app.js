const sumToNumber = function(x) {
    let result = 0;
    for(let i=1; i <= x; i++) {
        result = result + i;
       
    }
    return result

}

const res = sumToNumber(4)
console.log(res)