function runTimer() {
    let counter = 0;

    const intervalId = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        counter++;

        if (counter === 5) {
            clearInterval(intervalId);
        }
    }, 5000);
}

runTimer();