function runTimer() {

    let counter = 0

    const id = setInterval(function () {
        const time = (new Date()).toLocaleTimeString()
        console.log(time)
        counter++;

        if (counter === 5) {
            clearInterval(id)
        }
    }, 5000)

}

runTimer()