let counter = 0;


let runTimmer = function () {
    counter++;
    console.log('ilość wyświetlanej informacji to:' + ' ' + counter);
    const time = new Date().toLocaleTimeString();
    console.log(runTimmer);


}

setInterval(showTime, 5000);