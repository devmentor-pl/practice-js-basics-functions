function runTimer() {
    let i = 0;
    const idInterval = setInterval(function() {
        
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        
        i++;
        console.log(i);

        if(i === 5) {
            clearInterval(idInterval);
        }
    }, 1000);
}
runTimer()