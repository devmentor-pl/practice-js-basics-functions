function showTime() {
    const time = (new Date()).toLocaleTimeString();
    console.log('aktualna godzina: ' + time);
}
console.log(showTime())
