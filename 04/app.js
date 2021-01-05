function runTimer() {


    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    }


    setTime = setInterval(runTimer, 5000);



    let idInterval;
    let counter =1;

    const showCounter = function() {
        counter++;

        if(counter > 5) {
            clearInterval(idInterval);
            clearInterval(setTime)
        
        }
    }

    idInterval = setInterval(showCounter, 5000);