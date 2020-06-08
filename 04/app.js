let counter = 0;
let idInterval;

let showTime = setInterval(function () {
    counter++;
    console.log('ilość wyświetlanej informacji to:' + ' ' + counter);
    const showTime = new Date().toLocaleTimeString();
    console.log(showTime)


    if (counter >= 5) {
        clearInterval(idInterval)
    }


}, 5000)