function runTimer(){
    console.log('start');
    let counter = 0;
    const idInterval = setInterval(function(){

        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        counter++;
        console.log(counter);

        if(counter === 5){
            clearInterval(idInterval);
        }
    }, 1000)
}


runTimer();