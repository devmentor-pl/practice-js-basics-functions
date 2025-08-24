const getUserInput = function(number) {
    return prompt(number);
}

const sumNextNumbers = function(numberFromUser) {

    const numberFromUserToFor = numberFromUser('Podaj numer');
    let sumNumbers = 0;
    for (let i = 0; i <= numberFromUserToFor; i++) {
        sumNumbers += i;
    }

    return sumNumbers;
}

const sumInputNumbers = sumNextNumbers(getUserInput);
console.log(sumInputNumbers);