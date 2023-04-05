function showTime () {
    console.log('show time')

    const time = (new Date()).toLocaleTimeString();
    console.log(time);
}

showTime()