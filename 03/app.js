const count = function(alert) {
    const x = alert('Podaj liczbę: ');
    let sum = parseInt(x);
    for (let i = 0; i < x; i++) {
        sum += i;
    }
    return sum;
}

const showMsg = count(function(number) {
    return prompt(number);
});

console.log(showMsg);