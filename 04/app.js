let counter = 0;
function runTimer() {
  const showTime = setInterval(function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    counter++;
    if (counter >= 5) {
      clearInterval(showTime);
    }
  }, 5000);
}
runTimer();
