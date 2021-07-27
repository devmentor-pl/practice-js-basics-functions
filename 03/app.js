const sum = function (number) {
    if ((typeof number !== 'number') || (number < 0)) {
        return 'Podaj liczbę większą lub równą 0!';
    }
    let acc = 0;
    for (let i = 0; i <= number; i++) {
        acc += i;
    }
    return acc;
}

console.log(sum([0,2,3,4]));
console.log(sum(-10));
console.log(sum('abc'));
console.log(sum(0));
console.log(sum(4));
console.log(sum({}));
console.log(sum(99));