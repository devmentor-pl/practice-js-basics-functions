function runTimer() {
    console.log('start')

    let iter = 0;
    const idInterval = setInterval(function () {

        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        iter++;
        console.log(iter);
        
        if (iter === 5) { clearInterval(idInterval); }

    }, 1000);
}

runTimer()
