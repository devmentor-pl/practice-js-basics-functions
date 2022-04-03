
let numberInterval = 0;
let idInterval;

function runTimer() {
    numberInterval++;
    console.log(numberInterval);
    console.log(new Date().getHours(), new Date().getMinutes());



    if (numberInterval >= 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(runTimer, 5000);



