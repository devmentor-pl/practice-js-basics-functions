let counter = 0;
let clearIntervalTime = setInterval(function () {
    counter++;
    console.log((new Date()).toLocaleTimeString());
    if (counter === 5) {
        clearInterval(clearIntervalTime);
    };
}, 1000);