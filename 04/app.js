let counter = 0;
let countInterval;

function runTimer() {
    let currentTime = (new Date()).toLocaleTimeString()
    counter++;
    console.log(currentTime);

    if(counter > 4) {
        clearInterval(countInterval);
    }
}

countInterval = setInterval(runTimer, 5000);