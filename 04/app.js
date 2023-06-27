let idInterval = setInterval(runTimer, 5000);
let counter = 0;

function runTimer() {
    const time = (new Date()).toLocaleTimeString();
    counter++;
    console.log(time);

    if(counter >= 5) {
        clearInterval(idInterval);
    }
}

runTimer();