'use strict'

function runTimer() {
    let interNo = 0
    const timer = setInterval(function () {
        let time = (new Date()).toLocaleTimeString();
        console.log(time)
        interNo++
        console.log(interNo)
        if (interNo >= 5) {
            clearInterval(timer)
        }

    }, 5000)
}

runTimer()
