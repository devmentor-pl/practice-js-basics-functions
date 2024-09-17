function runTimer() {
    console.log('start');

    let iter =0;
    const idTimer = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        iter++;
        console.log(iter);

        if(iter === 5) {
            clearInterval(idTimer);
        }
    }, 500);
}

runTimer();