let idInterval
let counter = 1

const runTimer = function() {
    counter++
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    if (counter > 5) {
        clearInterval(idInterval)
    }
    console.log(time)
}

idInterval = setInterval(runTimer, 5000)