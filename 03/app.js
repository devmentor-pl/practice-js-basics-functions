const userNumberPrompt = function() {
    const number = parseInt(prompt(`Podaj liczbe`));
    return number;
}

const addNumber = function(number) {
    let result = 0;
    for(let i = number; i >= 0 ; i--) {
        result += i;
    }
    
    console.log(`Users number is ${number} and result of added sum from number is ${result}`);
    return result;
}

addNumber(userNumberPrompt());
