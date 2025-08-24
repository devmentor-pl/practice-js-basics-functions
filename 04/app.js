function runTimer() {

    var iter = 0
    const idInter = setInterval(function() {
        const time = (new Date()).toLocaleTimeString()
    console.log(time)
    iter++
    console.log(iter)
    if(iter === 5) {
         clearInterval(idInter)
    }
   
    }, 1000)
}

runTimer()
