let idInterval;
let counter = 1;

function runTimer() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    // timeCounter();
    // counter++;
    // console.log(counter);
    // if (counter > 5) {
    //     console.log('dziala');
    //     clearInterval(idInterval);
    // }
}

idInterval = setInterval(function(){
    runTimer();
    timeCounter();
}, 1000);
// runTimer();

function timeCounter(){
    counter++;
    if(counter>5){
        clearInterval(idInterval);
    }
}


