

function sayHello(name) {
    allTxt = 'Cześć ' + name + '!';
    return allTxt;
}

sayHello('devmentor.pl');
console.log(allTxt);

let i = 1;

const numberPeople = parseInt(prompt('Podaj z iloma osobami chcesz się przywitać !!!'));

while (i <= numberPeople) {
    userName = prompt('Podaj imię ' + i + ' osoby');
    sayHello(userName);
    console.log(allTxt);
    i++;
}
