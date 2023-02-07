let idInterval;
let counter = 1;

idInterval = setInterval(() => {
    console.log(counter);
    counter++;

    if (counter > 5) {
        clearInterval(idInterval);
    }

    console.log((new Date()).toLocaleTimeString());
}, 5000);

function runTimer() {    
    console.log(idInterval);
}

runTimer();