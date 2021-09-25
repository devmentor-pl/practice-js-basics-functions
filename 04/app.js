let counter = 1;
let idInterval;

const runTimer = function() {


    let time = (new Date()).toLocaleTimeString();

    if (counter > 5) {

        clearInterval(idInterval);
    }   
    
    else {
        console.log(time);
        counter++;
    }

}


idInterval = setInterval(runTimer,1000);