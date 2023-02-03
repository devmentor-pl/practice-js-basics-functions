let stopInterval;
counter = 1;

function runTimer() {
  const time = new Date().toLocaleTimeString();
  console.log(time);

  counter++;

  if (counter > 5) {
    clearInterval(stopInterval);
  }
}

stopInterval = setInterval(runTimer, 5000);
