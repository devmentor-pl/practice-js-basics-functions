let idInterval;
let counter = 0;

const runTimer = function () {
  let time = new Date().toLocaleTimeString();
  counter++;

  if (counter <= 5) {
    console.log(time);
  } else {
    clearInterval(idInterval);
  }
};

idInterval = setInterval(runTimer, 5000);
