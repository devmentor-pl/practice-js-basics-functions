
let idInterval;

let counter = 1;

const showTime = function () {
    const time = (new Date()).toLocaleTimeString();
    counter++;
    console.log(time);

    if (counter > 5) {
        clearInterval(idInterval);
    }

}

idInterval = setInterval(showTime, 5000);