function runTimer() {
    console.log('start');

    setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
    }, 10);
}

runTimer();