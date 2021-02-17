let counter = 0;

const showTime = () => {
    const time = new Date();
    console.log(`${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}:${time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()}`);
}

showTime();

const runTimer = setInterval(() => {
    showTime();
    counter++;
    if (counter >= 5) {
        clearInterval(runTimer);
        return;
    }
}, 5000);

