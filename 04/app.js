let counter = 0;
let interval;

const runTimer = function() {
    const time = new Date().toLocaleTimeString();
    counter++;
    console.log(counter);
    console.log(time)
    if (counter === 5) {
        clearInterval(interval);
    }
}

interval = setInterval(runTimer, 5000);

