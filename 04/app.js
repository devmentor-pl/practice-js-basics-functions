function runTimer() {
  console.log('start');

  let iteration = 0;
  const interval = setInterval(function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    iteration++;
    console.log(iteration);

    if (iteration === 5) {
      clearInterval(interval);
    }
  }, 5000);
}

runTimer();
