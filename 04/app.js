function startTimer() {
    let iteration = 0
    const id = setInterval(function () {
        const time = (new Date()).toLocaleTimeString();
        console.log(time)
        iteration = iteration + 1
        console.log(iteration)

        if (iteration === 5) {
            clearInterval(id)
        }
    }, 1000);

}

startTimer();