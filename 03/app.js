let sum = 0;

let sumNumbers = function (num) {
    for(let i = 1; i <= num; i ++) {
        sum = sum + i;

        if(i === num) {
            return sum;
        }
    }
}

sumNumbers(4);
console.log(sum);