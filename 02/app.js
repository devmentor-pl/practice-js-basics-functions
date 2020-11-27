

function sayHello(name) {
    const allTxt = 'Cześć ' + name + '!';
    return allTxt;
}
/* zadanie */
const allTxtResult_1 = sayHello('devmentor.pl');
console.log(allTxtResult_1);



/* zadanie dodatkowe (zabawa) */

let i = 1;

const numberPeople = parseInt(prompt('Podaj z iloma osobami chcesz się przywitać !!!'));

while (i <= numberPeople) {
    const userName = prompt('Podaj imię ' + i + ' osoby');
    const allTxtResult_2 = sayHello(userName);
    console.log(allTxtResult_2);
    i++;
}
