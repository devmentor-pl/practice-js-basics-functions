let intervalID;
let counter = 1;

const runTimer = function () {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;

    if (counter > 5) {
        clearInterval(intervalID);
    }
}

intervalID = setInterval(runTimer, 5000);
