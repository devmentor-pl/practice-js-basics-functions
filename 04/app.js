function runTimer() {
  let counter = 0;
  let idInterval = setInterval(function () {
    counter++;
    if (counter > 4) {
      clearInterval(idInterval);
    }

    const time = new Date().toLocaleTimeString();
    console.log(time);
  }, 2000);
}

runTimer();
