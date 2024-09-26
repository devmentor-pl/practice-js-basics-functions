let idStopTime;
let counter = 1;

const runTime = function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;

    if(counter > 5 ){
        clearInterval(idStopTime);
    }
}

idStopTime = setInterval(runTime, 5000);

