let idInterval
let counter = 0
const runTimer = function () {
    console.log(new Date().getHours() + ":" + new Date().getMinutes())
    counter++
    if (counter >= 5) {
        clearInterval(idInterval)
    }
}
idInterval = setInterval(runTimer, 5000)
