let idInterval;
let counter = 1;

const runTime = function () {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);

    counter++;
    if (counter > 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTime, 1000);

