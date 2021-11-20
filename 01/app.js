function showTime() {

    let currentTime = new Date();
    console.log(currentTime);

    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hour = checkTime(hour)
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);


    document.getElementsByClassName('clock')[0].innerHTML = hour + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

