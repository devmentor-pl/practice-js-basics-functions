let sum = 0;

let sumNumbers = function (num) {
    for(let i = 1; i <= num; i ++) {
        sum = sum + i;

        if(i === num) {
            // jeśli return sum jest przed console to funkcja nie wyświetla sumy
            console.log(sum);
            return sum;
        }
    }
}

sumNumbers(4);