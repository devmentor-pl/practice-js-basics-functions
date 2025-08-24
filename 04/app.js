let idInterval;
let counter = 1;

const runTimer = function () {
    const date = new Date();
    let time = date.toLocaleTimeString();

    console.log(time);

    counter++
    if (counter > 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTimer, 5000);
