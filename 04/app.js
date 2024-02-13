// jest błąd

let idInterval;

const runTimer = function () {
    for(let time = 1; time <= 5; time ++) {
            const time = (new Date()).toLocaleTimeString();
            console.log(time); 
        }
        
        if(time === 5) {
            clearInterval(idInterval);
        }
}

idInterval = setInterval(runTimer, 5000);
