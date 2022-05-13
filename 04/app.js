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






