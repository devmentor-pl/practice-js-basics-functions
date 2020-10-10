let counter = 0;

const runTimer = function () {
    const hours = (new Date()).getHours();
    const minutes = (new Date()).getMinutes();
    const seconds = (new Date()).getSeconds();

    console.log(hours + ":" + minutes + ":" + seconds);
    counter++;

    if (counter >= 5) {
        clearInterval(idInterval);
        console.log('Koniec');
    }
}

const idInterval = setInterval(runTimer, 5000);