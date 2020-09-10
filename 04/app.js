let idInterval;
let counter = 1;

const runTimer = function() {
    const time = (new Date()).toLocaleTimeString();
    
    console.log('Aktualny czas to: ' + time);
    if(counter === 5) {
        clearInterval(idInterval);
    }
    counter++;
}

idInterval = setInterval(runTimer, 5000);