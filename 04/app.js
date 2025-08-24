let counter=0;
let interval;

const runTimer= function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    if (counter>=5) {
        clearInterval(interval)
    }
}

interval=setInterval(runTimer,5000);