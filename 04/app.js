function runTimer() {
    let i = 0;
    const idInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        i++;

        if(i === 5) {
            clearInterval(idInterval);
        }
    }, 5000);    
}

runTimer();