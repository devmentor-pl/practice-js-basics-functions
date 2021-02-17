let counter = 0;

const showTime = () => console.log((new Date()).toLocaleTimeString());
showTime();

const runTimer = setInterval(() => {
    showTime();
    if (++counter >= 5) {
        clearInterval(runTimer);
    }
}, 5000);

