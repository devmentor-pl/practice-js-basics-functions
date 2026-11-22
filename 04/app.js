let currentTime;
let endTime;
let count = 0;
function runtimer() {
    count++
    currentTime = (new Date().toLocaleTimeString());
    console.log(`${count} - ${currentTime}`);

    if(count >= 5) {
      clearInterval(endTime);
    };
}

endTime = setInterval(runtimer, 1000);