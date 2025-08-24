function runTime() {
    let interval = 0
    const timeInterval = setInterval(() => {
        const date = new Date();
        console.log(date.toLocaleTimeString())
        interval++
        
        if (interval === 5) {
            clearInterval(timeInterval);
            console.log("interval przerwany");
        };
    }, 5000);
};
runTime();



