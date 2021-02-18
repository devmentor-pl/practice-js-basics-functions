let counter = 0;

const runTimer = () => console.log((new Date()).toLocaleTimeString());
runTimer();

const refreshFiveTimes = setInterval(() => {
    runTimer();
    if (++counter >= 4) {
        clearInterval(refreshFiveTimes);
    }
}, 5000);

// 