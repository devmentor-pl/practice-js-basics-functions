function showTime() 
{
    let currentTime = new Date();
    console.log(currentTime);
    
    return (new Date()).toLocaleTimeString();
}

document.getElementById('time').innerHTML = showTime();

setInterval(function() {

    document.getElementById('time').innerHTML = showTime();

}, 1000);