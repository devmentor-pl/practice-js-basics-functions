let counter = 0;

const runTimer = function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    console.log(counter);

    if(counter >= 5) {
    clearInterval(intervalId);
    console.log("Timer stop!");
    }
}

const intervalId = setInterval(runTimer, 5000);