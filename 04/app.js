let counter = 0;

function runTimer() {
    const idInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        counter++;
        
        if(counter === 5) {
            clearInterval(idInterval);
        }

    }, 5000);
}

runTimer();


