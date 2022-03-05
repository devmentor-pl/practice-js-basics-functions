
let counter=0;
let idIntv;

const showTime = function(){
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter+=1;
    if (counter===5) clearInterval(idIntv);    
}

function runTimer()
{
    idIntv=setInterval(showTime,5000);
}

runTimer();