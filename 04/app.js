let counter = 0;

let runTime = () => {

    if (counter < 5) {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        counter++;
    }
    else {
        clearInterval()
        counter = 0;
    }
}

setInterval(runTime, 5000);
