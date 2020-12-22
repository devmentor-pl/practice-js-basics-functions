let idInterval;
let counter = 0;

const runTimer = function () {
    console.log(new Date().toLocaleTimeString());
    counter++;

    if(counter >= 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTimer, 5000);