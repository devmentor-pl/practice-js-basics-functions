let counter = 0;

function runTimer() {
    counter++;
    const time = (new Date()).toLocaleTimeString(); 
    console.log('Godzina: '+ time);

    if(counter > 4) {
        clearInterval(check);
    }
}

const check = setInterval(runTimer, 5000);
