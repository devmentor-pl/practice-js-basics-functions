let counter=0;

const RunTimer =  setInterval(function(){
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;

    if (counter===5) {
        clearInterval(RunTimer);
    }
    
}, 5000)





