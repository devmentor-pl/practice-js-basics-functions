// const sumNumber = function (userNumber) {
//     let sumNumber = 0;

//     for (let i = 0; i <= userNumber; i++) {
//         sumNumber += i;
//     }
//     return sumNumber;
// }

// const sumNumberFromUser = function (userInput) {
//     const userNumber = userInput('Do jakiej liczby sumujemy?');

//     const sum = sumNumber(userNumber);
//     return sum;
// }

// const result = sumNumberFromUser(function (userNumber) {
//     return parseInt(prompt(userNumber));
// })

// console.log(result);

// Obie metody działają, ale szczerze to nie wiem, która lepsza. Generalnie mam lekki problem w zrozumieniu tego zagadnienia.

const sumNumberFromUser = function (userInput) {
    const userNumber = userInput('Do jakiej liczby sumujemy?');

    let sumNumber = 0;

    for (let i = 0; i <= userNumber; i++) {
        sumNumber += i;
    }
    return sumNumber;
}

const result = sumNumberFromUser(function (userNumber) {
    return parseInt(prompt(userNumber));
})

console.log(result);