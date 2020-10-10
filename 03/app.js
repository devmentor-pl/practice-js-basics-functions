const getUserNumber = function () {
    const number = prompt('Podaj liczbę do sumowania');
    return number;
}

const sumNumber = function (userNumber) {
    let sum = 0;
    for (let i = 0; i <= userNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumNumber(getUserNumber()));