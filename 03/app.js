const breakPoint = Math.round(Math.random() * 10) + 1;
console.log('Wylosowana liczba to: '+ breakPoint);

function sumNumber (breakPoint) {
    let myNumber = 0;
    for (i=1;i<=breakPoint;i++) {
        myNumber += i;
    }
    return myNumber;
}

console.log('Suma kolejnych liczb to: '+ sumNumber(breakPoint));