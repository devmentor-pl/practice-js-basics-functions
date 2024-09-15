let counter = 0;
const runTimer = setInterval(function () {
    if (counter < 5) {
        console.log(new Date().toLocaleTimeString())
        counter++
    } else {
        clearInterval(runTimer)
    }
}, 5000)

