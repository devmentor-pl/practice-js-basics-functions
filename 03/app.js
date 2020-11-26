const sumNumbers = function (number) {
    let result = 0;

    for (let i = 1; i <= number; i++) {
        console.log('result = ' + result + ' + ' + i);
        result += i;
    }

    return result;
}

const number = parseInt(prompt('Podaj do jakiej kolejnej liczby ma zostać wykonane sumowanie !!!'));

const resultSum = sumNumbers(number);
console.log('Wynik sumy liczb: ' + resultSum);


