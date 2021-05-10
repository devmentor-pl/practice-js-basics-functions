

function runTimer () {
    let counter = 1;
    let intervalId = setInterval(function() {
         console.log(`${new Date().toLocaleTimeString()} - wywołanie ${counter}`);
         if (counter === 5) {
             clearInterval(intervalId);
         } else {
            counter++;
         }
    }, 5000);  
}
runTimer();
