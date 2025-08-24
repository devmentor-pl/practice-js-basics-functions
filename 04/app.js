let timeIterator = 0;
function runTimer(){
    const time = new Date().toLocaleTimeString();
    console.log(time);
    timeIterator++
    console.log("timeIterator: ",timeIterator);
    if(timeIterator === 5){
        clearInterval(timeInterval);
    }
}
runTimer();
const timeInterval = setInterval(runTimer, 5000);

