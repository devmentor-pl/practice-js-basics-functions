function runTimer() {
  console.log(`start`);
  let iterration = 0;
  const interval = setInterval(function () {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    iterration++;
    if (iterration === 5) {
      clearInterval(interval);
      console.log("stop");
    }
  }, 2000);
}

runTimer();
