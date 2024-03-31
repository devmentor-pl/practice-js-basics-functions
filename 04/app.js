function runTimer() {
    let counter = 0;
    let intervalId;

    function displayDate() {    
        counter++;   
        const date = (new Date()).toLocaleTimeString();        
        console.log(date);
        if (counter >= 5) {
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(displayDate, 5000);
}

runTimer();