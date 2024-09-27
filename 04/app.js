function runTimer() {
  let repeats = 0;
  const timer = setInterval(function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    repeats++;
    if (repeats === 5) {
      clearInterval(timer);
    }
  }, 5000);
}
