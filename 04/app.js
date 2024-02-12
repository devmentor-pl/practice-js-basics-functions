// jest błąd - wyświetla się 5x, ale w tym samym czasie

let idInterval;
let counter = 1;

const runTimer = function () {
    for(let i = 1; i <= 5; i ++) {
        const time = (new Date()).toLocaleTimeString();
        console.log(time); 
        console.log(i);
        if(i === 5) {
            clearInterval(idInterval);
        }
    }
}

idInterval = setInterval(runTimer, 5000);
