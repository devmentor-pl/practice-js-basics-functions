'use strict'

function showTime() {
    const time = (new Date()).toLocaleTimeString();
    return console.log(time);
}
showTime()