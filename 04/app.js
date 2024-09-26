let idInterval;
let counter = 0;

const runTimer = function(){
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    
    if(counter === 5){
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTimer, 1000);