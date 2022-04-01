showTime()

function showTime() {
    const time = new Date().toLocaleTimeString()
    console.log(time)
}

const idInterval = setInterval(showTime, 1000)