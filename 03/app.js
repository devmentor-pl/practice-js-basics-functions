let sum = 0;

let sumNumbers = function (num) {
    for(let i = 1; i <= num; i ++) {
        sum = sum + i;
    }
    return sum;
}

sumNumbers(4);
console.log(sum);