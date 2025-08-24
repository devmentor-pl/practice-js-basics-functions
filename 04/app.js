let counter = 1;
const runTimer = setInterval(function () {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  counter++;
  if (counter > 5) {
    clearInterval(runTimer);
  }
}, 5000);

runTimer;