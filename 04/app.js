const runTimer = function () {
  let intervalNumber = 0;
  let interval;

  interval = setInterval(function () {
    console.log(new Date().toLocaleTimeString());
    intervalNumber++;
    if (intervalNumber === 5) {
      clearInterval(interval);
    }
  }, 5000);
};

runTimer();
