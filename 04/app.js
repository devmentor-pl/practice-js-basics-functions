
function runTimer(numbers, milisec) {
    let counter = 1;
    const idInterval = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time)
        counter++

        if(counter > numbers) {
            clearInterval(idInterval);
        }
    }, milisec)

}

runTimer(5, 5000);