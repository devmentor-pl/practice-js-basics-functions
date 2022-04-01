
let idInterval = null
function runTimer() {
    let counter = 1
    idInterval = setInterval(function() {
        if(counter >= 5) clearInterval(idInterval)
        
        const time = new Date().toLocaleTimeString()
        console.log(time) 
        
        counter++
               
    }, 5000)
}
runTimer()









