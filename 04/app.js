function runTimer(){

    let counter = 0;

    const myInterval = setInterval(function(){
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        counter++;

        if(counter > 4) {
            clearInterval(myInterval)
        }
    },5000)
}

runTimer();


