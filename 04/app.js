let counter = 1;
let time;
let result;

const runTimer = function() {
    time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    
    if(counter>5) {
        clearInterval(result);
    }
    
}

result = setInterval(runTimer, 5000);