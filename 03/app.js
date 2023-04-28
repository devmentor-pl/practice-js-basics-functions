let result = 0;

const sumCounter = function (num) {
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result
}

sumCounter(8);
console.log(result);
//nie umiem znaleźć informacji jak wypisać wynik w ten sposób :`1+2+3+4=10`