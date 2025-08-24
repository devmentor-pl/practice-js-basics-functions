
let interval = setInterval(runTimer, 5000);
let iteration = 1;

function runTimer() {
    const time = (new Date()).toTimeString();
    console.log(time);
    iteration ++;

    if (iteration > 5) {
        clearInterval(interval)
    }
}

runTimer();