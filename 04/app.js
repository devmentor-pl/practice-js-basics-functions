let counter = 0;
let idInterval;

function runTimer() {

    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++
    console.log(counter);

    if(counter > 4) {
        clearInterval(idInterval);
    }

}

idInterval = setInterval(runTimer, 500);