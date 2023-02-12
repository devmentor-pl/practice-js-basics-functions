function runTimer() {
    console.log('start');

    let iter = 0
    const idInterwal = setInterval(function () {

        const time = (new Date()).toLocaleDateString();
        console.log(time);

        iter++;
        console.log(iter);

        if(iter ===5)
        clearInterval(idInterwal);

    }, 1000)
}

runTimer();