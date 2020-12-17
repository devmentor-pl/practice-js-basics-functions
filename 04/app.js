let counter = -1;
let idInterval;

const showTime = setInterval(function(){
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    counter++;

    if (counter <= 5) {
        console.log(`Current time is: ${time} and date: ${date}`);
    } else {
        clearInterval(idInterval);
    }
}, 5000);

console.log(showTime);

