function runTimer(){
    console.log('start');

    var a = 0;

   const bTime = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);

        a++
        console.log(a);

        if(a === 5){
            clearInterval(bTime)
        }
    }, 1000);
    
}

runTimer()