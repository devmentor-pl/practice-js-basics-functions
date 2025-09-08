function runTimer() {
    console.log('start');
    let iteration = 0;
    const idInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        
        iteration ++;
        console.log (iteration);

        if(iteration === 5) {
            clearInterval(idInterval)
        }
    }, 1000)
}

runTimer()