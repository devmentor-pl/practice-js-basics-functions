// //callback
// //przykład 1

// function logA(callback) { //asynchroniczna funkcja, 
//     setTimeout(() => {
//         console.log('a')
//         const someValue = 'this is from a'
//         callback(someValue)
//     }, 500)
// }
// function logB(param) {
//     setTimeout(() => {
//         console.log('b')
//         console.log(param)
//     }, 1000)
// }
// logA(logB);

// //przykład 2

// function kodA() {
//     setTimeout(() => {
//         console.log('to jest kod a') 
//     }, 1500)
// }

// function kodB(callback) {
//     console.log('to jest kod b')
//     const someValue = 'this is from c'
//     callback(someValue);
// }

// function kodC() {
//     console.log('kod c chwilowo niedostępny')
// }
// kodA();
// kodB(kodC);



// funkcje czasu 

// function showMessage() {
//     console.log('setTimeout');
// }
// const showName = function() {
//     console.log('Michał');
// }
// setTimeout(showMessage, 1000);
// setTimeout(showName, 2000);

// setTimeout(function() {
//     console.log('funkcja anonimowa!');
// }, 5000)


// let counter = 1;

// const showCounter = function() {
//     console.log(counter);
//     counter++;
// }
// console.log('before setInterval()');
// setInterval(showCounter, 1500);
// console.log('after setInterval()');


// let counter = 1;
// let inInterval;

// const showCounter = function() {
//     console.log(counter);
//     counter++;

//     if(counter > 5) {
//         clearInterval(idInterval);
//     }
// }
// idInterval = setInterval(showCounter, 1000);




// function runTimer() {
//     const time = (new Date()).toLocaleTimeString();
//     console.log(time);


// }
// // setInterval(showCounter, )
// runTimer()


let idInterval;
let counter = new Date();
console.log(counter.typeOf);

const runTime = function() {
    console.log(counter.toLocaleTimeString());
    counter.setSeconds(date.getSeconds() + 5);
}
idInterval = setInterval(runTime, 5000)

// //wyświetla godzinę co 5 sec ale tą samą a nie aktualną 


// let idInterval;
// let counter = 1;
// const showCounter = function() {
//     console.log(counter);
//     counter++;
//     if(counter > 5) {
//         clearInterval(idInterval);
// }
// }
// idInterval = setInterval(showCounter, 1000)











 