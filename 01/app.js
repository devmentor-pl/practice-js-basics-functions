

function showTime() {
const time = (new Date()).toLocaleTimeString();
console.clear()
console.log(time);
}

setInterval(showTime, 1000)
