function showTime() {
    const date = (new Date()).toLocaleDateString();
    const hours = (new Date()).getHours();
    const minutes = (new Date()).getMinutes();
    const seconds = (new Date()).getSeconds();

    console.log('Data: ' + date);
    console.log('Czas: ' + hours + ':' + minutes + ":" + seconds);
}

showTime();