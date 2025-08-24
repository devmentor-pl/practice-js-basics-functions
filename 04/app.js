let counter = 1;
let intervalID;

function runTimer() {
    counter++;
    if (counter > 5) {
        clearInterval(intervalID);
    }
    const time = (new Date()).toLocaleTimeString();
    console.log(time);

}



intervalID = setInterval(runTimer, 5000);
