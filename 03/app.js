function sumNumber(userNumber) {
    let counter = 0;
    for (let i = 0; i <= userNumber; i++) {
        counter += i;
    }
    return counter;
}

const userNumber = parseInt(prompt('Podaj liczbę'));
const result = sumNumber(userNumber);

console.log(result);