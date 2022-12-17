'use strict'

let runTimer = function () {
    const time = (new Date()).toLocaleTimeString();
    console.log(time)
    return time
}
let stopShowingTime;
let counter = 1;

const runCounter = function () {
    runTimer();
    counter = counter + 1;
    if (counter > 5) {
        clearInterval(stopShowingTime);
    }
    

}
stopShowingTime = setInterval(runCounter, 5000);










