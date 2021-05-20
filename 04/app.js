let idInterval;
let counter = 1;

function showTime() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    if(counter > 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(showTime, 1000);