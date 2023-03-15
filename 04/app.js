let stopInterval;
let counter = 0;
function runTimer() {
    stopInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        counter++;
    
        if(counter >= 5) {
            clearInterval(stopInterval);
        }
    }, 5000)
}

runTimer();