let counter = 0;


let showTime = function () {
    counter++;
    console.log('ilość wyświetlanej informacji to:' + '' + counter);
    const time = new Date().toLocaleTimeString();
    console.log(time);


}

setInterval(showTime, 5000);