let iteration = 0;
const clock = setInterval(function()
{
    const now = new Date();
    const time = runTimer(now);
    //let i = 0;
    iteration++;

    document.title=time;
    console.clear();
    console.log(time);
    if(iteration >=5)
    {
        clearInterval(clock);
    }

}, 5000);

function runTimer(date)
{
    let time = startWithZero(date.getFullYear());
    time += '-' + startWithZero(date.getMonth()+1);
    time += '-' + startWithZero(date.getDate());
    time += ' ' + startWithZero(date.getHours());
    time += ':' + startWithZero(date.getMinutes());
    time += ':' + startWithZero(date.getSeconds());
    return time;
}

function startWithZero(num){
    return (num < 10 ? '0' : '') +num;
}

