'use strict'


let idInterval;
let counter = 1;
const showCounter = function() {
    var teraz = new Date;
    var wynik = teraz.getHours() + ":" + teraz.getMinutes() + ":" + teraz.getSeconds();

    console.log(wynik)
    counter++;
    if(counter > 5) {
        clearInterval(idInterval);    
    }
}
    idInterval = setInterval(showCounter, 1000)

2//
// function runTimer() {
//     console.log('start')
//     let iter = 0;
//   const idInterval = setInterval(function() {
//         const time = (new Date().toLocaleTimeString())
//         console.log(time)
//         iter++
//         console.log(iter)

//         if(iter === 5){
//         clearInterval(idInterval)
//         }
//     }, 1000)
// }

// runTimer()






