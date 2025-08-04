const runTimer = function () {
  let counter = 0;
  let timerId = setInterval(function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    counter++;
    if (counter >= 5) {
      clearInterval(timerId);
    }
  }, 5000);
};
runTimer();
