let runTimer;
let counter = 1;

const showTimeInterval = function () {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  counter++;

  if (counter > 5) {
    clearInterval(runTimer);
  }
};

runTimer = setInterval(showTimeInterval, 5000);
