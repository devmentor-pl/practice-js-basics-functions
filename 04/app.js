function runTimer() {
    let count = 0;  
    const intervalId = setInterval(function() {
        const time = new Date().toLocaleTimeString();
        console.log(time); 
        
        count++; 

        if (count === 5) {
            clearInterval(intervalId); 
        }
    }, 5000); 
}

runTimer();