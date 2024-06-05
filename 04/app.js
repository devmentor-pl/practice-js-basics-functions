function runTimer() {

    let idInterval;
    let counter = 5;

    const time = function() {
        if (counter == 0) {
            clearInterval(idInterval);
        } else {
            console.log((new Date()).toLocaleTimeString());
            counter--;
        }
    }

    idInterval = setInterval(time,5000);

}
runTimer();