
let counter = 1;
let dInterval;

const showTime = function(time) {
    console.log(time);
}

const generateTime = function() {
    return new Date().toLocaleTimeString();
}

const runTimer = function() {
    if(counter === 5) {
        clearInterval(dInterval);
    }
    showTime(generateTime());
    counter++;
}

dInterval = setInterval(runTimer, 5000);
