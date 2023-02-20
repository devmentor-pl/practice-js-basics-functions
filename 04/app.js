let idInterval;
let counter = 0;

const showCounter = function() {
    console.log(counter);
    counter++

if(counter>5) {
    clearInterval(idInterval);
    }
}

idInterval = setInterval(showCounter, 5000);

function runTimer() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
}