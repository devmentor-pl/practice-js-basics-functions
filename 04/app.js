let idInterval;
let counter = 1;

const runnerTime = function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    counter++;
    if (counter > 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runnerTime, 5000);