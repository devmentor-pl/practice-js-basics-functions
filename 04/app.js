let counter = 5;
let id;
const runTimer = function() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter--;
    if(counter < 1){
        clearInterval(id);
    }
}

id = setInterval(runTimer, 5000);