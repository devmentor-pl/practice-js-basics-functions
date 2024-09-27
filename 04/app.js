let counter = 0;
let idInterval;

let runTime = () => {

    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;

    if (counter >= 5) {
        clearInterval(idInterval)
        counter = 0;
    }
}

idInterval = setInterval(runTime, 5000);
