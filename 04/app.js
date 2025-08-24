function runTimer() {
    let counter = 0;
    
    const intervalId = setInterval(function displayDate() {    
        counter++;   
        const date = (new Date()).toLocaleTimeString();        
        console.log(date, counter);
        if (counter >= 5) {
            clearInterval(intervalId);
        }
    }, 5000);

}

runTimer();