function runTimer () {
    console.log('maria');

    let iter = 0

    const Timer = setInterval(function(){

        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        iter++
        console.log(iter)


        if(iter === 5){
            clearInterval(Timer)
        }
        
    }, 1000)
}

runTimer()