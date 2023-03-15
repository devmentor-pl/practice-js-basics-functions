let stopInterval;
let counter = 0;
function runTimer() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;

    if(counter >= 5) {
        clearInterval(stopInterval);
    }
}

stopInterval = setInterval(runTimer, 1000) ;